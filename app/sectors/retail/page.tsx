import type { Metadata } from "next";
import RetailContent from "./RetailContent";

export const metadata: Metadata = {
    title: "Retail Security & Loss Prevention | Store Detectives | SSG UK",
    description: "Retail security guards and store detectives. Reducing shrinkage, preventing theft, and protecting staff in retail environments.",
};

export default function RetailPage() {
    return <RetailContent />;
}
