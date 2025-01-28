import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        {/* Nav */}
        <header>
          <nav className="flex justify-between py-3">
            <div>
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </div>
            <div>
              <Button className="bg-[#FFBA26] font-semibold w-[80px] h-[22px] md:w-[150px] md: text-center">
                Add food
              </Button>
            </div>
          </nav>
        </header>
        {/* Hero */}
        <div>Hero</div>
        {/* Featured Restaurants */}
        <div>Featured Restaurant</div>
        {/* Footer */}
        <div>Footer</div>
      </div>
    </>
  );
}
