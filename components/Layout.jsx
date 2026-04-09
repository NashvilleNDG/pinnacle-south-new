import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** When true (homepage), main has no top padding below lg so first hero can bleed under the fixed header. */
export default function Layout({ children, headerVariant = "auto", fullBleedHero = false }) {
  const mainPt = fullBleedHero
    ? "pt-0 lg:pt-[88px]"
    : "pt-[calc(1.25rem+1.25rem+72.8px+1px)] lg:pt-[88px]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-textDark">
      <Header variant={headerVariant} />
      <main className={mainPt}>{children}</main>
      <Footer />
    </div>
  );
}

