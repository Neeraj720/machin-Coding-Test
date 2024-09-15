import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(
      "https://mxpertztestapi.onrender.com/api/adventure"
    );
    setData(response.data);
  };

  const handleNavigate = (id) => {
    navigate(`/cardDetails/${id}`);
  };

  const renderCards = () => {
    const filteredData =
      status === "All" ? data : data.filter((story) => story.Status === status);

    return filteredData.map((story) => (
      <div className="col-md-4 col-sm-6 col-lg-3 mt-3" key={story._id}>
        <div
          className="card w-100 h-100 shadow-md rounded-md"
          style={{ width: "18rem", backgroundColor: "#2ab9ce" }}
        >
          <img
            src="https://media.istockphoto.com/id/1326978045/photo/lonely-big-tree-growing-up-on-ancient-books-like-a-painting-in-literature.jpg?s=612x612&w=0&k=20&c=bedRj10WevmGKOltdrCbo5FVRBRE1c9LI5pj_E3m4AE="
            className="card-img-top"
            alt="story Img"
            width={150}
            height={200}
          />
          <div className="card-body">
            <h5 className="card-title text-white">{story.Title}</h5>
            <button
              href="#"
              className="btn mt-3 shadow-md fw-bold rounded-pill"
              style={{
                width: "100%",
                backgroundColor: "white",
                color:
                  story.Status === "New"
                    ? "blue"
                    : story.Status === "Completed"
                    ? "green"
                    : "yellow",
              }}
              onClick={() => handleNavigate(story._id)}
            >
              {story.Status}
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-3">
      <div style={{ margin: "25px 0px" }}>
        <h3 className="text-white mt-3 mb-3 fw-bold">
          Science Fiction Stories
        </h3>
        <div
          className="d-flex align-items-center justify-content-around"
          style={{ marginTop: "50px" }}
        >
          <button
            className="rounded-pill border border-0"
            style={{
              backgroundColor: "#021efe",
              color: "white",
              padding: "14px 35px",
            }}
            onClick={() => setStatus("New")}
          >
            New
          </button>
          <button
            className="rounded-pill border border-0"
            style={{
              backgroundColor: "#ecdb0d",
              color: "white",
              padding: "14px 35px",
            }}
            onClick={() => setStatus("In Progress")}
          >
            In Progress
          </button>
          <button
            className="rounded-pill border border-0"
            style={{
              backgroundColor: "#24fe02",
              color: "white",
              padding: "14px 35px",
            }}
            onClick={() => setStatus("Completed")}
          >
            Completed
          </button>
          <button
            className="rounded-pill border border-0"
            style={{
              backgroundColor: "#022dfe",
              color: "white",
              padding: "14px 35px",
            }}
            onClick={() => setStatus("active")}
          >
            Active
          </button>
        </div>
      </div>

      <div className="row">{renderCards()}</div>
    </div>
  );
}

export default Card;
