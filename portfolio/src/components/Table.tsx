const Table = ({ records }: { records: { title: string; date: string }[] }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {records.map((value, index) => {
          return (
            <tr className={index % 2 ? "bg-secondary" : "bg-primary"}>
              <td className="border px-4 py-2">{value.title}</td>
              <td className="border px-4 py-2 whitespace-nowrap">
                {value.date}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
