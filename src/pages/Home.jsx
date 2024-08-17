import FriendsRequests from "../components/FriendsRequests";
import Friends from "../components/Friends";
import Userlists from "../components/UserLists";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr,3fr,3fr] gap-x-10">
        <div className="w-full  ">
          <Userlists />
        </div>
        <div className="w-full ">
          <FriendsRequests />
        </div>
        <div className="w-full ">
          <Friends />
        </div>
      </div>
    </>
  );
};

export default Home;
