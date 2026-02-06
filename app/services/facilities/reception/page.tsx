import type { Metadata } from "next";
import ReceptionContent from "./ReceptionContent";

export const metadata: Metadata = {
    title: "Corporate Reception & Front of House Services | SSG UK",
    description: "Professional reception and front-of-house services. Enhancing visitor experience and building management for corporate environments.",
};

export default function ReceptionPage() {
    return <ReceptionContent />;
}
