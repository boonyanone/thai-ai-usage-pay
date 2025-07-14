import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, TrendingDown } from "lucide-react";

const CreditDashboard = () => {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          เครดิตคงเหลือ
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-3xl font-bold text-foreground">฿247.50</div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <TrendingDown className="h-3 w-3" />
              ใช้ไป ฿12.30 วันนี้
            </p>
          </div>
          <Button size="sm" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            เติมเครดิต
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditDashboard;