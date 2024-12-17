import React from "react";
import Logo from "../../src/assets/images/logo.webp";

const AboutUs = () => {
  return (
    <div className="bg-[url('./assets//images/pattern.png')]">
      <div className="flex flex-col items-center justify-center min-h-screen  ">
        <div className=" max-w-lg  px-6 py-8 bg-white rounded-md shadow-lg m-20 text-sm">
          <h1 className="text-3xl font-bold text-[#184548] mb-4 flex justify-center text-cinter font-monospace">
            About Us
          </h1>
          <img src={Logo} alt="Tridish Logo" className="h-300 w-500 mb-4" />
          <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6 font-inherit">
            Welcome to Tridish! We are dedicated to bringing you the finest
            culinary experiences from around the globe. Our passion for food
            drives us to source the freshest ingredients and craft dishes that
            celebrate the rich flavors and traditions of various cultures.
          </p>
          <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6 font-inherit">
            At Tridish, we believe that every meal should be an adventure. Our
            team of skilled chefs combines creativity and expertise to create a
            menu that delights the senses and leaves a lasting impression.
            Whether you’re dining in or ordering for delivery, we guarantee that
            every bite will be a memorable one.
          </p>
          <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6 font-inherit">
            Join us on this delicious journey! We are committed to
            sustainability and supporting local farmers. Together, let’s explore
            the world of flavors and indulge in the ultimate dining experience.
          </p>
          <p className="text-[#184548] text-justify px-4 font-inherit">
            Thank you for choosing Tridish - where every dish tells a story!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
