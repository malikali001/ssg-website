import type { Metadata } from "next";
import PropertyMaintenanceContent from "./PropertyMaintenanceContent";

export const metadata: Metadata = {
    title: "Property Maintenance & Repairs | SSG UK",
    description: "Comprehensive property maintenance services. Reactive repairs, planned maintenance, and refurbishment projects for commercial buildings.",
};

export default function PropertyMaintenancePage() {
    return <PropertyMaintenanceContent />;
}
