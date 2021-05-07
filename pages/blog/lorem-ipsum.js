import Container from "../../components/Container";
import NextImage from "next/image";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";

export default function Blog_lorem_ipsum() {
  const seotitle = `Lorem Ipsum`;
  const seodescrip = `Lorem Ipsum`;
  const seourl = `https://lystad.io/blog/lorem-ipsum`;
  const seopreviewimg = "/static/feature.png";

  return (
    <Container>
      <NextSeo
        title={seotitle}
        description={seodescrip}
        canonical={seourl}
        openGraph={{
          seotitle,
          seodescrip,
          seourl,
          images: [
            {
              url: seopreviewimg,
              alt: seotitle,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <TwitterSEO
        currentURL={seourl}
        previewImage={`https://lystad.io/${seopreviewimg}`}
        siteName={seotitle}
        pageTitle={seotitle}
        description={seodescrip}
      />
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <h2 className="font-bold my-4 text-xl rainbow_text inline-block">
          Lorem Ipsum
        </h2>
        <div className="text-black dark:text-white space-y-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-2"></div>
      </div>
    </Container>
  );
}
