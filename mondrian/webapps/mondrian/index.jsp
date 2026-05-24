<html>

<head>
    <title>Mondrian OLAP Server</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="olap-wrapper">

        <div class="olap-subtitle">
            Pilih skema OLAP untuk eksplorasi data multidimensi
        </div>

        <div class="olap-grid">

            <a href="testpage.jsp?query=penelitian" class="olap-card">

                <div class="olap-icon">
                    P
                </div>

                <div class="olap-card-title">
                    Penelitian
                </div>

                <div class="olap-card-desc">
                    Analisis multidimensi data penelitian dosen berdasarkan status,
                    bidang fokus, skim penelitian, dan waktu.
                </div>

            </a>

            <a href="testpage.jsp?query=publikasi" class="olap-card">

                <div class="olap-icon">
                    J
                </div>

                <div class="olap-card-title">
                    Publikasi
                </div>

                <div class="olap-card-desc">
                    Analisis multidimensi data publikasi ilmiah berdasarkan jenis,
                    kategori, sitasi, dan tahun publikasi.
                </div>

            </a>

            <a href="testpage.jsp?query=hki" class="olap-card">

                <div class="olap-icon">
                    H
                </div>

                <div class="olap-card-title">
                    Hak Kekayaan Intelektual
                </div>

                <div class="olap-card-desc">
                    Analisis multidimensi data HKI berdasarkan status pengajuan,
                    jenis HKI, dan fakultas.
                </div>

            </a>

        </div>

    </div>

</body>

</html>
