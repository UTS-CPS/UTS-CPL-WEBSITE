import { columns, LeaderboardEntry } from "./columns";
import { DataTable } from "./data-table";

const leaderboardData: LeaderboardEntry[] = [
  { position: 1, name: "Aiden", problemsSolved: 148 },
  { position: 2, name: "Jess", problemsSolved: 143 },
  { position: 3, name: "Toby", problemsSolved: 139 },
  { position: 4, name: "Mina", problemsSolved: 137 },
  { position: 5, name: "Zac", problemsSolved: 133 },
  { position: 6, name: "Rina", problemsSolved: 130 },
  { position: 7, name: "Leo", problemsSolved: 128 },
  { position: 8, name: "Nora", problemsSolved: 124 },
  { position: 9, name: "Kian", problemsSolved: 121 },
  { position: 10, name: "Sophie", problemsSolved: 119 },
];

async function getData(): Promise<LeaderboardEntry[]> {
  return leaderboardData;
}

export default async function Leaderboard() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
