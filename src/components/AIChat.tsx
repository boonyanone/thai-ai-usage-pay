import { useState } from "react";
import { Send, Sparkles, Share2, ThumbsUp, ThumbsDown, ExternalLink, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PersonaSelector } from "./PersonaSelector";
import { AIModelSelector } from "./AIModelSelector";
import { QuestionSuggestions } from "./QuestionSuggestions";

interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  sources?: Source[];
  suggestedQuestions?: string[];
  model?: string;
  persona?: string;
}

interface Source {
  title: string;
  url: string;
  domain: string;
  reliability: "high" | "medium" | "low";
  snippet: string;
}

export const AIChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedPersona, setSelectedPersona] = useState("general");
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || inputMessage;
    if (!messageToSend.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: messageToSend,
      role: "user",
      timestamp: new Date(),
      persona: selectedPersona,
      model: selectedModel,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response with sources
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `ตามที่คุณถาม "${messageToSend}" สำหรับ${getPersonaLabel(selectedPersona)} 

ผลการวิเคราะห์จากแหล่งข้อมูลที่เชื่อถือได้:

ข้อมูลนี้มาจากการรวบรวมจากแหล่งข้อมูลหลายแห่ง โดยมีความน่าเชื่อถือในระดับสูง เนื่องจากมาจากสถาบันการศึกษาและหน่วยงานราชการที่เป็นที่ยอมรับ

**สรุปสำคัญ:**
- จุดที่ 1: ข้อมูลสำคัญจากแหล่งอ้างอิง
- จุดที่ 2: การวิเคราะห์เพิ่มเติม  
- จุดที่ 3: คำแนะนำเฉพาะสำหรับ${getPersonaLabel(selectedPersona)}`,
        role: "assistant",
        timestamp: new Date(),
        sources: [
          {
            title: "การศึกษาเรื่องนี้จากมหาวิทยาลัยชั้นนำ",
            url: "https://example.edu",
            domain: "example.edu",
            reliability: "high",
            snippet: "ข้อมูลจากการวิจัยที่เชื่อถือได้..."
          },
          {
            title: "รายงานจากหน่วยงานราชการ",
            url: "https://gov.example.th",
            domain: "gov.example.th", 
            reliability: "high",
            snippet: "สถิติและข้อมูลอย่างเป็นทางการ..."
          },
          {
            title: "บทความจากสำนักข่าว",
            url: "https://news.example.com",
            domain: "news.example.com",
            reliability: "medium",
            snippet: "รายงานข่าวล่าสุด..."
          }
        ],
        suggestedQuestions: [
          "ต้องการรายละเอียดเพิ่มเติมเกี่ยวกับประเด็นนี้ไหม?",
          "มีข้อมูลเปรียบเทียบกับประเทศอื่นบ้างไหม?",
          "สามารถให้คำแนะนำเพิ่มเติมได้ไหม?",
          "มีกรณีศึกษาที่น่าสนใจไหม?"
        ]
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const getPersonaLabel = (persona: string) => {
    const labels: { [key: string]: string } = {
      student: "นักเรียน/นักศึกษา",
      employee: "พนักงาน",
      government: "ข้าราชการ", 
      researcher: "นักวิจัย",
      general: "บุคคลทั่วไป",
      organization: "องค์กร",
      agency: "หน่วยงาน"
    };
    return labels[persona] || "บุคคลทั่วไป";
  };

  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case "high": return "bg-green-100 text-green-800 border-green-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getReliabilityLabel = (reliability: string) => {
    switch (reliability) {
      case "high": return "ความน่าเชื่อถือสูง";
      case "medium": return "ความน่าเชื่อถือปานกลาง";
      case "low": return "ความน่าเชื่อถือต่ำ";
      default: return "ไม่ระบุ";
    }
  };

  const handleShare = (message: ChatMessage) => {
    const shareText = `${message.content}\n\nแหล่งอ้างอิง: ${message.sources?.map(s => s.url).join(', ')}`;
    navigator.share?.({
      title: "ผลการค้นหาจาก AI",
      text: shareText,
    }).catch(() => {
      navigator.clipboard.writeText(shareText);
    });
  };

  return (
    <div className="w-full h-[calc(100vh-240px)] flex flex-col">
      <div className="pb-6">
        <PersonaSelector 
          selected={selectedPersona} 
          onSelect={setSelectedPersona} 
        />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-full max-w-2xl space-y-6">
                <QuestionSuggestions 
                  persona={selectedPersona} 
                  onSelect={handleSendMessage} 
                />
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] ${message.role === "user" ? "order-1" : ""}`}>
                  <div className={`rounded-lg p-3 ${
                    message.role === "user" 
                      ? "bg-primary text-primary-foreground ml-auto" 
                      : "bg-muted"
                  }`}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                    
                    {/* Sources */}
                    {message.sources && message.sources.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <Separator />
                        <div className="text-xs font-medium text-muted-foreground">
                          แหล่งอ้างอิง ({message.sources.length} แหล่ง)
                        </div>
                        {message.sources.map((source, idx) => (
                          <div key={idx} className="bg-background/50 rounded-md p-2 text-xs">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <a 
                                href={source.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-medium text-blue-600 hover:underline flex items-center gap-1"
                              >
                                {source.title}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getReliabilityColor(source.reliability)}`}
                              >
                                {getReliabilityLabel(source.reliability)}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-1">
                              {source.snippet}
                            </p>
                            <p className="text-muted-foreground/70">
                              {source.domain}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Suggested Questions */}
                    {message.suggestedQuestions && (
                      <div className="mt-4 space-y-2">
                        <Separator />
                        <div className="text-xs font-medium text-muted-foreground">
                          คำถามที่เกี่ยวข้อง
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {message.suggestedQuestions.map((question, idx) => (
                            <Button
                              key={idx}
                              variant="outline"
                              size="sm"
                              className="h-auto text-xs p-2 whitespace-normal text-left"
                              onClick={() => handleSendMessage(question)}
                            >
                              {question}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    {message.role === "assistant" && (
                      <div className="mt-3 flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <ThumbsUp className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <ThumbsDown className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 px-2"
                          onClick={() => handleShare(message)}
                        >
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}

                    <div className="mt-2 text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString("th-TH")}
                      {message.model && ` • ${message.model}`}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="bg-muted rounded-lg p-3 max-w-[85%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="space-y-3 p-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {/* AI Model Selector */}
          <div className="flex items-center gap-3">
            <div className="w-auto">
              <AIModelSelector 
                selected={selectedModel} 
                onSelect={setSelectedModel} 
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Textarea
                placeholder="พิมพ์คำถามของคุณ..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                className="min-h-[40px] max-h-24 resize-none pr-10 border-2 focus:border-primary/50"
              />
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-2 top-2 h-6 w-6 hover:bg-muted"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              onClick={() => handleSendMessage()} 
              disabled={!inputMessage.trim() || isLoading}
              size="icon"
              className="self-end h-[40px] shadow-md hover:shadow-lg transition-shadow"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};