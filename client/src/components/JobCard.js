import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const JobCard = (props) => {
  const { job } = props;
  return (
    <>
<<<<<<< HEAD
      <div className="card" style={{ width: "18rem" }}>
        <Link to={`/description/${job.id}`}>
          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <button type="button" className="btn btn-outline-success">
              {job.type}
            </button>

=======
      <div className="card">
        <Link to={`/description/${job.id}`}>
          <div className="card-header">
            <span className="card-title">{job.title}</span>
            <a type="button" className="btn btn-outline-success">
              {job.type}
            </a>
          </div>
          <div className="card-body">
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
            <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
            <div
              dangerouslySetInnerHTML={{
                __html: job.description,
              }}
            ></div>
            <h5>{job.location}</h5>
            <h6>
              <Moment format="DD MMM YYYY">{new Date(job.created_at)}</Moment>
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export default JobCard;
