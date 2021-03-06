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
          <a
            href="https://github.com/jenslys/AutoVOD"
            target="_blank"
            rel="noopener"
          >
            <h2 className="text-black dark:text-white font-bold purple_text_hover inline-block">
              AutoVOD
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Script to automatically upload Twitch VODS in realtime to Youtube.
            With no video stored on the disk.
          </p>
        </div>
        <div>
          <a
            href="https://github.com/jenslys/espresso"
            target="_blank"
            rel="noopener"
          >
            <h2 className="text-black dark:text-white font-bold purple_text_hover inline-block">
              Espresso
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Application that lets you prevent your computer from going to sleep.
          </p>
        </div>
        <div>
          <a
            href="https://github.com/jenslys/color-picker"
            target="_blank"
            rel="noopener"
          >
            <h2 className="text-black dark:text-white font-bold purple_text_hover inline-block">
              Color Picker
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Tool for developers and designers to capture colors on your screen.
          </p>
        </div>
        <div>
          <a
            href="https://github.com/jenslys/twitch-giveaway"
            target="_blank"
            rel="noopener"
          >
            <h2 className="text-black dark:text-white font-bold purple_text_hover inline-block">
              Twitch Giveaway Bot
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Giveaway bot for twitch.tv that lets you run basic giveaways in your
            chat.
          </p>
        </div>
        <div>
          <a
            href="https://github.com/jenslys/website-boilerplate-extension"
            target="_blank"
            rel="noopener"
          >
            <h2 className="text-black dark:text-white font-bold purple_text_hover inline-block">
              Website Boilerplate Extension
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Visual Studio Code extension that lets you generate a simple
            boilerplate for either TailwindCSS or Bootstrap.
          </p>
        </div>
      </div>
    </div>
  );
}
