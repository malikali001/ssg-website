import type { Metadata } from "next";
import K9Content from "./K9Content";

export const metadata: Metadata = {
    title: "K9 Security Units | NASDU Certified Dog Handlers | SSG UK",
    description: "Specialist K9 security units for high-risk protection. NASDU certified drug detection, explosive detection, and patrol dogs.",
};

export default function K9UnitsPage() {
    return <K9Content />;
}
