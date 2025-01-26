import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { FC, ReactNode } from "react";

interface DescriptiveAmountCardProps {
  name: string;
  icon: ReactNode;
  amount: number | undefined;
}

const DescriptiveAmountCard: FC<DescriptiveAmountCardProps> = ({
  name,
  icon,
  amount,
}) => {
  return (
    <Card className="text-slate-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <span className="h-4 w-4 text-muted-foreground">{icon}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
      </CardContent>
    </Card>
  );
};

export default DescriptiveAmountCard;
