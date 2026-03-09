import type { Metadata } from "next";
import SolutionsIProvide from "./details";

export const metadata: Metadata = {
  title: "Services",
};

export default function AboutPage() {
  return <SolutionsIProvide />;
}