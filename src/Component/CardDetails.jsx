import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetails() {
  const { id } = useParams();
  const [wordExplorer, setWordExplorer] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [story, setStory] = useState([]);
  const [active, setActive] = useState("Word Explorer");
  useEffect(() => {
    loadUserData();
  }, [id]);

  const loadUserData = async () => {
    let response = await axios.get(
      `https://mxpertztestapi.onrender.com/api/adventure/${id}`
    );
    setWordExplorer(response.data.Wordexplore);
    setStory(response.data.Storyadvenure.content);
    setQuestions(response.data.Brainquest);
    console.log(response);
    console.log(response.data.Storyadvenure.content);
  };
  console.log("Id is :" + id);

  return (
    <>
      <div className="container">
        <h3 className="fw-bold text-white mt-3">
          <span style={{ color: "#8e22e6" }}>The Lost City of </span>Future
          Earth
        </h3>
        <div className="d-flex justify-content-around align-items-center mt-3">
          <button
            className="btn px-3 py-2 text-white fw-bold shadow-lg rounded-pill"
            style={{
              backgroundColor:
                active === "Word Explorer" ? "#12e6de" : "transparent",
            }}
            onClick={() => setActive("Word Explorer")}
          >
            Word Explorer
          </button>

          <button
            className="btn px-3 py-2 text-white fw-bold shadow-lg rounded-pill"
            style={{
              backgroundColor: active === "Story" ? "#12e6de" : "transparent",
            }}
            onClick={() => setActive("Story")}
          >
            Story Adventure
          </button>

          <button
            className="btn px-3 py-2 text-white fw-bold shadow-lg rounded-pill"
            style={{
              backgroundColor: active === "Quize" ? "#12e6de" : "transparent",
            }}
            onClick={() => setActive("Quize")}
          >
            Brain Quest
          </button>
        </div>

        <div className="container-fluid w-100 mt-3">
          {active === "Word Explorer" && (
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="card w-100 h-100"
                    style={{ backgroundColor: "#40188f" }}
                  >
                    <p className="text-white fw-bold">
                      {wordExplorer[0]?.Storytitle}
                    </p>
                    <p className="text-white">{wordExplorer[0]?.Storyitext}</p>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCBIWgR4PnOBHel8RFCekjNOeWXXR7_IzsQ&s"
                      className="rounded-md img-fluid"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="text-white">
                        Antonyms: {wordExplorer[0]?.Antonyms}
                      </p>
                      <p className="text-white">
                        Synonyms: {wordExplorer[0]?.Synonyms}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="row mb-3">
                    {wordExplorer.slice(0, 5).map((word, index) => (
                      <div key={index} className="col-md-2">
                        <div
                          className="card w-100 h-100 px-0 py-0"
                          style={{ backgroundColor: "#40188f" }}
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCBIWgR4PnOBHel8RFCekjNOeWXXR7_IzsQ&s"
                            className="rounded-md img-fluid"
                            alt=""
                          />
                          <div className="card-body text-white">
                            {word.Storyitext}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row">
                    {wordExplorer.slice(5, 10).map((word, index) => (
                      <div key={index} className="col-md-2">
                        <div
                          className="card w-100 h-100 px-0 py-0"
                          style={{ backgroundColor: "#40188f" }}
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCBIWgR4PnOBHel8RFCekjNOeWXXR7_IzsQ&s"
                            className="rounded-md img-fluid"
                            alt=""
                          />
                          <div className="card-body text-white">
                            {word.Storyitext}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "Story" && (
            <>
              <div className="container-fluid">
                <div className="row">
                  {story.slice(0, 3).map((story, index) => {
                    return (
                      <>
                        <div
                          className="col-md-4 col-sm-6 col-lg-3 mt-3 "
                          key={index}
                        >
                          <div
                            className="card w-100 h-100 shadow-md rounded-md"
                            style={{ backgroundColor: "#40188f" }}
                          >
                            <img
                              src="https://media.istockphoto.com/id/1326978045/photo/lonely-big-tree-growing-up-on-ancient-books-like-a-painting-in-literature.jpg?s=612x612&w=0&k=20&c=bedRj10WevmGKOltdrCbo5FVRBRE1c9LI5pj_E3m4AE="
                              className="card-img-top"
                              alt="story Img"
                              width={150}
                              height={200}
                            />
                            <div className="card-body">
                              <p className="text-white">
                                {story.Paragraph[index]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          )}
          {active === "Quize" && (
            <>
              {
                <div className="container mt-4">
                  <div className="row">
                    {questions.map((qa, index) => (
                      <div key={index} className="col-md-6 mb-4">
                        <div
                          className="card h-100"
                          style={{ backgroundColor: "#40188f"}}
                        >
                          <div className="card-body">
                            <h5 className="card-title text-white">{qa.Question}</h5> <br />
                            {qa.Option.map((option, index) => {
                              return (
                                <>
                                  <p key={index} className="text-white" >
                                    <span>{index+1}</span> {option}
                                  </p>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default CardDetails;
