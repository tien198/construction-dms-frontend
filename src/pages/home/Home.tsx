import { Link } from "react-router";
import { Building2, HardHat } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const navItems = [
  {
    to: "/cong-trinh",
    icon: Building2,
    title: "Công trình",
    description: "Quản lý danh sách công trình xây dựng",
  },
  {
    to: "/nha-thau",
    icon: HardHat,
    title: "Nhà thầu",
    description: "Quản lý thông tin nhà thầu",
  },
];

export function Home() {
  return (
    <div className="container flex gap-10 p-12 mx-auto">
      {navItems.map(({ to, icon: Icon, title, description }) => (
        <Link
          key={to}
          to={to}
          className="flex-1 no-underline hover:scale-105  duration-200"
        >
          <Card className="h-full cursor-pointer transition-shadow hover:shadow-md hover:shadow-blue-900">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className="size-6 text-primary" />
                <CardTitle>{title}</CardTitle>
              </div>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        </Link>
      ))}
    </div>
  );
}
