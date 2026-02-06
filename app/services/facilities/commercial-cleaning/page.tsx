import type { Metadata } from "next";
import CommercialCleaningContent from "./CommercialCleaningContent";

export const metadata: Metadata = {
    title: "Commercial & Office Cleaning Services | SSG UK",
    description: "Professional commercial cleaning services for offices, industrial sites, and healthcare facilities. Sustainable, rigorous, and fully audited.",
};

export default function CommercialCleaningPage() {
    return <CommercialCleaningContent />;
}
