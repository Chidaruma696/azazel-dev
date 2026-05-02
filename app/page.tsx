import StatusBar from "@/components/StatusBar";
import Hero from "@/components/Hero";
import Invocaciones from "@/components/Invocaciones";
import Pactos from "@/components/Pactos";
import Grimoire from "@/components/Grimoire";
import Convoca from "@/components/Convoca";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <StatusBar />
      <Hero />
      <Invocaciones />
      <Pactos />
      <Grimoire />
      <Convoca />
      <Footer />
    </main>
  );
}
