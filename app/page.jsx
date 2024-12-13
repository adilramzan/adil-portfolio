"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  // Handler to download resume
  const handleDownload = () => {
    // Assuming the PDF file is stored in the public folder as "Aadil_Resume.pdf"
    const filePath = "/Aadil_Resume.pdf";

    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Aadil_Resume.pdf"; // Set the file name
    link.click();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Computer Scientist</span>
            <h1 className="h1 mb-4">
              Hi I&apos;m<br />
              <span className="text-accent-default">Adil Ramzan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m good at crafting nice digital experiences and
              I&apos;m proficient at different programming languages and technologies.
            </p>
            {/* button & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={handleDownload}
                variant="outline"
                className="uppercase flex items-center gap-2 text-accent-default hover:text-white"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-hover hover:text-white hover:border-accent-hover hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* profile_photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
