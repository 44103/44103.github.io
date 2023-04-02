import Qualification from "./qualifications.json";
import Accordion from "../Accordion/Accordion";
import events from "./events";
import { FaAward } from "react-icons/fa";
import Table from "../Table";

const Resume = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="resume">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="resume-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] pb-2 border-[#FF9036]">
            Resume
          </h2>
          <h3 className="text-2xl font-bold mb-5 border-b-[3px] w-[160px] pb-2 border-[#FF9036]">
            Qualifications
          </h3>
          <Table records={Qualification} />
          <p className="flex items-center pl-5 pt-1">
            <FaAward className="mr-1 text-xl" />
            <a
              href="https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/user/Y2NzWjBiSkkweHBuZXZad0hlQW96dz09"
              className="text-accent underline"
            >
              Open Badges
            </a>
          </p>
        </div>

        <div className="works-info w-[90%] ml-auto">
          <h3 className="text-2xl font-bold mb-5 border-b-[3px] w-[80px] pb-2 border-[#FF9036]">
            Events
          </h3>
          <Accordion events={events} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
