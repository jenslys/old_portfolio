import NextImage from "next/image";

export default function Logo() {
  return (
    <a href="https://lystad.io">
      <div className="inline-flex items-center space-x-2">
        <div className="w-16 h-16 relative">
          <img
            src="/sphere1.gif"
            className="object-cover absolute filter filter-saturate-175 h-full"
          />
        </div>
        <h1 className="text-black dark:text-white font-carbon-bold uppercase text-xl rainbow_text_hover">
          Lystad.io
        </h1>
      </div>
    </a>
  );
}
