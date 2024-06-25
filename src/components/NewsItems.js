import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, Author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ minHeight: "28rem" }}>
        <div
          className="position-absolute badge rounded-pill bg-danger"
          style={{
            right: "0px",
            zIndex: "1",
          }}
        >
          {source}
        </div>
        <img
          src={imageUrl}
          className="card-img-top"
          alt=""
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By <strong>{Author ? Author : "Unknown"}</strong> on{" "}
              <strong>{new Date(date).toGMTString()}</strong>
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
            rel="noopener noreferrer" // Added for security reasons
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
