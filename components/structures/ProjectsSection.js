import NextLink from "next/link";

export default function ProjectsSection() {
  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          Projects
        </h1>
      </div>

      <div className="px-4 py-2 space-y-4">
        <div>
          <a href="https://github.com/jenslys" target="_blank">
            <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
              Title 1
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">Description 1</p>
        </div>

        <div>
          <a href="https://github.com/jenslys" target="_blank">
            <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
              Title 2
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">Description2</p>
        </div>

        <div>
          <a href="https://github.com/jenslys" target="_blank">
            <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
              Title 3
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">Description 3</p>
        </div>
      </div>
    </div>
  );
}
