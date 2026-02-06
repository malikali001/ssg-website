import type { Metadata } from "next";
import ConstructionContent from "./ConstructionContent";

export const metadata: Metadata = {
    title: "Construction Site Security | CSCS Licensed Guards | SSG UK",
    description: "Specialist construction security services. Biometric access control, perimeter detection, and CSCS licensed guards for building sites.",
};

export default function ConstructionPage() {
    return <ConstructionContent />;
}
