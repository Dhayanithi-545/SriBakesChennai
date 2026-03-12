import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Sri Bakes",
    description: "Get in touch with us to order customized homemade cakes in Chennai. Easy WhatsApp booking available.",
};

export default function ContactPage() {
    return <ContactClient />;
}
