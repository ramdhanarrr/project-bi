export type DashboardCategory = {
  slug: string;
  label: string;
  title: string;
};

export type DashboardScenario = {
  id: string;
  label: string;
  type: "metabase" | "olap";
};

export type MetabaseDashboardConfig = {
  dashboardId: number;
  embeddingParams?: Record<string, "disabled" | "enabled">;
  params?: Record<string, string | number | boolean | null>;
  secretEnvKey?: string;
  withDownloads?: boolean;
  withTitle?: boolean;
  minHeight?: number;
};

export type OlapDashboardConfig = {
  id: string;
  label: string;
  description: string;
  initial: string;
  url: string;
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

export const scenarios: DashboardScenario[] = [
  { id: "1", label: "Ringkasan Data", type: "metabase" },
  { id: "2", label: "Analisis Data", type: "metabase" },
  { id: "3", label: "Luaran Data", type: "metabase" },
  { id: "4", label: "Analisis OLAP", type: "olap" },
];

export const scenarioLabelsByCategory: Record<string, Record<string, string>> = {
  akademik: {
    "1": "Mahasiswa",
    "2": "Perkuliahan",
    "3": "Kelulusan",
  },
  "non-akademik": {
    "1": "Keuangan",
    "2": "Sarana Prasarana",
    "3": "Kepegawaian",
  },
  penelitian: {
    "1": "Penelitian Dosen",
    "2": "Publikasi Ilmiah",
    "3": "Hak Kekayaan Intelektual",
  },
  pengabdian: {
    "1": "Kegiatan Pengabdian",
    "2": "Mitra",
    "3": "Luaran Pengabdian",
  },
};

export function getScenarioLabel(categorySlug: string, scenario: DashboardScenario) {
  return scenarioLabelsByCategory[categorySlug]?.[scenario.id] ?? scenario.label;
}

export const metabaseInstanceUrls: Record<string, string> = {
  akademik: "",
  "non-akademik": "",
  penelitian: "http://localhost:3001",
  pengabdian: "",
};

export const metabaseDashboardEmbeds: Record<
  string,
  Partial<Record<string, MetabaseDashboardConfig>>
> = {
  akademik: {
    "1": { dashboardId: 0 },
    "2": { dashboardId: 0 },
    "3": { dashboardId: 0 },
  },
  "non-akademik": {
    "1": { dashboardId: 0 },
    "2": { dashboardId: 0 },
    "3": { dashboardId: 0 },
  },
  penelitian: {
    "1": {
      dashboardId: 2,
      embeddingParams: {
        fakultas: "enabled",
        tahun: "enabled",
      },
    },
    "2": {
      dashboardId: 3,
      embeddingParams: {
        tahun: "enabled",
      },
    },
    "3": {
      dashboardId: 4,
      embeddingParams: {
        tahun: "enabled",
      },
    },
  },
  pengabdian: {
    "1": { dashboardId: 0 },
    "2": { dashboardId: 0 },
    "3": { dashboardId: 0 },
  },
};

export const olapDashboardEmbeds: Record<string, OlapDashboardConfig[]> = {
  akademik: [
    {
      id: "1",
      label: "Mahasiswa",
      description:
        "Analisis multidimensi data akademik berdasarkan prodi, angkatan, status, dan waktu.",
      initial: "M",
      url: "",
    },
    {
      id: "2",
      label: "Perkuliahan",
      description:
        "Analisis multidimensi data kelas, mata kuliah, dosen, semester, dan tahun akademik.",
      initial: "P",
      url: "",
    },
    {
      id: "3",
      label: "Kelulusan",
      description:
        "Analisis multidimensi data kelulusan berdasarkan fakultas, prodi, predikat, dan waktu.",
      initial: "K",
      url: "",
    },
  ],
  "non-akademik": [
    {
      id: "1",
      label: "Keuangan",
      description:
        "Analisis multidimensi data non-akademik berdasarkan unit, jenis transaksi, periode, dan sumber dana.",
      initial: "K",
      url: "",
    },
    {
      id: "2",
      label: "Sarana Prasarana",
      description:
        "Analisis multidimensi aset dan fasilitas berdasarkan lokasi, kategori, kondisi, dan waktu.",
      initial: "S",
      url: "",
    },
    {
      id: "3",
      label: "Kepegawaian",
      description:
        "Analisis multidimensi data pegawai berdasarkan unit kerja, status, jabatan, dan masa kerja.",
      initial: "P",
      url: "",
    },
  ],
  penelitian: [
    {
      id: "1",
      label: "Penelitian Dosen",
      description:
        "Analisis multidimensi data penelitian dosen berdasarkan status, bidang fokus, skim penelitian, dan waktu.",
      initial: "PD",
      url: "http://localhost:8081/mondrian/testpage.jsp?query=penelitian",
    },
    {
      id: "2",
      label: "Publikasi Ilmiah",
      description:
        "Analisis multidimensi data publikasi ilmiah berdasarkan jenis, kategori, sitasi, dan tahun publikasi.",
      initial: "PI",
      url: "http://localhost:8081/mondrian/testpage.jsp?query=publikasi",
    },
    {
      id: "3",
      label: "Hak Kekayaan Intelektual",
      description:
        "Analisis multidimensi data hak kekayaan intelektual berdasarkan jenis, status, dan tahun.",
      initial: "HKI",
      url: "http://localhost:8081/mondrian/testpage.jsp?query=hki",
    },
  ],
  pengabdian: [
    {
      id: "1",
      label: "Kegiatan Pengabdian",
      description:
        "Analisis multidimensi kegiatan pengabdian berdasarkan skim, lokasi, mitra, dan waktu.",
      initial: "K",
      url: "",
    },
    {
      id: "2",
      label: "Mitra",
      description:
        "Analisis multidimensi data mitra berdasarkan jenis, wilayah, bidang kerja sama, dan periode.",
      initial: "M",
      url: "",
    },
    {
      id: "3",
      label: "Luaran Pengabdian",
      description:
        "Analisis multidimensi luaran pengabdian berdasarkan kategori, status, unit, dan tahun.",
      initial: "L",
      url: "",
    },
  ],
};
