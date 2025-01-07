
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <section className="min-h-[525px] flex justify-center items-center">
      <ClipLoader color="blue" size={50} />
    </section>
  );
};

export default Spinner;
