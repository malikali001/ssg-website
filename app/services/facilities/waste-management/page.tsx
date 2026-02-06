import type { Metadata } from "next";
import WasteManagementContent from "./WasteManagementContent";

export const metadata: Metadata = {
    title: "Commercial Waste Management & Recycling | SSG UK",
    description: "Sustainable commercial waste management services. Zero-to-landfill commitment, recycling solutions, and hazardous waste disposal.",
};

export default function WasteManagementPage() {
    return <WasteManagementContent />;
}
