import MetabaseEmbed from "@/components/MetabaseEmbed";
import SimpleLineChart from "@/components/SimpleLineChart";
import VosGraph from "@/components/VosGraph";
// import vosData from "@/public/test.json";


export default function home() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Kartu kiri: placeholder local chart */}
        <section className="col-span-12 lg:col-span-6">
          <div className="bg-white border rounded-xl">
            <header className="px-5 py-4 font-semibold border-b">
              Monthly Sales
            </header>
            <div className="h-[520px] p-4">
              <SimpleLineChart /> 
            </div>
          </div>
        </section>

        {/* Kartu kanan: Metabase embed */}
        <section className="col-span-12 lg:col-span-6">
          <div className="bg-white border rounded-xl">
            <header className="px-5 py-4 font-semibold border-b">
              Metabase Dashboard
            </header>
            <div className="h-[520px]">
              <MetabaseEmbed />
            </div>
          </div>
        </section>

      <section className="col-span-12 lg:col-span-6">
        <div className="bg-white border rounded-xl">
          <header className="px-5 py-4 font-semibold border-b">Mondrian Chart</header>
          <div className="h-[520px]">
            <iframe src="http://localhost:8081/mondrian/testpage.jsp" width="100%" height="100%"></iframe>
          </div>
        </div>
      </section>

      {/* <section className="col-span-12 lg:col-span-6">
          <div className="bg-white border rounded-xl">
            <header className="px-5 py-4 font-semibold border-b">
              VosViewer
            </header>
            <div className="h-[520px]">
              <VosGraph />
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
} 