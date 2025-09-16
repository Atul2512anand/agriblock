import { StatsCard } from "@/components/Dashboard/StatsCard";
import { SupplyChainVisualization, sampleSupplyChainData } from "@/components/SupplyChain/SupplyChainVisualization";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sprout, 
  Package, 
  Truck, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your agricultural supply chain in real-time</p>
        </div>
        <Button variant="hero">
          Add New Produce
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Produces"
          value="1,247"
          description="Items in system"
          icon={Sprout}
          trend={{ value: 12, isPositive: true }}
          gradient="primary"
        />
        
        <StatsCard
          title="Active Shipments"
          value="89"
          description="Currently in transit"
          icon={Truck}
          trend={{ value: 8, isPositive: true }}
          gradient="earth"
        />
        
        <StatsCard
          title="Completed Orders"
          value="542"
          description="This month"
          icon={Package}
          trend={{ value: 23, isPositive: true }}
          gradient="fresh"
        />
        
        <StatsCard
          title="Network Partners"
          value="156"
          description="Active stakeholders"
          icon={Users}
          trend={{ value: 5, isPositive: true }}
          gradient="harvest"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "New produce added",
                  item: "Organic Tomatoes #1248",
                  time: "2 hours ago",
                  status: "completed",
                  actor: "Green Valley Farm"
                },
                {
                  action: "Stage updated",
                  item: "Rice Batch #1247",
                  time: "4 hours ago",
                  status: "current",
                  actor: "QuickShip Logistics"
                },
                {
                  action: "Quality check passed",
                  item: "Wheat #1246",
                  time: "6 hours ago",
                  status: "completed",
                  actor: "FreshMart Distribution"
                },
                {
                  action: "Shipment delayed",
                  item: "Corn Batch #1245",
                  time: "8 hours ago",
                  status: "warning",
                  actor: "LogisTrans"
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-smooth">
                  <div className={`p-2 rounded-full ${
                    activity.status === 'completed' ? 'bg-primary/10 text-primary' :
                    activity.status === 'current' ? 'bg-accent/10 text-accent' :
                    activity.status === 'warning' ? 'bg-destructive/10 text-destructive' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {activity.status === 'completed' && <CheckCircle className="h-4 w-4" />}
                    {activity.status === 'current' && <Clock className="h-4 w-4" />}
                    {activity.status === 'warning' && <AlertTriangle className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">{activity.item} • {activity.actor}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-soft border-border/50">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="fresh" className="h-20 flex-col">
                <Sprout className="h-6 w-6 mb-2" />
                Add Produce
              </Button>
              <Button variant="earth" className="h-20 flex-col">
                <Package className="h-6 w-6 mb-2" />
                Update Stage
              </Button>
              <Button variant="harvest" className="h-20 flex-col">
                <Truck className="h-6 w-6 mb-2" />
                Track Shipment
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="h-6 w-6 mb-2" />
                Manage Partners
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Supply Chain Visualization */}
      <SupplyChainVisualization 
        stages={sampleSupplyChainData} 
        produceId="1247"
      />
    </div>
  );
}