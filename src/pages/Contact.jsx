import React from "react";
import Card from "../components/Card";
import Icon from "../components/Icon";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-[150px]">
        <div className="flex flex-col items-center">
          <PageTitle name="Contact" className="text-[32px]" />
        </div>
        <div className="grid mx-[220px] items-center grid-cols-2 gap-5 content-center h-full justify-center py-[50px]">
          <Card className="flex items-center bg-yellow-500 gap-3 text-gray-700 font-bold shadow-drop-r">
            <Icon name="whatsapp" className="w-[25px]" />
            <span>083180012053</span>
          </Card>
          <Card className="flex items-center bg-purple-1 gap-3 text-white font-bold shadow-drop-r">
            <Icon name="github" className="w-[25px]" />
            <span>saefulbarkah</span>
          </Card>
          <Card className="flex items-center bg-white gap-3 text-gray-700 font-bold col-span-2 mx-[60px] mt-[20px] shadow-drop-r">
            <Icon name="gmail" className="w-[25px]" />
            <span>saefulbarkah650@gmail.com</span>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Contact;
