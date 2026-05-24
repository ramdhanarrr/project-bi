<%@ page session="true" contentType="text/html; charset=UTF-8" %>

    <%@ taglib uri="http://www.tonbeller.com/jpivot" prefix="jp" %>
        <%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

            <html>

            <head>
                <title>Dashboard HKI</title>

                <link rel="stylesheet" href="/mondrian/style.css">
            </head>

            <body>

                <div class="container">

                    <div class="dashboard-card">

                        <jp:mondrianQuery id="query01" jdbcDriver="org.postgresql.Driver"
                            jdbcUrl="jdbc:postgresql://dw_postgres:5432/dw" jdbcUser="postgres" jdbcPassword="admin"
                            catalogUri="/WEB-INF/queries/hki.xml" connectionPooling="false">

                            SELECT

                            {
                            [Measures].[JumlahHKI],
                            [Measures].[HKIGranted],
                            [Measures].[HKIRejected],
                            [Measures].[HKIProses]
                            } ON COLUMNS,

                            {
                            [Satker].[Fakultas].Members
                            } ON ROWS

                            FROM [HKI]

                        </jp:mondrianQuery>

                        <c:set var="title01" scope="session">
                            Analisis Multidimensi Hak Kekayaan Intelektual
                        </c:set>

                    </div>

            </body>

            </html>
