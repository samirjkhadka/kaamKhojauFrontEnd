import { useSelector } from "react-redux";

const Myprofile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="account_components">
      <h3 className="">My Profile</h3>
      <div className="">
        <label htmlFor="" className="">
          Full Name
        </label>
        <input
          type="text"
          disabled
          value={
            user && user.firstName + " " + user.middleName + " " + user.lastName
          }
          onChange={(e) => e.target.value}
          className=""
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Email Address
        </label>
        <input
          type="email"
          disabled
          value={user && user.email}
          onChange={(e) => e.target.value}
          className=""
        />
      </div>
      {user && user.role === "Seeker" && (
        <div className="">
          <label htmlFor="" className="">
            My Prefered Job Niches
          </label>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              disabled
              value={user && user.niches.firstNiche}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              disabled
              value={user && user.niches.secondNiche}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              disabled
              value={user && user.niches.thirdNiche}
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
      )}
      <div className="">
        <label htmlFor="">Phone Number</label>
        <input
          type="number"
          disabled
          value={user && user.phone}
          className=""
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Address
        </label>
        <input
          type="text"
          disabled
          value={user && user.address}
          className=""
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Role
        </label>
        <input
          type="text"
          disabled
          value={user && user.role}
          className=""
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="">
        <label htmlFor="">Joined On</label>
        <input
          type="text"
          disabled
          value={user && user.createdAt}
          onChange={(e) => e.target.value}
          className=""
        />
      </div>
    </div>
  );
};

export default Myprofile;
