import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";

export default function Home() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        {/* Nav */}
        <header>
          <nav className="flex justify-between items-center py-3">
            <div>
              <Image src="/logo.png" alt="logo" width={130} height={120} />
            </div>
            <div>
              <Button className="bg-[#FFBA26] font-semibold w-[100px] h-[30px] md:w-[150px] md:h-[42px] text-center">
                Add food
              </Button>
            </div>
          </nav>
        </header>
        {/* Hero */}
        <div>
          <Hero />
        </div>
        {/* Featured Restaurants */}
        <div>
          <h1 className="text-center">Featured Restaurants</h1>
          <FeaturedRestaurants />
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}
