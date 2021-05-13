import React, { useEffect, useState } from "react";
import axios from "axios";

import JobCard from "./JobCard";
import Search from "./Search";
import Loader from "./Loader";

const initialJobListStatus = { initiate: true, loading: false, message: "" };

const Home = () => {
  const [jobs, setjobs] = useState([]);
  const [searchStatus, setSearchStatus] = useState(initialJobListStatus);
  const [intervalId, setIntervalId] = useState();

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
      const setPreservedOldState = { jobs, searchStatus, intervalId };
      localStorage.setItem(
        "preservedOldState",
        JSON.stringify(setPreservedOldState)
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
      {!searchStatus.initiate &&
        (!searchStatus.loading ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <h6>
            {searchStatus.message} <Loader />
          </h6>
        ))}
    </>
  );
};

export default Home;
