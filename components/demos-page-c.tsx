/**
 * v0 by Vercel.
 * @see https://v0.dev/t/robVxfqisew
 */
import Link from "next/link";

export function DemosPageC() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
        Choose your adventure
      </h2>
      <div className="grid grid-cols-3 gap-4 w-full">
        <Link href={"/demos/nextjs"}>
          <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
            <svg
              className=" h-12 w-12 text-gray-700 dark:text-gray-300"
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
              <path d="m8 6 4-4 4 4" />
              <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
              <path d="m20 22-5-5" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Next.js Integration
            </h2>
          </section>
        </Link>
        <Link href={"/demos/orgs"}>
          <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
            <svg
              className=" h-12 w-12 text-gray-700 dark:text-gray-300"
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
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Multi-tenancy
            </h2>
          </section>
        </Link>
        <Link href={"/demos/appearance"}>
          <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
            <svg
              className=" h-12 w-12 text-gray-700 dark:text-gray-300"
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
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              UI Customization
            </h2>
          </section>
        </Link>
        <Link href={"/demos/dashboard"}>
          <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
            <svg
              className=" h-12 w-12 text-gray-700 dark:text-gray-300"
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
              <rect height="9" rx="1" width="7" x="3" y="3" />
              <rect height="5" rx="1" width="7" x="14" y="3" />
              <rect height="9" rx="1" width="7" x="14" y="12" />
              <rect height="5" rx="1" width="7" x="3" y="16" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Clerk Dashboard
            </h2>
          </section>
        </Link>
        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
          <svg
            className=" h-12 w-12 text-gray-700 dark:text-gray-300"
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
            <path d="m8 6 4-4 4 4" />
            <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
            <path d="m20 22-5-5" />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Supabase Integration
          </h2>
        </section>
        <Link href={"/demos/edge"}>
          <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
            <svg
              className=" h-12 w-12 text-gray-700 dark:text-gray-300"
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
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Edge Auth
            </h2>
          </section>
        </Link>
      </div>
    </>
  );
}
