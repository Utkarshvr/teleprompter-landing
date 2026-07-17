import { Navbar } from "@/components/navbar";
import { CTA, Features, Footer, Hero, Screenshots } from "@/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Screenshots />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
