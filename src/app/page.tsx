import DefaultCarousel from "@/components/Carousel";
import NavBar from "@/components/layout/header/NavBar";
import Leiloes from "@/components/layout/card_leiloes/Leiloes";
// import Depoimentos from "@/components/layout/depoimentos/Depoimentos";

export default function Home() {
  return (
    <div>
      <main>
        <section className="px-28">
          <DefaultCarousel/>
          <div className="bg-purple-700 h-10 py-2">
            <p className=" text-white pl-2">
              Leilões Online
            </p>
          </div>
          <div className="flex justify-around py-2">
            <Leiloes />
            <Leiloes />
            <Leiloes />
            <Leiloes />
          </div>
        </section>
        <section className="flex items-center">
          <h1>Depoimentos de vencedores</h1>
          {/* <Depoimentos/> */}
        </section>
      </main>
    </div>
  );
}
