import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** When true (homepage), main has no top padding below lg so first hero can bleed under the fixed header. */
export default function Layout({ children, headerVariant = "auto", fullBleedHero = false }) {
  const mainPt = fullBleedHero
    ? "pt-0 lg:pt-[calc(0.75rem+6rem+0.75rem+1px)]"
    : "pt-[calc(0.75rem+87.36px+0.75rem+1px)] lg:pt-[calc(0.75rem+6rem+0.75rem+1px)]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-textDark">
      <Header variant={headerVariant} />
      <main className={mainPt}>{children}</main>
      <Footer />
    </div>
  );
}

