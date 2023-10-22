import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardDemoPage() {
  return (
    <>
      <Link href="https://dashboard.clerk.dev" target="_blank">
        <Button
          className="flex flex-col gap-2 py-11 px-5 text-xl text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900"
          variant="outline"
        >
          <div className="flex font-bold gap-1 items-center justify-center">
            <span>Visit Clerk Dashboard</span>
            <svg
              className="h-6 w-6"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
          </div>
          <p className="text-sm">dashboard.clerk.com</p>
        </Button>
      </Link>
    </>
  );
}
