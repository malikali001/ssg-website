import type { Metadata } from "next";
import ElectronicContent from "./ElectronicContent";

export const metadata: Metadata = {
    title: "Electronic Security & CCTV | 24/7 Monitoring | SSG UK",
    description: "Advanced electronic security systems including CCTV, access control, and intruder alarms. Monitored 24/7 from our NSI Gold control centre.",
};

export default function ElectronicSecurityPage() {
    return <ElectronicContent />;
}
