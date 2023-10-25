import { NextjsDemoC } from "@/components/nextjs-demo-c";
import { auth } from "@clerk/nextjs";
import { getTodos } from "./db";

export default async function NextJsDemo() {
  const { userId } = auth();
  const todos = await getTodos(userId!);
  return <NextjsDemoC title={`Clerk App Router`} todos={todos} />;
}
