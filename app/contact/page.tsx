import type { Metadata } from "next";
import ContactMe from "./details";

export const metadata: Metadata = {
  title: "Contact",
};

export default function AboutPage() {
  return <ContactMe />;
}