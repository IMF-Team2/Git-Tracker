import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Info = {
  category: string;
  value: string | number;
  description: string;
  icon: React.ElementType;
};

type InfoCardProps = {
  info: Info;
};

const InfoCard = ({ info }: InfoCardProps) => {
  const Icon = info.icon;
  return (
    <Card className="bg-[#F8F8F8] hover:bg-[#5B6AD0] group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 gap-2 pb-2">
        <CardTitle className="text-base xl:text-lg font-bold text-[#010101] group-hover:text-white">
          {info.category}
        </CardTitle>
        <Icon className="w-7 h-7" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold group-hover:text-white">
          {info.value}
        </div>
        <p className="text-base opacity-50 text-[#000000] group-hover:text-white">
          {info.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
