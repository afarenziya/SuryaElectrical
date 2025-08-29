import HeroSection from "@/components/home/hero-section";
import ProductsShowcase from "@/components/home/products-showcase";
import ServicesPreview from "@/components/home/services-preview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsShowcase />
      <ServicesPreview />
    </div>
  );
}
