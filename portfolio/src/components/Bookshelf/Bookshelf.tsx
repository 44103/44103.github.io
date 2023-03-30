import Books from "./books.json";

const Bookshelf = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="bookshelf">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="bookshelf-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] pb-2 border-[#FF9036]">
            Bookshelf
          </h2>

          <p className="py-5">読書履歴</p>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {Books.map((value, index) => {
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
      </div>
    </section>
  );
};

export default Bookshelf;
