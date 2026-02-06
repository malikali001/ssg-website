import type { Metadata } from "next";
import KeyHoldingContent from "./KeyHoldingContent";

export const metadata: Metadata = {
    title: "Key Holding & Alarm Response | BS 7984 Compliant | SSG UK",
    description: "Professional key holding and alarm response services. SIA licensed officers respond to your activations 24/7, keeping your staff safe.",
};

export default function KeyHoldingPage() {
    return <KeyHoldingContent />;
}
