<%@ page session="true" contentType="text/html; charset=UTF-8" %>

    <%@ taglib uri="http://www.tonbeller.com/jpivot" prefix="jp" %>
        <%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

            <jp:mondrianQuery id="query01" jdbcDriver="org.postgresql.Driver"
                jdbcUrl="jdbc:postgresql://dw_postgres:5432/dw" jdbcUser="postgres" jdbcPassword="admin"
                catalogUri="/WEB-INF/queries/penelitian.xml" connectionPooling="false">

                SELECT

                {
                [Measures].[JumlahPenelitian],
                [Measures].[JumlahDana]
                } ON COLUMNS,

                {
                [Dosen].[StatusDosen].Members
                } ON ROWS

                FROM [Penelitian Dosen]



            </jp:mondrianQuery>

            <c:set var="title01" scope="session">
                Analisis Multidimensi Penelitian Dosen
            </c:set>
