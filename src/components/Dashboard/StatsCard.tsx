import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  gradient?: "primary" | "earth" | "fresh" | "harvest";
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  gradient = "primary" 
}: StatsCardProps) {
  const getGradientClass = (gradient: string) => {
    switch (gradient) {
      case "earth":
        return "bg-gradient-earth";
      case "fresh":
        return "bg-gradient-fresh";
      case "harvest":
        return "bg-gradient-harvest";
      default:
        return "bg-gradient-primary";
    }
  };

  return (
    <Card className="shadow-soft border-border/50 hover:shadow-glow transition-smooth group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-foreground">{value}</p>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
              {trend && (
                <div className={`flex items-center gap-1 text-sm ${
                  trend.isPositive ? 'text-primary' : 'text-destructive'
                }`}>
                  <span>{trend.isPositive ? '↗' : '↘'}</span>
                  <span>{Math.abs(trend.value)}%</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              )}
            </div>
          </div>
          
          <div className={`p-3 rounded-lg shadow-soft group-hover:scale-110 transition-bounce ${getGradientClass(gradient)}`}>
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}