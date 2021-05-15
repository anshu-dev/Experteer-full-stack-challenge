import React, { useEffect, useState } from "react";

import JobCard from "./JobCard";
import Search from "./Search";
import Loader from "./Loader";
import { getJobs } from "../services/jobApiServices";

const initialJobListStatus = { initiate: true, loading: false, message: "" };

const Home = () => {
  const [jobs, setjobs] = useState([]);
  const [searchStatus, setSearchStatus] = useState(initialJobListStatus);
  const [intervalId, setIntervalId] = useState();

  const getJobList = async () => {
    const unSubscribeId = setInterval(async () => {
      const data = await getJobs();
      console.log("......1", data);
      if (data) {
        console.log("......", data);
        setSearchStatus({
          ...searchStatus,
          initiate: false,
          loading: false,
          message: "No data found",
        });
        setjobs(data);
      }
    }, 5000);

    setTimeout(() => clearInterval(unSubscribeId), 36000);
    setIntervalId(unSubscribeId);
  };

  useEffect(() => {
    clearInterval(intervalId);

    return () => {
      localStorage.setItem(
        "preservedOldState",
        JSON.stringify({ jobs, searchStatus, intervalId })
      );
    };
  }, [jobs]);

  useEffect(() => {
    let preservedOldState = localStorage.getItem("preservedOldState");
    if (preservedOldState) {
      let states = JSON.parse(preservedOldState);
      setjobs(states.jobs);
      setSearchStatus(states.searchStatus);
      setIntervalId(states.intervalId);
    }
  }, []);

  return (
    <>
      <Search
        setSearchStatus={setSearchStatus}
        searchStatus={searchStatus}
        getJobList={getJobList}
      />
      <div className="container">
        {console.log(searchStatus)}
        {!searchStatus.initiate &&
          (!searchStatus.loading ? (
            jobs.length <= 0 ? (
              <h2 className="loader-message"> "No data found."</h2>
            ) : (
              jobs.map((job) => <JobCard key={job.id} job={job} />)
            )
          ) : (
            <div className="message-loader">
              <h2 className="loader-message"> {searchStatus.message}</h2>
              <div>
                <Loader />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
