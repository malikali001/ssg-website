import type { Metadata } from "next";
import HospitalityContent from "./HospitalityContent";

export const metadata: Metadata = {
    title: "Hospitality & Event Security | Door Supervisors | SSG UK",
    description: "Security for hotels, bars, and events. SIA licensed door supervisors and crowd management specialists.",
};

export default function HospitalityPage() {
    return <HospitalityContent />;
}
