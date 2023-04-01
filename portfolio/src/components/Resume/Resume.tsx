import Qualification from "./qualifications.json";
import Accordion from "../Accordion/Accordion";
import events from "./events";

const Resume = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="resume">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="resume-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] pb-2 border-[#FF9036]">
            Resume
          </h2>

          <p className="py-5">免許・資格</p>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {Qualification.map((value, index) => {
                return (
                  <tr className={index % 2 ? "bg-secondary" : "bg-primary"}>
                    <td className="border px-4 py-2">{value.title}</td>
                    <td className="border px-4 py-2">{value.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
