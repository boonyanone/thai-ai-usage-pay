import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Plus } from "lucide-react";

const CreditDashboard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          เครดิตคงเหลือ
        </CardTitle>
        <Badge variant="secondary">Active</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">1,250</div>
          <p className="text-sm text-muted-foreground">เครดิต</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between">
            <span>ใช้ไปแล้ววันนี้:</span>
            <span className="font-medium">85 เครดิต</span>
          </div>
          <div className="flex justify-between">
            <span>ประหยัดได้:</span>
            <span className="font-medium text-green-600">32%</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <Plus className="h-4 w-4 mr-1" />
            เติมเครดิต
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <TrendingUp className="h-4 w-4 mr-1" />
            ประวัติ
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditDashboard;