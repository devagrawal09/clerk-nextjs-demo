import Link from "next/link";

export { AppHeader } from "./header";

export function AppFooter() {
  return (
    <footer className="w-full h-1/6 border-gray-200 dark:border-gray-700 py-4 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between gap-4">
        <div className="grow"></div>
        <Link
          className="text-gray-500 dark:text-gray-300 border border-slate-200 rounded-md px-3 py-1 tracking-tight flex gap-1 hover:scale-105 transition"
          href="https://v0.dev/"
          target="_blank"
        >
          <span className="text-sm">Built with</span>
          <svg
            aria-label="v0"
            width="24"
            viewBox="0 0 40 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
              fill="currentColor"
            ></path>
            <path
              d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
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
