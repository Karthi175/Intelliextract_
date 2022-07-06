import ProcessingTable from "./ProcessingTable";
import SuccessTable from "./SuccessTable";
const TableView = () => {
  return (
    <div class="col-12 mt-3 mb-3 px-4">
      <div className="row pt-3">
        <div className="col-6">
          <ProcessingTable />
        </div>
        <div className="col-6">
          <SuccessTable />
        </div>
      </div>
    </div>
  );
};
export default TableView;
