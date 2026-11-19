import Header from "./Header";
import Footer from "./Footer";
import { BASE_PATH } from "./base-path";
import { LANDING_HTML } from "./landing-html";
import { organizationJsonLd } from "./seo";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="top" dangerouslySetInnerHTML={{ __html: LANDING_HTML.replaceAll("__BASE__", BASE_PATH) }} />
      <Footer />
    </>
  );
}
