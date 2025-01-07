import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="">
      <div className="">
        <h1 className="">404</h1>
        <p className="">Page Not Found</p>
        <Link to={"/"}>Back to Home Page</Link>
      </div>
    </section>
  );
};

export default NotFound;
