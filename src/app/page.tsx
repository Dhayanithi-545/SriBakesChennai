import Hero from "@/components/Hero";
import About from "@/components/About";
import CategoriesPreview from "@/components/CategoriesPreview";
import PricingInfo from "@/components/PricingInfo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CategoriesPreview />
      <PricingInfo />
      <WhyChooseUs />
      <Testimonials />
      {/* Constrained enquiry form — max-width so it stays readable on wide screens */}
      <section className="py-16 bg-[#fffaf5] border-t border-[#e5ddd5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
