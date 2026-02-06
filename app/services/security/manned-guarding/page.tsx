import type { Metadata } from "next";
import MannedGuardingContent from "./MannedGuardingContent";

export const metadata: Metadata = {
    title: "Manned Guarding | Elite Security Officers | SSG UK",
    description: "Deploy SIA-licensed security officers integrated with real-time intelligence. Static guarding, mobile patrols, and corporate concierge services.",
};

export default function MannedGuardingPage() {
    return <MannedGuardingContent />;
}
