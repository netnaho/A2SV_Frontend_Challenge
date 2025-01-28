import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Nav */}
        <header>
          <nav className="flex w-[90%] mx-auto justify-between items-center py-3">
            <div>
              <Image src="/logo.png" alt="logo" width={130} height={120} />
            </div>
            <div>
              <Dialog>
                <DialogTrigger>
                  <Button className="bg-[#FFBA26] font-semibold w-[100px] h-[30px] md:w-[150px] md:h-[42px] text-center">
                    Add food
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div className=" flex flex-col gap-y-2 py-4 px-5">
                    <Input placeholder="Enter food name" />
                    <Input type="number" placeholder="Enter food rating" />
                    <Input type="file" placeholder="Enter food image" />
                    <Input placeholder="Enter Restaurant name" />
                    <Input type="file" placeholder="Enter Restaurant logo" />
                    <Input placeholder="Restaurant status" />
                  </div>
                </DialogContent>
              </Dialog>
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
