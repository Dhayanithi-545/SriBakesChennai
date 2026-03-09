import Hero from "@/components/Hero";
import About from "@/components/About";
import CategoriesPreview from "@/components/CategoriesPreview";
import PricingInfo from "@/components/PricingInfo";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CategoriesPreview />
      <PricingInfo />
      <WhyChooseUs />
      <EnquiryForm />
    </>
  );
}
