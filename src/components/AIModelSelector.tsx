import { Brain, Zap, Star, Coins } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const aiModels = [
  {
    id: "gpt-4",
    name: "GPT-4",
    provider: "OpenAI",
    credits: 10,
    speed: "ปานกลาง",
    quality: "สูงมาก",
    icon: Brain,
    description: "โมเดลที่ฉลาดที่สุด เหมาะสำหรับงานซับซ้อน"
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    provider: "OpenAI", 
    credits: 5,
    speed: "เร็ว",
    quality: "สูง",
    icon: Zap,
    description: "สมดุลระหว่างความเร็วและคุณภาพ"
  },
  {
    id: "claude-3",
    name: "Claude 3",
    provider: "Anthropic",
    credits: 8,
    speed: "ปานกลาง",
    quality: "สูงมาก", 
    icon: Star,
    description: "เก่งในการวิเคราะห์และเขียน"
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    provider: "Google",
    credits: 6,
    speed: "เร็ว",
    quality: "สูง",
    icon: Brain,
    description: "เชี่ยวชาญด้านการค้นหาและข้อมูล"
  }
];

interface AIModelSelectorProps {
  selected: string;
  onSelect: (model: string) => void;
}

export const AIModelSelector = ({ selected, onSelect }: AIModelSelectorProps) => {
  const selectedModel = aiModels.find(m => m.id === selected) || aiModels[0];

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">เลือกโมเดล AI</Label>
      <Select value={selected} onValueChange={onSelect}>
        <SelectTrigger className="w-full">
          <SelectValue>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <selectedModel.icon className="h-4 w-4" />
                <span>{selectedModel.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {selectedModel.provider}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Coins className="h-3 w-3" />
                {selectedModel.credits}
              </div>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {aiModels.map((model) => (
            <SelectItem key={model.id} value={model.id}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <model.icon className="h-4 w-4" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{model.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {model.provider}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {model.description}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      ความเร็ว: {model.speed} | คุณภาพ: {model.quality}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium">
                  <Coins className="h-3 w-3" />
                  {model.credits}
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};