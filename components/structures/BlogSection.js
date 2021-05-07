import NextLink from "next/link";

export const blogData = [
  [
    "Lorem Ipsum",
    "/blog/lorem-ipsum",
    "30.04.2021",
  ],
];
export default function BlogSection() {
  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white uppercase font-carbon-bold text-xl">
          /
        </p>
        <h1 className="text-black dark:text-white uppercase font-carbon-bold text-xl">
          Blog
        </h1>
      </div>
      <div className="px-4 py-2">
        {blogData.reverse().map((b, index) => (
          <div
            className="flex-cols md:flex items-center space-x-0 md:space-x-2"
            key={index}
          >
            <p className="text-gray-500 dark:text-gray-400 font-bold font-carbon-bold inline-flex">
              {b[2]}
            </p>
            <NextLink href={b[1]}>
              <a>
                <h2 className="text-black dark:text-white inline-block font-bold rainbow_text_hover">
                  {b[0]}
                </h2>
              </a>
            </NextLink>
          </div>
        ))}
      </div>
    </div>
  );
}