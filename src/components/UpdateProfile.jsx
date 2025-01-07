import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  updateProfile,
  clearAllUpdateProfileErrors,
} from "../store/slices/updateProfileSlice";
import { getUser } from "../store/slices/userSlice";
const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdated } = useSelector(
    (state) => state.updateProfile
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [firstName, setFirstName] = useState(user && user.firstName);
  const [middleName, setMiddleName] = useState(user && user.middleName);
  const [lastName, setLastName] = useState(user && user.lastName);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const [address, setAddress] = useState(user && user.address);
  const [coverLetter, setCoverLetter] = useState(user && user.coverLetter);
  const [firstNiche, setFirstNiche] = useState(user && user.niches?.firstNiche);
  const [secondNiche, setSecondNiche] = useState(
    user && user.niches?.secondNiche
  );
  const [thirdNiche, setThirdNiche] = useState(user && user.niches?.thirdNiche);
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(user && user.resume?.url);

  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("middleName", middleName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    if (user && user.role === "Seeker") {
      formData.append("coverLetter", coverLetter);
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
    }
    if (resume) {
      formData.append("resume", resume);
    }
    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }
    if (isUpdated) {
      toast.success("Profile updated successfully.");
      dispatch(getUser());
      dispatch(clearAllUpdateProfileErrors());
    }
  }, [dispatch, error, isUpdated]);

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setResumePreview(reader.result);
      setResume(file);
    };
  };

  const nichesArray = [
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
    <div className="account_components">
      <h3 className="">Update Profile</h3>
      <div className="">
        <label htmlFor="" className="">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className=""
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Middle Name
        </label>
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          className=""
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className=""
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Phone Number
        </label>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      {user && user.role === "Seeker" && (
        <>
          <div>
            <label>My Preferred Job Niches</label>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <select
                value={firstNiche}
                onChange={(e) => setFirstNiche(e.target.value)}
              >
                {nichesArray.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })}
              </select>
              <select
                value={secondNiche}
                onChange={(e) => setSecondNiche(e.target.value)}
              >
                {nichesArray.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })}
              </select>
              <select
                value={thirdNiche}
                onChange={(e) => setThirdNiche(e.target.value)}
              >
                {nichesArray.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <label>Coverletter</label>
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows={5}
            />
          </div>
          <div>
            <label>Upload Resume</label>
            <input type="file" onChange={resumeHandler} />
            {user && user.resume && (
              <div>
                <p>Current Resume:</p>
                <Link
                  to={user.resume && user.resume.url}
                  target="_blank"
                  className="view-resume"
                >
                  View Resume
                </Link>
              </div>
            )}
          </div>
        </>
      )}
      <div className="save_change_btn_wrapper">
        <button
          className="btn"
          onClick={handleUpdateProfile}
          disabled={loading}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
