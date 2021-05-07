const title = "LYSTAD.IO";
const description = "Portfolio";

const SEO = {
  title,
  description,
  canonical: "https://lystad.io",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://lystad.io",
    title,
    description,
    images: [
      {
        url: "https://lystad.io/static/feature.png",
        alt: title,
        width: 1200,
        height: 628,
      },
    ],
  },
};

export default SEO;
