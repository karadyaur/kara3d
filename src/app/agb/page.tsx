import { Navbar } from "@/components/sections/Navbar";
import { LegalContent, type LegalContentProps } from "@/components/sections/LegalContent";
import { Footer } from "@/components/sections/Footer";
import data from "@/content/legal/agb.json";

export const metadata = {
  title: "AGB | kara3d",
};

export default function AgbPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <LegalContent {...(data as LegalContentProps)} />
      </main>
      <Footer />
    </div>
  );
}
