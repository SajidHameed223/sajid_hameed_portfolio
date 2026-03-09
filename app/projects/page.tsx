import type { Metadata } from "next";
import ProjectsPage from "./details";

export const metadata: Metadata = {
  title: "Projects",
};

export default function AboutPage() {
  return <ProjectsPage />;
}