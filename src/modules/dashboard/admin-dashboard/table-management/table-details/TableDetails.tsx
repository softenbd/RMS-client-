import Container from "@/shared/wrapper/Container";
import TableDetailsHeader from "./components/TableDetailsHeader";
import TableDetailsOrders from "./components/TableDetailsOrders";
import TableDetailsSidebar from "./components/TableDetailsSidebar";

const TableDetails = () => {
  return (
    <Container className=" min-h-[calc(100vh-40px)] overflow-y-auto max-h-[calc(100vh-40px)] flex flex-row max-w-full">
      <div className="w-8/12 px-4 ">
        <TableDetailsHeader />
        <TableDetailsOrders />
      </div>
      <TableDetailsSidebar className={"w-4/12 "} />
    </Container>
  );
};
export default TableDetails;
