"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Problems = {
  problem: string;
  difficulty: string;
  acceptance: string;
  submissions: number;
};

export const columns: ColumnDef<Problems>[] = [
  {
    accessorKey: "problem",
    header: "Problem",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
  {
    accessorKey: "acceptance",
    header: "Acceptance Rate",
  },
  {
    accessorKey: "submissions",
    header: "Submissions",
  },
];
