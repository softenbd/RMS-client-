import TableCard from "./components/TableCard";

const AllTables = () => {
  return (
    <div className="p-5 border-2  min-h-[calc(100vh-40px)] overflow-y-auto max-h-[calc(100vh-40px)] ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 items-stretch">
        <TableCard status={"Booked"} table={1} color={"card-dark-navy"} />
        <TableCard status={"Vacancy"} table={2} color={"card-dark-teal"} />
        <TableCard status={"Booked"} table={3} color={"card-deep-purple"} />
        <TableCard status={"Booked"} table={4} color={"card-rich-maroon"} />
        <TableCard status={"Booked"} table={5} color={"card-bold-orange"} />
        <TableCard status={"Booked"} table={6} color={"card-vivid-blue"} />
        <TableCard status={"Vacancy"} table={7} color={"card-strong-olive"} />
        <TableCard status={"Booked"} table={8} color={"card-dark-slate"} />
        <TableCard status={"Booked"} table={9} color={"card-intense-red"} />
        <TableCard status={"Vacancy"} table={10} color={"card-dark-indigo"} />
      </div>
    </div>
  );
};
export default AllTables;
