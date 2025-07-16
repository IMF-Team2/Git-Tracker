"use client";

import Toolbar from "@/components/Toolbar";
import { Activity, GitBranch, TrendingUp, Users } from "lucide-react";
import InfoCard from "@/components/InfoCard";
import DeveloperTable from "@/components/Developers";
import { CommitStatus } from "@/components/TotalCommit";
import { ProjectCompletion } from "@/components/ProjectCompletion";

export default function Home() {
  const data = [
    {
      category: "TotalProjects",
      value: 3,
      description: "Active projects currently tracked",
      icon: Activity,
    },
    {
      category: "Developers",
      value: 17,
      description: "Developers across all projects",
      icon: Users,
    },
    {
      category: "Repositories",
      value: 6,
      description: "Registered repositories",
      icon: GitBranch,
    },
    {
      category: "TotalCommits",
      value: 592,
      description: "Commits made this month",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex flex-col gap-4 py-6 px-14">
      <Toolbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.map((item, index) => (
          <InfoCard key={index} info={item} />
        ))}
      </div>
      <DeveloperTable />
      <div className="flex flex-col xl:flex-row gap-6 ">
        <CommitStatus className="w-full xl:w-1/2" />
        <ProjectCompletion className="w-full xl:w-1/2" />
      </div>
    </div>
  );
}
