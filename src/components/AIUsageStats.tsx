import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

const usageStats = [
  {
    model: "GPT-4",
    usage: 45,
    cost: 1.35,
    trend: "up",
    percentage: 12
  },
  {
    model: "Claude 3", 
    usage: 32,
    cost: 0.8,
    trend: "down",
    percentage: -5
  },
  {
    model: "Gemini Pro",
    usage: 28,
    cost: 0.56,
    trend: "up", 
    percentage: 8
  }
];

const AIUsageStats = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          สถิติการใช้งาน AI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {usageStats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex-1">
              <div className="font-medium">{stat.model}</div>
              <div className="text-sm text-muted-foreground">
                {stat.usage} ครั้ง • ฿{stat.cost.toFixed(2)}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={stat.trend === "up" ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {Math.abs(stat.percentage)}%
              </Badge>
            </div>
          </div>
        ))}
        
        <div className="pt-3 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">รวมค่าใช้จ่ายวันนี้:</span>
            <span className="font-medium">฿2.71</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIUsageStats;