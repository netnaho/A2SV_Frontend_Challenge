"use client";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  return (
    <>
      <div className="font-mono">
        <header>
          <nav className="w-[86%] mx-auto py-4 flex justify-between items-center">
            <div>
              <Image
                className=""
                src="/logo.png"
                alt="logo"
                width={130}
                height={100}
              />
            </div>
            <div>
              <Dialog>
                <DialogTrigger>
                  <Button className="bg-[#FF9A0E] shadow-2xl shadow-[#FF9A0E] text-white rounded-xl">
                    Add food
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%] md:w-[500px] md:px-5 py-10 rounded-xl">
                  <DialogHeader>
                    <DialogTitle>Add Food</DialogTitle>
                    <DialogDescription>
                      Fill out the form to add food.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4">
                      <Input
                        {...(register("food_name"), { required: true })}
                        name="food_name"
                        placeholder="Food name"
                      />
                      {errors.food_name && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                      <Input
                        {...register("food_rating", {
                          required: true,
                          min: 0,
                          max: 5,
                        })}
                        name="food_rating"
                        type="number"
                        placeholder="Food rating"
                      />
                      {errors.food_rating && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                      <Input
                        {...register("food_image", { required: true })}
                        name="food_image"
                        placeholder="Food image(link)"
                      />
                      {errors.food_image && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                      <Input
                        {...register("restaurant_name", { required: true })}
                        name="restaurant_name"
                        placeholder="Restaurant name"
                      />
                      {errors.restaurant_name && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                      <Input
                        {...register("restaurant_logo", { required: true })}
                        name="restaurant_logo"
                        placeholder="Restaurant logo(link)"
                      />
                      {errors.restaurant_logo && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                      <Input
                        {...register("restaurant_status", { required: true })}
                        name="restaurant_status"
                        placeholder="Restaurant status(open/close)"
                      />
                      {errors.restaurant_status && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between mt-4">
                      <Button
                        type="submit"
                        className="bg-[#FFBA26] text-white rounded-xl"
                      >
                        Save food
                      </Button>
                      <Button className="bg-white text-black rounded-xl">
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </nav>
          <section className="h-[500px] bg-[#FFB30E] overflow-hidden">
            <div className="w-[86%] mx-auto h-full flex flex-col md:flex-row justify-between items-center gap-y-2 gap-x-7">
              <div className="md:w-[60%]">
                <h1 className=" text-4xl md:text-6xl font-bold text-white">
                  Are you starving?
                </h1>
                <p className="text-sm text-white mt-2">
                  Within a few clicks, find meals that are accessible near you
                </p>
                <div className="bg-white px-6 py-4 rounded-lg space-y-7 mt-4">
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-3 bg-[#F172281A] rounded-md px-2 py-1">
                      <Image
                        src="/icons/bike-icon.png"
                        alt="search"
                        width={20}
                        height={20}
                      />
                      <span className="text-[#F17228] font-semibold">
                        Delivery
                      </span>
                    </div>
                    <div className="flex items-center gap-x-1 bg-[#F172281A] rounded-md px-2 py-1">
                      <Image
                        src="/icons/bag-icon.png"
                        alt="search"
                        width={20}
                        height={20}
                      />
                      <span className="text-[#757575] rounded-md font-semibold">
                        Pickup
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex w-[80%] bg-[#F5F5F5] gap-x-1 px-2 py-1 rounded-lg">
                      <Image
                        className="object-contain"
                        src="/icons/search-icon.png"
                        alt="search"
                        width={20}
                        height={20}
                      />
                      <Input
                        className=" outline-none border-none outline-0 active:outline-0 active:outline-none focus:ring-0"
                        placeholder="What do you like to eat today?"
                      />
                    </div>

                    <div>
                      <Button className="bg-[#F65900]">
                        <Image
                          className=""
                          src="/icons/search-icon2.png"
                          alt="search"
                          width={20}
                          height={20}
                        />{" "}
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative md:w-[40%] flex justify-end">
                <Image
                  className="relative object-contain -bottom-6 md:-bottom-24 w-[223px] h-[223px] md:w-[360px] md:h-[360px]"
                  src="/hero-image.png"
                  alt="hero"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </section>
        </header>
        <main className="mt-6">
          <h1 className="text-center font-semibold text-xl mb-2">
            Featured Restaurants
          </h1>
          <FeaturedRestaurants />
        </main>
        <footer className="bg-[#212121] py-7">
          <div className="w-[86%] mx-auto flex flex-col justify-between items-center">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 py-10">
              <div className="md:w-[65%] flex flex-wrap gap-x-12 gap-y-7 text-white mb-5 md:mb-0">
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">Company</h2>
                  <ul className="font-thin text-sm md:text-base space-y-1">
                    <li className="font-light">About Us</li>
                    <li className="font-light">Team</li>
                    <li className="font-light">Careers</li>
                    <li className="font-light">Blog</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">Contact</h2>
                  <ul className="font-thin text-sm md:text-base space-y-1">
                    <li className="font-light">Help & Support</li>
                    <li className="font-light">Partner with us</li>
                    <li className="font-light">Ride with us</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">Legal</h2>
                  <ul className="font-thin text-sm md:text-base space-y-1">
                    <li className="font-light">Terms & Conditions</li>
                    <li className="font-light">Refund & Cancellations</li>
                    <li className="font-light">Privacy Policy</li>
                    <li className="font-light">Ride with us</li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="font-semibold text-[#F5F5F5]">FOLLOW US</p>
                <div className="mt-2 mb-4 flex gap-2">
                  <Image
                    src="/social-icons/insta.png"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/social-icons/face.png"
                    alt="facebook"
                    width={20}
                    height={20}
                  />

                  <Image
                    src="/social-icons/twitt.png"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="font-semibold text-[#BBBBBB] my-4">
                  Receive exclusive offers in your mailbox
                </p>
                <div className="flex gap-x-2 items-center my-2">
                  <div className="flex bg-[#424242] rounded-[8px] gap-x-1 px-2 py-1">
                    <Image
                      className="object-contain"
                      src="/icons/email-icon.png"
                      alt="search"
                      width={20}
                      height={20}
                    />
                    <Input
                      className=" outline-none border-none outline-0 focus:outline-0 focus:outline-none focus:ring-0"
                      placeholder="Enter your email"
                    />
                  </div>
                  <Button className="bg-[#FF8A00] mt-2">Subscribe </Button>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center border-t-[1px] border-gray-500 py-1">
              <span className="text-white">
                All rights Reserved &copy; Your company, 2021
              </span>
              <span className="text-white">Made with by Nahom</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
