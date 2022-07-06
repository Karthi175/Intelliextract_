import Cards from "./Cards";
import Sidebar from "./Sidebar";
import LabreportCard from "./LabreportCard";
import MedicationCard from "./MedicationCard";
const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-4 pt-3" style={{ paddingRight: 0 }}>
          <Sidebar />
        </div>
        <div className="col-md-8 pt-3">
          <div className="col-md-12">
            <MedicationCard />
            <div className="row">
              <div className="col-md-6" style={{ paddingRight: 0, marginTop: "10px" }}>
                <Cards />
              </div>
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <LabreportCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
