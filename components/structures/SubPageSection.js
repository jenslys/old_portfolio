import { Folder } from "akar-icons";
import { File } from "akar-icons";

export default function SubPageSection() {
  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          Miscellaneous
        </h1>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div>
          <div className="flex items-center space-x-2">
            <File className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="#">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  Curriculum Vitae
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400">CV</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div>
          <div className="flex items-center space-x-2">
            <Folder className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="#">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  dev/null
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400">dev/null</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}