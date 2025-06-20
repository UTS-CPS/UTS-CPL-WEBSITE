"use client";

import { ColumnDef } from "@tanstack/react-table";

export type LeaderboardEntry = {
  position: number;
  name: string;
  problemsSolved: number;
};

export const columns: ColumnDef<LeaderboardEntry>[] = [
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "problemsSolved",
    header: "Problems Solved",
  },
];
