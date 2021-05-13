import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";
<<<<<<< HEAD

import axios from "axios";
=======
import { getJobDiscription } from "../services/jobApiServices";
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9

const initialState = {
  id: null,
  type: null,
  created_at: null,
  company: null,
  location: null,
  title: null,
  description: null,
  how_to_apply: null,
};

const Description = ({ match }) => {
  const [job, setjob] = useState(initialState);
  const [applied, setApplied] = useState(null);
  const history = useHistory();

  useEffect(async () => {
<<<<<<< HEAD
    console.log("errr..............");
    axios
      .get(`${process.env.REACT_APP_URL}/get-job/${match.params.jobId}`)
      .then((resjob) => {
        console.log("errr.............ddd.", resjob);
        setjob({ ...job, ...resjob.data });
      })
      .catch((err) => {
        console.log("errr", err);
      });
=======
    const data = await getJobDiscription(match.params.jobId);
    await setjob({ ...job, ...data });
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
  }, []);

  useEffect(() => {
    let appiedIDs = localStorage.getItem("appliedIDs");
    if (appiedIDs) {
      let temp = JSON.parse(appiedIDs);
      let temp2 = temp.filter((id) => job.id == id);
      temp2.length > 0 && setApplied("yes");
    }
  }, [job]);

  const applyHandler = (id) => {
    let appiedIDs = [];
    let temp = localStorage.getItem("appliedIDs");

    if (temp) {
      appiedIDs = JSON.parse(temp);
      appiedIDs.push(job.id);
      localStorage.setItem("appliedIDs", JSON.stringify(appiedIDs));
      setApplied("yes");
    } else {
      appiedIDs.push(job.id);
      localStorage.setItem("appliedIDs", JSON.stringify(appiedIDs));
      setApplied("yes");
    }
  };

  return (
    <>
<<<<<<< HEAD
      <h1>Description</h1>
      <button onClick={() => history.goBack()}>Go Back </button>

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{job.title}</h5>
          <input
            type="button"
            disabled={applied}
            value={!applied ? "Apply" : "Applied"}
            onClick={applyHandler}
          />
          <button type="button" className="btn btn-outline-success">
            {job.type}
          </button>

          <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>

          <h5>{job.location}</h5>
          <h6>
            <Moment format="DD MMM YYYY">{new Date(job.created_at)}</Moment>
          </h6>
          <div
            dangerouslySetInnerHTML={{
              __html: job.description,
            }}
          ></div>
          {!applied && (
            <input type="button" value="Apply" onClick={applyHandler} />
          )}
=======
      <div className="container customContainer">
        <button onClick={() => history.goBack()}>Go Back </button>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <input
              type="button"
              disabled={applied}
              value={!applied ? "Apply" : "Applied"}
              onClick={applyHandler}
            />
            <button type="button" className="btn btn-outline-success">
              {job.type}
            </button>

            <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>

            <h5>{job.location}</h5>
            <h6>
              <Moment format="DD MMM YYYY">{new Date(job.created_at)}</Moment>
            </h6>
            <div
              dangerouslySetInnerHTML={{
                __html: job.description,
              }}
            ></div>
            {!applied && (
              <input type="button" value="Apply" onClick={applyHandler} />
            )}
          </div>
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
        </div>
      </div>
    </>
  );
};

export default Description;
