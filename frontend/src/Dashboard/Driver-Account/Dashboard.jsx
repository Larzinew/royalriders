import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";
import HashLoader from "react-spinners/HashLoader";
import Profile from "./Profile";
import Appointments from "./Appointments";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");
  const { data: driverData, loading, error } = useGetProfile(
    `${BASE_URL}/drivers/profile/me`
  );

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && (
          <div className="flex items-center justify-center w-full h-full">
            <HashLoader color="#0067FF" />
          </div>
        )}
        {error && <div><h3>{error.message}</h3></div>}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px] ">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {driverData.isApproved === "pending" && (
                <div
                  id="alert-4"
                  className="flex p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 "
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We&apos;ll
                    review manually and approve within 3 days.
                  </div>
                </div>
              )}
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="flex gap-5 items-center mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img
                          src={driverData.photo}
                          alt=""
                          className="w-full"
                        />
                      </figure>
                      <div>
                        <h3 className="text-headingColor text-[22px] leading-[36px] mt-3 font-bold">
                          {driverData.name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[600] text-headingColor">
                            <img src={starIcon} alt="" />{" "}
                            {driverData.averageRating}
                          </span>
                        </div>
                        <p className="text__para text-[15px] leading-6 lg:max-w-[390px]">
                          {driverData.bio}
                        </p>
                      </div>
                    </div>
                    <DriverrAbout name={driverData.name} about={driverData.about} />
                  </div>
                )}
                {tab === "settings" && <Profile driverData={driverData} />}
                {tab === "appointments" && (
                  <Appointments appointments={driverData.appointments} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
