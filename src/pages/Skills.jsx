import React from "react";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Paragraph from "../components/Paragraph";
import Icon from "../components/Icon";
import Title from "../components/Title";
const Skills = () => {
  return (
    <>
      <Title title="Skills" />
      <section id="Skills" className="sm:py-[150px] py-[30px]">
        <div className="flex flex-col items-center">
          <PageTitle name="Skills" className="text-[32px]" />
        </div>
        <div className="grid sm:grid-cols-3 sm:gap-10 gap-6 justify-center items-stretch mt-5">
          <Card className="flex bg-purple-1/30 border border-purple-1 justify-center items-center gap-[10px] shadow-purple-1 shadow-lg">
            <Icon name="html" className="sm:w-[35px] w-[20px]" />
            <Paragraph text="HTML" className="font-semibold" />
          </Card>
          <Card className="flex bg-orange-1/30 border border-orange-1 justify-center items-center gap-[10px] shadow-orange-1 shadow-lg">
            <Icon name="css" className="sm:w-[35px] w-[20px]" />
            <Paragraph text="CSS" className="font-semibold" />
          </Card>
          <Card className="flex bg-red-1/30 border border-red-1 justify-center items-center gap-[10px] shadow-red-1 shadow-lg">
            <Icon name="javascript" className="sm:w-[35px] w-[20px]" />
            <Paragraph text="javascript" className="font-semibold" />
          </Card>
          <Card className="flex bg-red-1/30 border border-red-1 justify-center items-center gap-[10px] shadow-red-1 shadow-lg">
            <Icon name="react" className="sm:w-[35px] w-[20px]" />
            <Paragraph text="ReactJS" className="font-semibold" />
          </Card>
          <Card className="flex bg-pink-500/30 border border-pink-500 justify-center items-center gap-[10px] shadow-pink-500 shadow-lg">
            <Icon name="tailwindcss" className="sm:w-[35px] w-[20px]" />
            <Paragraph text="TailwindCSS" className="font-semibold" />
          </Card>
          <Card className="flex  bg-green-500/30 border border-green-500 justify-center items-center gap-[10px] shadow-green-500 shadow-lg">
            <Icon name="figma" className="sm:w-[35px] w-[20px]" />
            <Paragraph text="Figma" className="font-semibold" />
          </Card>
        </div>
      </section>
    </>
  );
};

export default Skills;
