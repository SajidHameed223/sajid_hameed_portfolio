import type { Metadata } from "next";
import ProjectDetails from "./details";

export const metadata: Metadata = {
  title: "Projects",
};

export default function AboutPage() {
  return <ProjectDetails />;
}