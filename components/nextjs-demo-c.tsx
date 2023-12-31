/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/pcD9xo8iShJ
 */
import Link from "next/link";
import { Button } from "./ui/button";

export function NextjsDemoC(props: {
  title: string;
  todos: { title: string }[];
}) {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        {props.title}
      </h2>
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md dark:bg-gray-800">
        {props.todos.length ? (
          <ul className="list-none px-4">
            {props.todos.map((todo) => (
              <li className="flex items-center border-b border-gray-200 dark:border-gray-700 py-6 last:border-none ">
                <button className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500 mr-3">
                  <svg
                    className=" h-5 w-5"
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </button>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {todo.title}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-800">
            <div className="p-4 flex justify-center items-center">
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                No todos found
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-2">
          Variations
        </h3>
        <div className="flex space-x-2">
          <Link href="/demos/nextjs">
            <Button
              className="w-full md:w-auto text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-800 hover:text-white"
              variant="outline"
            >
              App
            </Button>
          </Link>
          <Link href="/pages/demos/nextjs">
            <Button
              className="w-full md:w-auto text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-800 hover:text-white"
              variant="outline"
            >
              Pages
            </Button>
          </Link>
          <Link href="/demos/nextjs/client">
            <Button
              className="w-full md:w-auto text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-800 hover:text-white"
              variant="outline"
            >
              Client
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
