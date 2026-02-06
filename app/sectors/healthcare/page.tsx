import type { Metadata } from "next";
import HealthcareContent from "./HealthcareContent";

export const metadata: Metadata = {
    title: "Healthcare & Hospital Security | Bedside Watch | SSG UK",
    description: "Specialist healthcare security for hospitals and clinics. CQC compliant officers trained in conflict management and patient safety.",
};

export default function HealthcarePage() {
    return <HealthcareContent />;
}
