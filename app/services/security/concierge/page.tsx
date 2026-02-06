import type { Metadata } from "next";
import ConciergeContent from "./ConciergeContent";

export const metadata: Metadata = {
    title: "Concierge Security | Front of House Protection | SSG UK",
    description: "Elite concierge security services combining five-star customer service with vigilant protection. Perfect for corporate offices and luxury residential buildings.",
};

export default function ConciergeSecurityPage() {
    return <ConciergeContent />;
}
