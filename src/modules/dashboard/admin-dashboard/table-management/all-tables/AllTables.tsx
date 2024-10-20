import TableCard from "./components/TableCard";

const AllTables = () => {
  return (
    <div className="p-5 border-2  min-h-[calc(100vh-40px)] overflow-y-auto max-h-[calc(100vh-40px)] ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 items-stretch">
        <TableCard status={"Booked"} table={1} color={"bg-card-dark-navy"} />
        <TableCard status={"Vacancy"} table={2} color={"bg-card-dark-teal"} />
        <TableCard status={"Booked"} table={3} color={"bg-card-deep-purple"} />
        <TableCard status={"Booked"} table={4} color={"bg-card-rich-maroon"} />
        <TableCard status={"Booked"} table={5} color={"bg-card-bold-orange"} />
        <TableCard status={"Booked"} table={6} color={"bg-card-vivid-blue"} />
        <TableCard
          status={"Vacancy"}
          table={7}
          color={"bg-card-strong-olive"}
        />
        <TableCard status={"Booked"} table={8} color={"bg-card-dark-slate"} />
        <TableCard status={"Booked"} table={9} color={"bg-card-intense-red"} />
        <TableCard
          status={"Vacancy"}
          table={10}
          color={"bg-card-dark-indigo"}
        />
      </div>
    </div>
  );
};
export default AllTables;
