import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Package, Truck, Store, ShoppingCart } from "lucide-react";

interface StageData {
  id: number;
  name: string;
  icon: React.ElementType;
  status: "completed" | "current" | "pending";
  timestamp?: string;
  location?: string;
  handler?: string;
}

interface SupplyChainVisualizationProps {
  stages: StageData[];
  produceId?: string;
}

export function SupplyChainVisualization({ stages, produceId }: SupplyChainVisualizationProps) {
  const getStageColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-gradient-primary text-primary-foreground";
      case "current":
        return "bg-gradient-harvest text-accent-foreground animate-pulse";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Completed</Badge>;
      case "current":
        return <Badge className="bg-accent/10 text-accent border-accent/20">In Progress</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  return (
    <Card className="shadow-soft border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          Supply Chain Journey
          {produceId && (
            <Badge variant="outline" className="ml-auto">
              ID: #{produceId}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/50" />
          
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={stage.id} className="relative flex items-start gap-6">
                {/* Stage Icon */}
                <div className={`relative z-10 p-4 rounded-full shadow-soft transition-smooth ${getStageColor(stage.status)}`}>
                  <stage.icon className="h-6 w-6" />
                </div>
                
                {/* Stage Content */}
                <div className="flex-1 min-h-[80px] pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{stage.name}</h3>
                    {getStatusBadge(stage.status)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                    {stage.timestamp && (
                      <div>
                        <span className="font-medium">Time:</span> {stage.timestamp}
                      </div>
                    )}
                    
                    {stage.location && (
                      <div>
                        <span className="font-medium">Location:</span> {stage.location}
                      </div>
                    )}
                    
                    {stage.handler && (
                      <div>
                        <span className="font-medium">Handler:</span> {stage.handler}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Example usage data
export const sampleSupplyChainData: StageData[] = [
  {
    id: 1,
    name: "Harvested",
    icon: Sprout,
    status: "completed",
    timestamp: "2024-01-15 08:30",
    location: "Green Valley Farm, Odisha",
    handler: "Farmer: Raj Kumar"
  },
  {
    id: 2,
    name: "Packaged",
    icon: Package,
    status: "completed",
    timestamp: "2024-01-15 14:20",
    location: "Processing Unit A",
    handler: "Processor: AgriPack Ltd"
  },
  {
    id: 3,
    name: "Shipped",
    icon: Truck,
    status: "current",
    timestamp: "2024-01-16 09:15",
    location: "In Transit to Bhubaneswar",
    handler: "LogisTrans Pvt Ltd"
  },
  {
    id: 4,
    name: "Received",
    icon: Store,
    status: "pending",
    location: "FreshMart Distribution Center",
    handler: "Pending"
  },
  {
    id: 5,
    name: "Sold",
    icon: ShoppingCart,
    status: "pending",
    location: "Retail Store",
    handler: "Pending"
  }
];