import type { Metadata } from "next";
import EducationContent from "./EducationContent";

export const metadata: Metadata = {
    title: "Education & Campus Security | Safeguarding | SSG UK",
    description: "Security services for schools and universities. DBS enhanced officers trained in safeguarding and student welfare.",
};

export default function EducationPage() {
    return <EducationContent />;
}
