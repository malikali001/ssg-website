import type { Metadata } from "next";
import CorporateContent from "./CorporateContent";

export const metadata: Metadata = {
    title: "Corporate & Office Security | Front of House | SSG UK",
    description: "Premium corporate security services. Concierge duties, access control management, and asset protection for office buildings.",
};

export default function CorporatePage() {
    return <CorporateContent />;
}
