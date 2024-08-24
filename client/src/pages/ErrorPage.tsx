import { useRouteError } from "react-router-dom";
import { CircleChevronLeft, Ban } from "lucide-react";
import { Link } from "react-router-dom";

interface RouteError {
  data: string;
  error: {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
  message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  return (
    <div className="flex h-screen ">
      <div className="m-auto ">
        <div className="flex flex-col items-center">
          <Ban color="red" size={50} />
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Oops
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {error.status === 404
              ? "404, page not found."
              : "Sorry, an unexpected error has occurred."}
          </p>
          <Link
            to="/"
            className="flex flex-row items-center gap-2 w-fit py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <CircleChevronLeft size={20} />
            <p>Back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
