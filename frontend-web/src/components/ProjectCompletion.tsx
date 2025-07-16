"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart showing project completion";

const chartData = [
  {
    project: "Project A",
    completion: 15,
    fill: "#5A6ACF",
  },
  { project: "Project B", completion: 20, fill: "#6B7280" },
  { project: "Project C", completion: 15, fill: "#F59E0B" },
  { project: "Project D", completion: 10, fill: "#10B981" },
  { project: "Project E", completion: 15, fill: "#8B5CF6" },
  { project: "Project F", completion: 15, fill: "#EC4899" },
];

const chartConfig = {
  completion: {
    label: "Completion %",
  },
  "project-a": {
    label: "Project A",
    color: "#5A6ACF",
  },
  "project-b": {
    label: "Project B",
    color: "#6B7280",
  },
  "project-c": {
    label: "Project C",
    color: "#F59E0B",
  },
  "project-d": {
    label: "Project D",
    color: "#10B981",
  },
  "project-e": {
    label: "Project E",
    color: "#8B5CF6",
  },
  "project-f": {
    label: "Project F",
    color: "#EC4899",
  },
} satisfies ChartConfig;

export function ProjectCompletion({ className }: { className?: string }) {
  return (
    <Card className={`flex flex-col ${className}`}>
      <CardHeader className="pb-0">
        <CardTitle className="text-start">Project Completion</CardTitle>
        <CardDescription>
          Completion breakdown by project for the previous month
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row sm:gap-6 sm:py-10">
        <ChartContainer
          config={chartConfig}
          className="flex-1 sm:w-1/2 aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="completion"
              nameKey="project"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-2 sm:flex flex-col justify-center gap-2 xl:w-1/2 xl:pl-4">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              ></span>
              <div className="flex sm:gap-8">
                <span>{item.project}</span>

                <span>{item.completion}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm 2xl:mt-20">
        <div className="flex  gap-2 leading-none font-medium">
          <span>Trending up by 5.2% this month</span>
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing project completion for the last month
        </div>
      </CardFooter>
    </Card>
  );
}
