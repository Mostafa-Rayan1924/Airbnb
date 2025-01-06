import Cta from "@/components/homePage/Cta";
import ExploreNearby from "@/components/homePage/ExploreNearby";
import Hero from "@/components/homePage/Hero";
import LiveSec from "@/components/homePage/LiveSec";

export default function Home() {
  return (
    <main className="my-[78px] sm:my-[93px] space-y-20">
      <Hero />
      <ExploreNearby />
      <LiveSec />
      <Cta />
    </main>
  );
}
