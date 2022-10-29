import React from "react";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Paragraph from "../components/Paragraph";
import Image from "../components/Image";
import Icon from "../components/Icon";
const Skills = () => {
  return (
    <>
      <section id="contact" className="py-[150px]">
        <div className="flex flex-col items-center">
          <PageTitle name="Skills" className="text-[32px]" />
        </div>
        <div className="grid grid-cols-3 gap-10 justify-center items-stretch mt-5">
          <Card className="flex bg-purple-1/30 border border-purple-1 justify-center items-center gap-[10px] shadow-purple-1 shadow-lg">
            <Icon name="html" className="w-[35px]" />
            <Paragraph text="HTML" className="font-semibold" />
          </Card>
          <Card className="flex bg-orange-1/30 border border-orange-1 justify-center items-center gap-[10px] shadow-orange-1 shadow-lg">
            <Icon name="css" className="w-[35px]" />
            <Paragraph text="CSS" className="font-semibold" />
          </Card>
          <Card className="flex bg-red-1/30 border border-red-1 justify-center items-center gap-[10px] shadow-red-1 shadow-lg">
            <Icon name="javascript" className="w-[35px]" />
            <Paragraph text="javascript" className="font-semibold" />
          </Card>
          <Card className="flex bg-red-1/30 border border-red-1 justify-center items-center gap-[10px] shadow-red-1 shadow-lg">
            <Icon name="react" className="w-[35px]" />
            <Paragraph text="ReactJS" className="font-semibold" />
          </Card>
          <Card className="flex bg-pink-500/30 border border-pink-500 justify-center items-center gap-[10px] shadow-pink-500 shadow-lg">
            <Icon name="tailwindcss" className="w-[35px]" />
            <Paragraph text="TailwindCSS" className="font-semibold" />
          </Card>
          <Card className="flex bg-green-500/30 border border-green-500 justify-center items-center gap-[10px] shadow-green-500 shadow-lg">
            <Icon name="figma" className="w-[35px]" />
            <Paragraph text="Figma" className="font-semibold" />
          </Card>
        </div>
      </section>
    </>
  );
};

export default Skills;
