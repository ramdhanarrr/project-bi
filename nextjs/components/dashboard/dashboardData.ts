export type DashboardCategory = {
  slug: string;
  label: string;
  title: string;
};

export const categories: DashboardCategory[] = [
  { slug: "akademik", label: "Akademik", title: "Dashboard Akademik" },
  {
    slug: "non-akademik",
    label: "Non-Akademik",
    title: "Dashboard Non-Akademik",
  },
  { slug: "penelitian", label: "Penelitian", title: "Dashboard Penelitian" },
  {
    slug: "pengabdian",
    label: "Pengabdian",
    title: "Dashboard Pengabdian Masyarakat",
  },
];

export const scenarios = [
  { id: "1", label: "Dashboard 1" },
  { id: "2", label: "Dashboard 2" },
  { id: "3", label: "Dashboard 3" },
  { id: "4", label: "Analisis OLAP" }
];
