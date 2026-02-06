import type { Metadata } from "next";
import MobileContent from "./MobileContent";

export const metadata: Metadata = {
    title: "Mobile Security Patrols | Nationwide Response | SSG UK",
    description: "Cost-effective mobile security patrols and alarm response. Nationwide coverage with local response units for multiple site checks.",
};

export default function MobilePatrolsPage() {
    return <MobileContent />;
}
