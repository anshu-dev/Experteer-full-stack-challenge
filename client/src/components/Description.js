import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";
import { getJobDiscription } from "../services/jobApiServices";

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
    const data = await getJobDiscription(match.params.jobId);
    await setjob({ ...job, ...data });
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
        </div>
      </div>
    </>
  );
};

export default Description;
