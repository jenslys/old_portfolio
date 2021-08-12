import { AirplayVideo } from "akar-icons";
import { Newspaper } from "akar-icons";
import { LinkOut } from "akar-icons";

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
            <Newspaper className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="#">
                <h2 className="text-black dark:text-white font-bold purple_text_hover inline-block">
                  Curriculum Vitae
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div>
          <div className="flex items-center space-x-2">
            <AirplayVideo className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://go.lystad.io/youtube" target="_blank">
                <h2 className="text-black dark:text-white font-bold purple_text_hover inline-block">
                  Youtube
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div>
          <div className="flex items-center space-x-2">
            <LinkOut className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://go.lystad.io/github" target="_blank">
                <h2 className="text-black dark:text-white font-bold purple_text_hover inline-block">
                  Github
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
