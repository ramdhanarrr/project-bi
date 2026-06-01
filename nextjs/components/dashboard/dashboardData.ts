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
  token: string;
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
  { id: "1", label: "Dashboard 1", type: "metabase" },
  { id: "2", label: "Dashboard 2", type: "metabase" },
  { id: "3", label: "Dashboard 3", type: "metabase" },
  { id: "4", label: "Analisis OLAP", type: "olap" },
];

export const metabaseInstanceUrls: Record<string, string> = {
  akademik: "",
  "non-akademik": "",
  penelitian: "https://nightlife-reference-photography-rank.trycloudflare.com",
  pengabdian: "",
};

export const metabaseDashboardEmbeds: Record<
  string,
  Partial<Record<string, MetabaseDashboardConfig>>
> = {
  akademik: {
    "1": { token: "" },
    "2": { token: "" },
    "3": { token: "" },
  },
  "non-akademik": {
    "1": { token: "" },
    "2": { token: "" },
    "3": { token: "" },
  },
  penelitian: {
    "1": {
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjJ9LCJwYXJhbXMiOnt9LCJpYXQiOjE3ODAyMDAzNjcsImV4cCI6MTc4MDIwMDk2NywiX2VtYmVkZGluZ19wYXJhbXMiOnsidGFodW4iOiJlbmFibGVkIiwiZmFrdWx0YXMiOiJlbmFibGVkIn19.CqaFvxWQmZ_QH_3Elq7-Jgjw9_jfgyIyZMlopN-y2LE",
    },
    "2": { token: "eyJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjN9LCJwYXJhbXMiOnt9LCJpYXQiOjE3ODAyMDE2MzcsImV4cCI6MTc4MDIwMjIzNywiX2VtYmVkZGluZ19wYXJhbXMiOnsidGFodW4iOiJlbmFibGVkIn19.66eWulvCPnSTtwn0CXr5MDx7b8PREvDNrAP4LPws-70" },
    "3": { token: "eyJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjR9LCJwYXJhbXMiOnt9LCJpYXQiOjE3ODAyMDE3OTEsImV4cCI6MTc4MDIwMjM5MSwiX2VtYmVkZGluZ19wYXJhbXMiOnsidGFodW4iOiJlbmFibGVkIn19.g2jBXPklkHfj8X6WyqytABQCqNFe9aduu6NdkRtzPHw" },
  },
  pengabdian: {
    "1": { token: "" },
    "2": { token: "" },
    "3": { token: "" },
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
      url: "https://adequate-testimony-subdivision-research.trycloudflare.com/mondrian/testpage.jsp?query=penelitian",
    },
    {
      id: "2",
      label: "Publikasi Ilmiah",
      description:
        "Analisis multidimensi data publikasi ilmiah berdasarkan jenis, kategori, sitasi, dan tahun publikasi.",
      initial: "PI",
      url: "https://adequate-testimony-subdivision-research.trycloudflare.com/testpage.jsp?query=publikasi",
    },
    {
      id: "3",
      label: "Hak Kekayaan Intelektual",
      description:
        "Analisis multidimensi data hak kekayaan intelektual berdasarkan jenis, status, dan tahun.",
      initial: "HKI",
      url: "https://adequate-testimony-subdivision-research.trycloudflare.com/testpage.jsp?query=hki",
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
