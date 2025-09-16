// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AgriSupplyChain {
    // --- Minimal AccessControl Implementation ---
    struct RoleData {
        mapping(address => bool) members;
    }

    mapping(bytes32 => RoleData) private _roles;
    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;
    bytes32 public constant FARMER_ROLE = keccak256("FARMER_ROLE");
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");
    bytes32 public constant RETAILER_ROLE = keccak256("RETAILER_ROLE");

    modifier onlyRole(bytes32 role) {
        require(hasRole(role, msg.sender), "AccessControl: sender lacks role");
        _;
    }

    function hasRole(bytes32 role, address account) public view returns (bool) {
        return _roles[role].members[account];
    }

    function _grantRole(bytes32 role, address account) internal {
        _roles[role].members[account] = true;
    }

    function _revokeRole(bytes32 role, address account) internal {
        _roles[role].members[account] = false;
    }

    event RoleGranted(bytes32 indexed role, address indexed account);

    // --- Supply Chain Logic ---
    enum Stage { Harvested, Packaged, Shipped, Received, Sold }

    mapping(Stage => Stage) private _validTransitions;
    uint256 private _produceCount;
    uint256 public constant MAX_HISTORY_ENTRIES = 10;

    struct Produce {
        string name;
        string origin;
        Stage currentStage;
        address currentOwner;
        string[] history;
    }

    mapping(uint256 => Produce) private _produces;

    event ProduceAdded(uint256 indexed id, string name, address farmer);
    event StageUpdated(uint256 indexed id, Stage newStage, address updater);

    constructor() {
        // Set up role for deployer
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(FARMER_ROLE, msg.sender);

        // Define valid stage transitions
        _validTransitions[Stage.Harvested] = Stage.Packaged;
        _validTransitions[Stage.Packaged] = Stage.Shipped;
        _validTransitions[Stage.Shipped] = Stage.Received;
        _validTransitions[Stage.Received] = Stage.Sold;
    }

    // --- Core Functions ---
    function addProduce(string memory _name, string memory _origin)
        external
        onlyRole(FARMER_ROLE)
    {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_origin).length > 0, "Origin cannot be empty");

        _produceCount++;
        _produces[_produceCount] = Produce({
            name: _name,
            origin: _origin,
            currentStage: Stage.Harvested,
            currentOwner: msg.sender,
            history: new string[](1)
        });
        _produces[_produceCount].history[0] = _formatHistoryEntry(Stage.Harvested, msg.sender);

        emit ProduceAdded(_produceCount, _name, msg.sender);
    }

    function updateStage(
        uint256 _id,
        Stage _newStage,
        string memory _notes
    )
        external
    {
        Produce storage produce = _produces[_id];
        require(produce.currentOwner == msg.sender, "Not the current owner");

        // Validate stage transition
        require(
            _validTransitions[produce.currentStage] == _newStage,
            "Invalid stage transition"
        );

        // Update history
        if (produce.history.length >= MAX_HISTORY_ENTRIES) {
            for (uint256 i = 1; i < MAX_HISTORY_ENTRIES; i++) {
                produce.history[i-1] = produce.history[i];
            }
            produce.history[MAX_HISTORY_ENTRIES-1] = _formatHistoryEntry(_newStage, msg.sender, _notes);
        } else {
            produce.history.push(_formatHistoryEntry(_newStage, msg.sender, _notes));
        }

        // Update stage and owner
        produce.currentStage = _newStage;
        produce.currentOwner = _getOwnerForStage(_newStage, msg.sender);

        emit StageUpdated(_id, _newStage, msg.sender);
    }

    // --- Role Management ---
    function grantRole(bytes32 _role, address _account)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        _grantRole(_role, _account);
        emit RoleGranted(_role, _account);
    }

    // --- View Functions ---
    function getProduce(uint256 _id)
        external
        view
        returns (Produce memory)
    {
        return _produces[_id];
    }

    function getProduceCount()
        external
        view
        returns (uint256)
    {
        return _produceCount;
    }

    // --- Internal Helpers ---
    function _formatHistoryEntry(
        Stage _stage,
        address _updater,
        string memory _notes
    )
        private
        view
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    _stageToString(_stage),
                    " by ",
                    _getRoleName(_updater),
                    ": ",
                    _notes
                )
            );
    }

    function _formatHistoryEntry(
        Stage _stage,
        address _updater
    )
        private
        view
        returns (string memory)
    {
        return _formatHistoryEntry(_stage, _updater, "");
    }

    function _stageToString(Stage _stage)
        private
        pure
        returns (string memory)
    {
        if (_stage == Stage.Harvested) return "Harvested";
        if (_stage == Stage.Packaged) return "Packaged";
        if (_stage == Stage.Shipped) return "Shipped";
        if (_stage == Stage.Received) return "Received";
        if (_stage == Stage.Sold) return "Sold";
        return "Unknown";
    }

    function _getRoleName(address _account)
        private
        view
        returns (string memory)
    {
        if (hasRole(FARMER_ROLE, _account)) return "Farmer";
        if (hasRole(DISTRIBUTOR_ROLE, _account)) return "Distributor";
        if (hasRole(RETAILER_ROLE, _account)) return "Retailer";
        if (hasRole(DEFAULT_ADMIN_ROLE, _account)) return "Admin";
        return "Unknown";
    }

    function _getOwnerForStage(Stage _newStage, address _updater)
        private
        view
        returns (address)
    {
        if (_newStage == Stage.Packaged || _newStage == Stage.Shipped) {
            require(hasRole(DISTRIBUTOR_ROLE, _updater), "Only distributors can update this stage");
            return _updater;
        } else if (_newStage == Stage.Received || _newStage == Stage.Sold) {
            require(hasRole(RETAILER_ROLE, _updater), "Only retailers can update this stage");
            return _updater;
        }
        return _updater;
    }
}