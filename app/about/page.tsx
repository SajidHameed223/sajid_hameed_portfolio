import type { Metadata } from "next";
import PersonalOverview from "./details";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <PersonalOverview />;
}