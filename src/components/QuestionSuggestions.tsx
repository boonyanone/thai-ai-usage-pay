import { Button } from "@/components/ui/button";

const questionsByPersona = {
  student: [
    "วิธีการเรียนให้มีประสิทธิภาพมากขึ้น",
    "แนวทางการเตรียมตัวสอบเข้ามหาวิทยาลัย",
    "การจัดการเวลาเรียนและกิจกรรม",
    "แหล่งข้อมูลสำหรับทำรายงานวิจัย",
    "ทักษะที่จำเป็นสำหรับนักศึกษา",
    "การเตรียมความพร้อมสู่การทำงาน"
  ],
  employee: [
    "วิธีการพัฒนาทักษะการทำงาน",
    "การจัดการความเครียดในที่ทำงาน",
    "เทคนิคการนำเสนองาน",
    "การสร้างความสัมพันธ์ที่ดีกับเพื่อนร่วมงาน",
    "แนวทางการเจรจาต่อรองเงินเดือน",
    "การพัฒนาทักษะการนำในองค์กร"
  ],
  government: [
    "ระเบียบการปฏิบัติราชการใหม่ล่าสุด",
    "แนวทางการบริการประชาชน",
    "การพัฒนาประสิทธิภาพการทำงาน",
    "ระบบราชการ 4.0",
    "การจัดการข้อมูลภาครัฐ",
    "นโยบายดิจิทัลภาครัฐ"
  ],
  researcher: [
    "วิธีการค้นหาเอกสารวิชาการที่เชื่อถือได้",
    "เทคนิคการเขียนบทความวิจัย",
    "การขอทุนวิจัยจากหน่วยงานต่างๆ",
    "แนวทางการนำเสนอผลงานวิจัย",
    "เครื่องมือสำหรับการวิเคราะห์ข้อมูล",
    "การจัดการข้อมูลวิจัยให้ปลอดภัย"
  ],
  general: [
    "ข่าวสารและความรู้ทั่วไป",
    "วิธีการดูแลสุขภาพ",
    "การจัดการเงินส่วนตัว",
    "เทคโนโลยีที่เป็นประโยชน์ในชีวิตประจำวัน",
    "การวางแผนการเดินทาง",
    "เทคนิคการทำอาหาร"
  ],
  organization: [
    "กลยุทธ์การพัฒนาธุรกิจ",
    "การจัดการทรัพยากรมนุษย์",
    "แนวทางการตลาดดิจิทัล",
    "การวิเคราะห์ข้อมูลเชิงธุรกิจ",
    "การสร้างวัฒนธรรมองค์กร",
    "การจัดการความเสี่ยงทางธุรกิจ"
  ],
  agency: [
    "นโยบายภาครัฐใหม่ล่าสุด",
    "การพัฒนาระบบราชการดิจิทัล",
    "แนวทางการบริหารจัดการภาครัฐ",
    "การประเมินผลการปฏิบัติราชการ",
    "ระบบงบประมาณแผ่นดิน",
    "การพัฒนาบุคลากรภาครัฐ"
  ]
};

interface QuestionSuggestionsProps {
  persona: string;
  onSelect: (question: string) => void;
}

export const QuestionSuggestions = ({ persona, onSelect }: QuestionSuggestionsProps) => {
  const questions = questionsByPersona[persona as keyof typeof questionsByPersona] || questionsByPersona.general;

  return (
    <div className="w-full space-y-3">
      <h4 className="text-sm font-medium text-muted-foreground">
        คำถามแนะนำสำหรับ {getPersonaLabel(persona)}
      </h4>
      <div className="grid grid-cols-1 gap-2">
        {questions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto p-3 text-left justify-start whitespace-normal"
            onClick={() => onSelect(question)}
          >
            <span className="text-sm">{question}</span>
          </Button>
        ))}
      </div>
    </div>
  );
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