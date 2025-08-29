import HeroSection from "@/components/home/hero-section";
import ProductsShowcase from "@/components/home/products-showcase";
import ServicesPreview from "@/components/home/services-preview";
import AboutPreview from "@/components/home/about-preview";
import GalleryPreview from "@/components/home/gallery-preview";
import ContactPreview from "@/components/home/contact-preview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsShowcase />
      <ServicesPreview />
      <AboutPreview />
      <GalleryPreview />
      <ContactPreview />
    </div>
  );
}
