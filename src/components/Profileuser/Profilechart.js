import Viewchart from "./Viewchart";
import Tabs from "./Tabs";

import styles from "./Profilechart.module.css";
import Sidebar from "../Dashboard/Sidebar";

const Profilechart = () => {
  const tabs = [
    {
      label: "Blood Pressure",
      Component: <Viewchart />,
    },
    {
      label: "Temperature",
      Component: <Viewchart />,
    },
    {
      label: "Height",
      Component: <Viewchart />,
    },
    {
      label: "Weight",
      Component: <Viewchart />,
    },
    {
      label: "Heart Rate",
      Component: <Viewchart />,
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h3 className={styles.HeaderStyles}>Vitals</h3>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </>
  );
};

export default Profilechart;
