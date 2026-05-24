<%@ page session="true" contentType="text/html; charset=UTF-8" %>

    <%@ taglib uri="http://www.tonbeller.com/jpivot" prefix="jp" %>
        <%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

            <jp:mondrianQuery id="query01" jdbcDriver="org.postgresql.Driver"
                jdbcUrl="jdbc:postgresql://dw_postgres:5432/dw" jdbcUser="postgres" jdbcPassword="admin"
                catalogUri="/WEB-INF/queries/publikasi.xml" connectionPooling="false">

                SELECT

                {
                [Measures].[JumlahPublikasi],
                [Measures].[JumlahHalaman]
                } ON COLUMNS,

                {
                [JenisPublikasi].[JenisPublikasi].Members
                } ON ROWS

                FROM [Publikasi]


            </jp:mondrianQuery>

            <c:set var="title01" scope="session">
                Analisis Multidimensi Publikasi Dosen
            </c:set>