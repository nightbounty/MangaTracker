import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddManga() {
  let navigate = useNavigate();

  const [manga, setManga] = useState({
    title: "",
    readingstatus: "",
    chapter: "",
  });

  const { title, readingstatus, chapter } = manga;

  const onInputChange = (e) => {
    setManga({ ...manga, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/manga", manga);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Manga</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="readingstatus" className="form-label">
                Reading Status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Reading Status"
                name="readingstatus"
                value={readingstatus}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="chapter" className="form-label">
                Chapter
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Chapter"
                name="chapter"
                value={chapter}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}