import React from "react";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Image from "../components/Image";
import Icon from "../components/Icon";
import Title from "../components/Title";
const Projects = () => {
  return (
    <>
      <Title title="Projects" />
      <section id="Projects" className="py-[75px]">
        <div className="flex flex-col items-center">
          <PageTitle name="Personal Projects" className="text-[32px]" />
        </div>
        <div className="flex items-center gap-10 mt-5 justify-center h-full w-full">
          <Card className="relative bg-yellow-1/30 border border-yellow-1 shadow-lg shadow-yellow-1 rounded-xl sm:w-[350px] w-[300px] z-50">
            <Image
              src="/assets/images/project-web-genshin.png"
              className="rounded-xl w-full"
            />
            <div className="title flex items-center justify-center my-6">
              <span className="font-bold">Web Genshin Impact Clone</span>
            </div>
            <div className="flex gap-3 items-center justify-center my-4">
              <a
                href="https://github.com/saefulbarkah/web-genshin-impact-clone"
                target="_blank"
                className="flex text-sm  items-center gap-2 rounded-xl sm:py-2 sm:px-3 p-2 bg-gray-800 font-medium"
              >
                <Icon name="github" className="w-[25px]" />
                Repository
              </a>
              <a
                href="https://web-genshin-impact-clone.vercel.app/"
                target="_blank"
                className="flex text-sm items-center gap-2 rounded-xl sm:py-2 sm:px-3 p-2 bg-purple-600 font-medium"
              >
                <Icon name="link" className="w-[25px]" />
                Visit Link
              </a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Projects;
