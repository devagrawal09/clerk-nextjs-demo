import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function AppHeader() {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between text-gray-900 dark:text-white">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">Next.js + Clerk</h1>
        </Link>
        <div className="flex gap-4">User</div>
      </div>
    </header>
  );
}
