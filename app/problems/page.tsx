import { columns, Problems } from "./columns";
import { DataTable } from "./data-table";

const problemsData: Problems[] = [
  {
    problem: "Two Sum",
    difficulty: "Easy",
    acceptance: "45%",
    submissions: 1562345,
  },
  {
    problem: "Add Two Numbers",
    difficulty: "Medium",
    acceptance: "34%",
    submissions: 923456,
  },
  {
    problem: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "29%",
    submissions: 532189,
  },
  {
    problem: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "26%",
    submissions: 387456,
  },
  {
    problem: "Longest Palindromic Substring",
    difficulty: "Medium",
    acceptance: "30%",
    submissions: 764321,
  },
  {
    problem: "Regular Expression Matching",
    difficulty: "Hard",
    acceptance: "21%",
    submissions: 254123,
  },
  {
    problem: "Container With Most Water",
    difficulty: "Medium",
    acceptance: "38%",
    submissions: 645789,
  },
  {
    problem: "Valid Parentheses",
    difficulty: "Easy",
    acceptance: "42%",
    submissions: 1102345,
  },
  {
    problem: "Merge k Sorted Lists",
    difficulty: "Hard",
    acceptance: "23%",
    submissions: 321987,
  },
  {
    problem: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    acceptance: "36%",
    submissions: 589432,
  },
];

async function getData(): Promise<Problems[]> {
  return problemsData;
}

export default async function Leaderboard() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
