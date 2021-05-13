import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const JobCard = (props) => {
  const { job } = props;
  return (
    <>
      <div className="card">
        <Link to={`/description/${job.id}`}>
          <div className="card-header">
            <span className="card-title">{job.title}</span>
            <a type="button" className="btn btn-outline-success">
              {job.type}
            </a>
          </div>
          <div className="card-body">
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
