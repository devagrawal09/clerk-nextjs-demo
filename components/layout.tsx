import Link from "next/link";

export { AppHeader } from "./header";

export function AppFooter() {
  return (
    <footer className="w-full h-1/6 border-t border-gray-200 dark:border-gray-700 py-4 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex space-x-6">
          <Link
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            href="https://twitter.com/ClerkDev"
            target="_blank"
          >
            <svg
              className=" h-4 w-4"
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
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            href="https://github.com/clerkinc"
          >
            <svg
              className=" h-4 w-4"
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
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
        <p className="text-gray-500 dark:text-gray-300">© 2023 Clerk</p>
      </div>
    </footer>
  );
}

export function AppMain(props: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col justify-center items-center space-y-6 p-4 sm:p-6 lg:p-8 grow">
      {props.children}
    </main>
  );
}

export function BackToDemos() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <Link
        className="mt-4 flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500"
        href="/demos"
      >
        <svg
          className=" h-4 w-4 mr-2"
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
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to Demos
      </Link>
    </div>
  );
}
