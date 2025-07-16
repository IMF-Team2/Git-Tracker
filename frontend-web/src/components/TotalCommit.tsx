"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

export const description =
  "A multiple bar chart showing commits vs. pull requests";

const chartData = [
  { week: "Week 1 June 1", commits: 15, pullRequests: 5 },
  { week: "Week 2 June 8", commits: 20, pullRequests: 7 },
  { week: "Week 3 June 15", commits: 18, pullRequests: 6 },
  { week: "Week 4 June 22", commits: 7, pullRequests: 4 },
  { week: "Week 5 June 29", commits: 16, pullRequests: 5 },
  { week: "Week 6 July 6", commits: 17, pullRequests: 6 },
];

const chartConfig = {
  commits: {
    label: "Commits",
    color: "#5A6ACF",
  },
  pullRequests: {
    label: "Pull Requests",
    color: "#6B7280",
  },
} satisfies ChartConfig;

export function CommitStatus({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Commits vs Pull Requests</CardTitle>
        <CardDescription>
          Week 1 (June 1 - June 7) - Week 6 (July 6 - July 12), 2025
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="commits" fill="#5A6ACF" radius={4} />
            <Bar dataKey="pullRequests" fill="#E6E8EC" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing commits and pull requests for the last 7 weeks
        </div>
      </CardFooter>
    </Card>
  );
}
