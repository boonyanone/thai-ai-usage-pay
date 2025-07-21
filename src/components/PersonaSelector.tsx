import { GraduationCap, Briefcase, Shield, FlaskConical, User, Building, MapPin } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const personas = [
  { 
    id: "student", 
    label: "นักเรียน/นักศึกษา", 
    icon: GraduationCap,
    description: "เหมาะสำหรับการเรียนรู้และค้นคว้า"
  },
  { 
    id: "employee", 
    label: "พนักงาน", 
    icon: Briefcase,
    description: "เหมาะสำหรับงานบริษัทและธุรกิจ"
  },
  { 
    id: "government", 
    label: "ข้าราชการ", 
    icon: Shield,
    description: "เหมาะสำหรับงานภาครัฐ"
  },
  { 
    id: "researcher", 
    label: "นักวิจัย", 
    icon: FlaskConical,
    description: "เหมาะสำหรับงานวิจัยและวิชาการ"
  },
  { 
    id: "general", 
    label: "บุคคลทั่วไป", 
    icon: User,
    description: "เหมาะสำหรับการใช้งานทั่วไป"
  },
  { 
    id: "organization", 
    label: "องค์กร", 
    icon: Building,
    description: "เหมาะสำหรับองค์กรเอกชน"
  },
  { 
    id: "agency", 
    label: "หน่วยงาน", 
    icon: MapPin,
    description: "เหมาะสำหรับหน่วยงานราชการ"
  }
];

interface PersonaSelectorProps {
  selected: string;
  onSelect: (persona: string) => void;
}

export const PersonaSelector = ({ selected, onSelect }: PersonaSelectorProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">เลือก Persona</Label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {personas.map((persona) => (
          <Card 
            key={persona.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selected === persona.id 
                ? 'ring-2 ring-primary bg-primary/5' 
                : 'hover:bg-muted/50'
            }`}
            onClick={() => onSelect(persona.id)}
          >
            <CardContent className="p-3 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selected === persona.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}>
                  <persona.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className={`text-sm font-medium ${
                    selected === persona.id ? 'text-primary' : ''
                  }`}>
                    {persona.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {persona.description}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};