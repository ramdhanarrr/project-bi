import { notFound } from "next/navigation";
import DashboardShell from "@/components/dashboard/DashboardShell";
import {
  categories,
  scenarios,
} from "@/components/dashboard/dashboardData";

type DashboardPageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ olap?: string; skenario?: string }>;
};

export default async function DashboardCategoryPage({
  params,
  searchParams,
}: DashboardPageProps) {
  const { category: activeSlug } = await params;
  const { olap, skenario } = await searchParams;

  const activeCategory = categories.find(
    (category) => category.slug === activeSlug
  );

  if (!activeCategory) {
    notFound();
  }

  const activeScenario = scenarios.some(
    (scenario) => scenario.id === skenario
  )
    ? skenario!
    : "1";

  return (
    <DashboardShell
      activeCategory={activeCategory}
      activeOlapId={olap}
      activeScenario={activeScenario}
    />
  );
}
