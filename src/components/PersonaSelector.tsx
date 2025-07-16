import { GraduationCap, Briefcase, Shield, FlaskConical, User, Building, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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
  const selectedPersona = personas.find(p => p.id === selected) || personas[4]; // default to general

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">เลือก Persona</Label>
      <Select value={selected} onValueChange={onSelect}>
        <SelectTrigger className="w-full">
          <SelectValue>
            <div className="flex items-center gap-2">
              <selectedPersona.icon className="h-4 w-4" />
              <span>{selectedPersona.label}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {personas.map((persona) => (
            <SelectItem key={persona.id} value={persona.id}>
              <div className="flex items-center gap-2">
                <persona.icon className="h-4 w-4" />
                <div>
                  <div className="font-medium">{persona.label}</div>
                  <div className="text-xs text-muted-foreground">{persona.description}</div>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};