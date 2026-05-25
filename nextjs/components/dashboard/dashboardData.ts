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
  penelitian: "https://disc-alberta-dee-reporter.trycloudflare.com",
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
        "eyJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjJ9LCJwYXJhbXMiOnt9LCJpYXQiOjE3Nzk2OTg3OTgsImV4cCI6MTc3OTY5OTM5OCwiX2VtYmVkZGluZ19wYXJhbXMiOnsidGFodW4iOiJlbmFibGVkIn19.v7pOYLJ5bPC6ay12kqfbHlqHKvfiZgFHcPamxg7jocs",
    },
    "2": { token: "" },
    "3": { token: "" },
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
      label: "mhaasua",
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
      label: "Nilai Mahasiswa",
      description:
        "Analisis multidimensi data penelitian dosen berdasarkan status, bidang fokus, skim penelitian, dan waktu.",
      initial: "P",
      url: "https://cellular-hdtv-handhelds-least.trycloudflare.com/mondrian/index.jsp",
    },
    {
      id: "2",
      label: "Beban Ajar",
      description:
        "Analisis multidimensi data beban ajar berdasarkan jenis, kategori, sitasi, dan tahun publikasi.",
      initial: "J",
      url: "",
    },
    {
      id: "3",
      label: "Konversi Mahasiswa",
      description:
        "Analisis multidimensi data konversi mahasiswa berdasarkan status, jenis konversi, dan fakultas.",
      initial: "K",
      url: "",
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
