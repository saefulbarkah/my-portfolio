import React from "react";
import Image from "../components/Image";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import Avatar from "../../public/assets/images/avatar.png";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="w-full flex justify-center">
          <Image src={Avatar} className="" />
        </div>
        <div className="flex w-full items-center justify-center flex-col text-center">
          <PageTitle name="Saeful Barkah" className="text-[32px]" />
          <Paragraph
            text="Halo, nama saya Saeful Barkah biasanya di panggil eful, saya adalah lulusan SMK Mahaputra jurusan Rekayasa Perangkat Lunak."
            className="py-4 w-[400px] text-[16px]"
          />
        </div>
      </section>
    </>
  );
};

export default About;
