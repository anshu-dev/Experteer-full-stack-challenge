import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9

import JobCard from "./JobCard";
import Search from "./Search";
import Loader from "./Loader";
<<<<<<< HEAD
=======
import { getJobs } from "../services/jobApiServices";
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9

const initialJobListStatus = { initiate: true, loading: false, message: "" };

const Home = () => {
  const [jobs, setjobs] = useState([]);
  const [searchStatus, setSearchStatus] = useState(initialJobListStatus);
  const [intervalId, setIntervalId] = useState();

<<<<<<< HEAD
  const getJobList = () => {
    const unSubscribeId = setInterval(() => {
      axios
        .get(`${process.env.REACT_APP_URL}/get-jobs-list`)
        .then((response) => {
          if (response.data != "") {
            setjobs(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          // alert("Somethink went wrong, Please try again");
        });
=======
  const getJobList = async () => {
    const unSubscribeId = setInterval(async () => {
      const data = await getJobs();
      if (data != "") {
        setjobs(data);
      }
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
    }, 5000);

    setTimeout(() => clearInterval(unSubscribeId), 36000);
    setIntervalId(unSubscribeId);
  };

  useEffect(() => {
    clearInterval(intervalId);
    setSearchStatus({
      ...searchStatus,
      initiate: false,
      loading: false,
      message: "",
    });
    return () => {
<<<<<<< HEAD
      const setPreservedOldState = { jobs, searchStatus, intervalId };
      localStorage.setItem(
        "preservedOldState",
        JSON.stringify(setPreservedOldState)
=======
      localStorage.setItem(
        "preservedOldState",
        JSON.stringify({ jobs, searchStatus, intervalId })
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
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
<<<<<<< HEAD
      {!searchStatus.initiate &&
        (!searchStatus.loading ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <h6>
            {searchStatus.message} <Loader />
          </h6>
        ))}
=======
      <div className="container">
        {!searchStatus.initiate &&
          (!searchStatus.loading ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="message-loader">
              <h2 className="loader-message"> {searchStatus.message}</h2>
              <div>
                <Loader />
              </div>
            </div>
          ))}
      </div>
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
    </>
  );
};

export default Home;
