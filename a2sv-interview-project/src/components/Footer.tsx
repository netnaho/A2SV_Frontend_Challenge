import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="bg-[#212121] py-10 ">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-between items-center">
        <div className="flex flex-col gap-y-4 text-white">
          <h2 className="text-white font-semibold">Company</h2>
          <div className="flex flex-col gap-y-2">
            <ul>About us</ul>
            <ul>Teams</ul>
            <ul>Careers</ul>
            <ul>Blogs</ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-white">
          <h2 className="text-white font-semibold">Company</h2>
          <div className="flex flex-col gap-y-2">
            <ul>About us</ul>
            <ul>Teams</ul>
            <ul>Careers</ul>
            <ul>Blogs</ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-white">
          <h2 className="text-white font-semibold">Company</h2>
          <div className="flex flex-col gap-y-2">
            <ul>About us</ul>
            <ul>Teams</ul>
            <ul>Careers</ul>
            <ul>Blogs</ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <Input placeholder="Enter your email" />
          </div>
          <Button className="bg-[#FFBA26] text-white font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
