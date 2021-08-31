import React from "react";
import Link from 'next/link'

const Footer = () => {
  return (
    <div style={{ borderTop: "2px solid #E5E5E5" }} className="sm:py-12 py-3 ">
      <section className="pt-5 container mx-auto flex flex-col 2xl:p-2 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full sm:gap-10 gap-5">
          <div className="flex flex-col ">
            <Link href="/" >
           <a className='text-3xl text-blue-primary'>  Stay<span className="text-blue-dark">cation</span> </a>
            </Link>
            <p className="font-light text-gray-light text-base mt-3">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="flex flex-col xl:pl-10 ">
            <h3 className="text-blue-dark font-medium text-xl py-2 leading-7">
              For Beginners
            </h3>
            <h4 className="font-light text-gray-light text-base mt-2 ">
              New Account
            </h4>
            <h4 className="font-light text-gray-light text-base mt-2">
              Start Booking a Room
            </h4>
            <h4 className="font-light text-gray-light text-base mt-2">
              Use Payments
            </h4>
          </div>
          <div className="flex flex-col xl:pl-10">
            <h3 className="text-blue-dark font-medium text-xl py-2 leading-7">
              Explore Us
            </h3>
            <h4 className="font-light text-gray-light text-base mt-2 ">
              Our Careers
            </h4>
            <h4 className="font-light text-gray-light text-base mt-2 ">
              Privacy
            </h4>
            <h4 className="font-light text-gray-light text-base mt-2 ">
              Terms & Conditions
            </h4>
          </div>
          <div className="flex flex-col xl:pl-10">
            <h3 className="text-blue-dark font-medium text-xl py-2 leading-7">
              Connect Us
            </h3>
            <h4 className="font-light text-gray-light text-base mt-2 ">
              support@staycation.id
            </h4>
            <h4 className="font-light text-gray-light text-base mt-2 ">
              021 - 2208 - 1996
            </h4>
            <h4 className="font-light text-gray-light text-base mt-2 ">
              Staycation, Kemang, Jakarta
            </h4>
          </div>
        </div>
        <h3 className="font-light text-gray-light text-center mt-10 ">
          Copyright 2019 • All rights reserved • Staycation
        </h3>
      </section>
    </div>
  );
};

export default Footer;
