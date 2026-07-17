import { Navbar } from "@/components/navbar";
import { CTA, Features, Footer, Hero, Screenshots } from "@/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
