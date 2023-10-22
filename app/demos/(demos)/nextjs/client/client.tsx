"use client";

import { NextjsDemoC } from "@/components/nextjs-demo-c";
import { useQuery } from "react-query";
import { getTodos } from "../db";

export function NextJsDemoClient() {
  // const { data: todos } = useQuery(["todos"], () =>
  //   userId ? getTodos(userId) : []
  // );

  return <NextjsDemoC title={`Clerk Client-side`} todos={[]} />;
}
