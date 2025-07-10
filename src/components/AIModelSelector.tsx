import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, DollarSign, Sparkles } from "lucide-react";

const aiModels = [
  {
    name: "GPT-4",
    provider: "OpenAI",
    cost: "0.03/คำสั่ง",
    bestFor: "งานเขียน, วิเคราะห์",
    icon: Brain,
    color: "bg-blue-500"
  },
  {
    name: "Claude 3",
    provider: "Anthropic", 
    cost: "0.025/คำสั่ง",
    bestFor: "โค้ด, งานวิจัย",
    icon: Sparkles,
    color: "bg-purple-500"
  },
  {
    name: "Gemini Pro",
    provider: "Google",
    cost: "0.02/คำสั่ง", 
    bestFor: "แปลภาษา, สรุป",
    icon: Zap,
    color: "bg-orange-500"
  }
];

const AIModelSelector = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          เลือก AI Model
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {aiModels.map((model, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${model.color} text-white`}>
                <model.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium">{model.name}</div>
                <div className="text-sm text-muted-foreground">{model.bestFor}</div>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="outline" className="mb-1">
                <DollarSign className="h-3 w-3 mr-1" />
                {model.cost}
              </Badge>
              <div className="text-xs text-muted-foreground">{model.provider}</div>
            </div>
          </div>
        ))}
        
        <Button className="w-full mt-4" variant="outline">
          ให้ AI เลือกให้อัตโนมัติ
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIModelSelector;