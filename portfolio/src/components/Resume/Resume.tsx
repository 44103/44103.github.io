import Qualification from "./qualifications.json";
import Accordion from "../Accordion/Accordion";
import events from "./events";
import Table from "../Table";

const Resume = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="resume">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="resume-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] pb-2 border-[#FF9036]">
            Resume
          </h2>
          <Table records={Qualification} />
        </div>

        <div className="works-info">
          <p className="py-5">ハッカソン・イベント</p>
          <Accordion events={events} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
