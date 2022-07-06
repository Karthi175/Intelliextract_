import Cards from "./Cards";
import PersonCard from "./PersonCard";
import SocialCard from "./Social";
const Sidebar = () => {
  return (
    <>
      <div>
        <PersonCard />
      </div>
      <div>
        <SocialCard />
      </div>
    </>
  );
};
export default Sidebar;
