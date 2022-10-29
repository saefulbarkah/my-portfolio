import React from "react";
import Image from "../components/Image";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="w-full flex justify-center">
          <Image src="/assets/images/avatar.png" className="" />
        </div>
        <div className="flex w-full items-center justify-center flex-col">
          <PageTitle name="Saeful Barkah" className="text-[32px]" />
          <Paragraph
            text="Halo, nama saya Saeful Barkah biasanya di panggil eful, saya adalah lulusan SMK Mahaputra jurusan Rekayasa Perangkat Lunak."
            className="py-4 sm:w-[400px] w-full text-[16px] text-center"
          />
          <a
            href="#"
            className="bg-purple-1 py-2 px-3 rounded-lg font-semibold"
          >
            Download CV
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
