export const LANGUAGES = {
  javascript: 63,
  typescript: 74,
  cpp: 54,
  c: 50,
  vb: 84,
  fsharp: 87,
  lua: 64,
  ruby: 72,
  R: 80,
  objectivec: 79,
  python: 71,
  java: 62,
  csharp: 51,
  php: 68,
} as const;

export type Language = keyof typeof LANGUAGES;

export const CODE_SNIPPETS: Record<Language, string> = {
  javascript: `function greet(name) {
\tconsole.log("Hello, " + name + "!");
}

greet("World");`,
  typescript: `type User = {
\tname: string;
\tage: number;
}

function displayUser(user: User) {
\tconsole.log(\`Name: \${user.name}, Age: \${user.age}\`);
}

displayUser({ name: "Alice", age: 25 });`,
  cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
\tvector<int> numbers = {1, 2, 3, 4, 5};
\tfor (int num : numbers) {
\t\tcout << num << endl;
\t}
\treturn 0;
}`,
  c: `#include <stdio.h>

int main() {
\tint numbers[] = {10, 20, 30};
\tfor (int i = 0; i < 3; i++) {
\t\tprintf("Number: %d\\n", numbers[i]);
\t}
\treturn 0;
}`,
  vb: `Module Example
\tSub Main()
\t\tDim numbers As Integer() = {1, 2, 3, 4}
\t\tFor Each num As Integer In numbers
\t\t\tConsole.WriteLine($"{num}")
\t\tNext
\tEnd Sub
End Module`,
  fsharp: `let numbers = [1; 2; 3; 4]
numbers |> List.iter (fun n -> printfn "%d" n)`,
  lua: `local numbers = {10, 20, 30}
for i, num in ipairs(numbers) do
\tprint("Number: " .. num)
end`,
  ruby: `numbers = [10, 20, 30]
numbers.each { |num| puts "Number: #{num}" }`,
  R: `numbers <- c(10, 20, 30)
cat("Numbers:", numbers, "\\n")`,
  objectivec: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
\t@autoreleasepool {
\t\tNSArray *numbers = @[@1, @2, @3];
\t\tfor (NSNumber *num in numbers) {
\t\t\tNSLog(@"Number: %@", num);
\t\t}
\t}
\treturn 0;
}`,
  python: `def greet(name):
\tprint(f"Hello, {name}!")

greet("World")`,
  java: `import java.util.ArrayList;

public class Example {
\tpublic static void main(String[] args) {
\t\tArrayList<Integer> numbers = new ArrayList<>();
\t\tnumbers.add(1);
\t\tnumbers.add(2);
\t\tnumbers.add(3);
\t\tfor (int num : numbers) {
\t\t\tSystem.out.println("Number: " + num);
\t\t}
\t}
}`,
  csharp: `using System;
using System.Collections.Generic;

namespace Example
{
\tclass Program {
\t\tstatic void Main(string[] args) {
\t\t\tList<int> numbers = new List<int> { 1, 2, 3, 4 };
\t\t\tforeach (int num in numbers) {
\t\t\t\tConsole.WriteLine($"Number: {num}");
\t\t\t}
\t\t}
\t}
}`,
  php: `<?php

$numbers = [10, 20, 30];
foreach ($numbers as $num) {
\techo "Number: $num\\n";
}`,
};
