import FlashSale from "@/components/landing-page/flash-sale";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import HeroBottom from "@/components/landing-page/hero-bottom";
import Navbar from "@/components/landing-page/navbar";
import PopularProduct from "@/components/landing-page/popular-product";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroBottom />
      <FlashSale />
      <PopularProduct />
      <Footer />
    </>
  );
}
