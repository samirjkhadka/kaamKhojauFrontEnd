import { BiSolidLike } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h3 className="">How we work?</h3>
      <div className="container">
        <div className="card">
          <div className="icon">
            <LuUserPlus />
          </div>
          <h4 className="">Create an Account</h4>
          <p className="">
            Sign up for a free account as a job seeker or employer. Set up your
            profile in minutes to start posting jobs or applying for jobs.
            Customize your profile to highlight your skills or requirements.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <VscTasklist />
          </div>
          <h4 className="">Post or Browse Jobs</h4>
          <p className="">
            Employers can post detailed job descriptions, and job seekers can
            browse a comprehensive list of available positions. Utilize filters
            to find jobs that match your skills and preferences.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4 className="">Hire or Get Hired</h4>
          <p className="">
            Employers can shortlist candidates and extend job offers. Job
            seekers can review job offers and accept positions that align with
            their career goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
