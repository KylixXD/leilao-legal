import DefaultCarousel from "@/components/Carousel";
import NavBar from "@/components/layout/header/NavBar";
import Leiloes from "@/components/layout/card_leiloes/Leiloes";
import Depoimentos from "@/components/layout/depoimentos/Depoimentos";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
// import Depoimentos from "@/components/layout/depoimentos/Depoimentos";

const mainPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);


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
        <h1>Alguns depoimentos de vencedores</h1>
        <section className="flex items-center">
          <Depoimentos/>
        </section>
      </main>
    </div>
  );
}

export default mainPage