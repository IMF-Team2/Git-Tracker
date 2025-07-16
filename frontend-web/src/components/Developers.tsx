import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import Image from "next/image";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";

const developers = [
  {
    name: "Abdulaziz Isa",
    email: "abdulaziz@gmail.com",
    status: "Free",
    role: "Full-Stack",
  },
  {
    name: "Abdulaziz Isa",
    email: "abdulaziz@gmail.com",
    status: "Busy",
    role: "Front-end",
  },
  {
    name: "Abdulaziz Isa",
    email: "abdulaziz@gmail.com",
    status: "Working",
    role: "Back-end",
  },
  {
    name: "Abdulaziz Isa",
    email: "abdulaziz@gmail.com",
    status: "On Vacation",
    role: "Flutter Dev",
  },
  {
    name: "Abdulaziz Isa",
    email: "abdulaziz@gmail.com",
    status: "Working",
    role: "UI/UX",
  },
];

export default function DeveloperTable() {
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "ascending" | "descending";
  }>({
    key: null,
    direction: "ascending",
  });

  // Handle sorting
  const handleSort = (key: string | null) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Sort the developers array
  let sortedDevelopers = [...developers];
  if (sortConfig.key) {
    sortedDevelopers.sort((a, b) => {
      const key = sortConfig.key as keyof typeof a;
      if (a[key] < b[key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  return (
    <div className="space-y-4 ">
      <div className=" hidden  sm:flex sm:flex-row sm:justify-between">
        <h3 className="text-lg font-semibold">Developers</h3>
        <Button
          variant="default"
          className="bg-[#5B6AD0] hover:bg-[#4e5bbf] py-5 px-3 text-center text-white"
        >
          View All Developers
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="w-[150px] sm:w-[200px] md:w-[150px] lg:w-[200px]  xl:w-[400px] cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name{" "}
              {sortConfig.key === "name" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="hidden lg:table-cell lg:w-[200px] xl:w-[400px] cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email{" "}
              {sortConfig.key === "email" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="w-[80px] sm:w-[110px ] md:w-[80px] lg:w-[100px] xl:w-[350px] cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status{" "}
              {sortConfig.key === "status" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="w-[100px] sm:w-[120px] md:w-[100px] lg:w-[100px] xl:w-[200px] cursor-pointer"
              onClick={() => handleSort("role")}
            >
              Role{" "}
              {sortConfig.key === "role" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedDevelopers.map((dev, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-[#F8F8F8]" : ""}
            >
              <TableCell className="flex  items-center  font-medium text-xs px-2  ">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full lg:inline mr-2 hidden "
                />
                {dev.name}
              </TableCell>
              <TableCell className="text-xs hidden lg:table-cell">
                {dev.email}
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex rounded-full  py-1 text-xs font-semibold ${
                    dev.status === "Free"
                      ? " text-green-800"
                      : dev.status === "Busy"
                      ? " text-red-800"
                      : dev.status === "On Vacation"
                      ? " text-orange-800"
                      : " text-blue-800"
                  }`}
                >
                  {dev.status}
                </span>
              </TableCell>
              <TableCell className="text-xs">{dev.role}</TableCell>
              <TableCell className="w-4">
                {<PencilIcon className="h-4 w-4 text-gray-500 text-xs" />}
              </TableCell>
              <TableCell className="w-4">
                {<Trash2Icon className="h-4 w-4 text-gray-500 text-xs" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className=" sm:hidden flex justify-center mt-4">
        <Button
          variant="default"
          className="bg-[#5B6AD0] hover:bg-[#4e5bbf] py-5 px-3 text-center text-white "
        >
          View All Developers
        </Button>
      </div>
    </div>
  );
}
