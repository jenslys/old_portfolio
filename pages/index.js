import Container from "../components/Container";
import ProjectsSection from "../components/structures/ProjectsSection";
import SubPageSection from "../components/structures/SubPageSection";
import BlogSection from "../components/structures/BlogSection";
import TwitterSEO from "../components/TwitterSEO";

export default function Home() {
  const seotitle = `LYSTAD.IO`;
  const seodescrip = `Portfolio`;
  const seourl = `https://lystad.io`;
  const seopreviewimg = "/static/feature.png";

  return (
    <Container>
      <TwitterSEO
        currentURL={seourl}
        previewImage={`https://lystad.io/${seopreviewimg}`}
        siteName={seotitle}
        pageTitle={seotitle}
        description={seodescrip}
      />
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <ProjectsSection />
        <BlogSection />
        <SubPageSection />
      </div>
    </Container>
  );
}
