import Logo from "../elements/Logo";
import ThemeSwitcher from "../features/ThemeSwitcher";

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="flex items-center space-x-1">
        <div className="items-center hidden md:flex mb-2 mr-2">
          <a
            href="https://github.com/jenslys/lystad.io"
            target="_blank"
            className="text-black dark:text-white purple_text_hover font-carbon-bold uppercase"
          >
            source
          </a>
        </div>
        <div className="transform -translate-y-1">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
