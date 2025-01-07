import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [niche, setNiche] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setCity(city);
  };

  const handleNicheChange = (niche) => {
    setSelectedNiche(niche);
    setNiche(niche);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    dispatch(fetchJobs(city, niche, searchKeyword));
  }, [dispatch, error, city, niche, searchKeyword]);

  const handleSearch = () => {
    dispatch(fetchJobs(city, niche, searchKeyword));
  };

  const cities = [
    "All",
    "Kathmandu",
    "Lalitpur",
    "Bhaktapur",
    "Rukum",
    "Fikkal",
    "Morang",
    "Humla",
    "Jumla",
    "Pokhara",
    "Sindhuli",
    "Biratnagar",
    "Birgunj",
    "Dhangadhi",
    "Dolakha",
    "Gorkha",

    "Kavre",

    "Mugu",
    "Mustang",
    "Nepalgunj",
    "Nepalganj",
    "Nuwakot",
    "Panchthar",
    "Parbat",
    "Salyan",
    "Solukhumbu",
    "Sunsari",
    "Taplejung",
    "Terhathum",
    "Udayapur",
  ];

  const nichesArray = [
    "All",
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="jobs">
          <div className="search-tab-wrapper ">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className=""
            />
            <button onClick={handleSearch} className="">
              Find Job
            </button>
            <FaSearch />
          </div>
          <div className="wrapper">
            <div className="filter-bar">
              <div className="cities">
                <h2 className="">Filter Job By City</h2>
                {cities.map((city, index) => (
                  <div className="" key={index}>
                    <input
                      type="radio"
                      id={city}
                      name="city"
                      value={city}
                      onChange={() => handleCityChange(city)}
                      checked={selectedCity === city}
                    />
                    <label htmlFor={city}>{city}</label>
                  </div>
                ))}
              </div>
              <div className="cities">
                <h2 className="">Filter Job By Niche</h2>
                {nichesArray.map((niche, index) => (
                  <div className="" key={index}>
                    <input
                      type="radio"
                      id={niche}
                      name="niche"
                      value={niche}
                      onChange={() => handleNicheChange(niche)}
                      checked={selectedNiche === niche}
                    />
                    <label htmlFor={niche}>{niche}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="container">
              <div className="mobile-filter">
                <select
                  name=""
                  id=""
                  className=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="" className="">
                    Filter By City
                  </option>
                  {cities.map((city, index) => (
                    <option value={city} className="" key={index}>
                      {city}
                    </option>
                  ))}
                </select>
                <select
                  name=""
                  id=""
                  className=""
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                >
                  <option value="" className="">
                    Filter By Niche
                  </option>
                  {nichesArray.map((niche, index) => (
                    <option value={niche} className="" key={index}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>
              <div className="jobs_container">
                {jobs && jobs.length > 0 ? (
                  jobs.map((element) => {
                    return (
                      <div className="card" key={element._id}>
                        {element.isHiringMultipleCandidates === "Yes" ? (
                          <p className="hiring-multiple">Hiring Multiple Candidates</p>
                        ) : (
                          <p className="hiring">Hiring</p>
                        )}

                        <p className="title">{element.jobTitle}</p>
                        <p className="company">{element.companyName}</p>
                        <p className="location">{element.location}</p>
                        <p className="salary">
                          <span className="">Salary:</span> NPR {element.salary}
                        </p>
                        <p className="posted">
                          <span className="">Posted On: </span>
                          {element.jobPostedOn.substring(0, 10)}
                        </p>
                        <div className="btn-wrapper">
                          <Link
                            className="btn"
                            to={`/post/application/${element._id}`}
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No jobs found</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;
