import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditManga() {
  let navigate = useNavigate();

  const {title} = useParams()

  const [manga, setManga] = useState({
    title: "",
    readingstatus: "",
    chapter: "",
  });

  const { readingstatus, chapter } = manga;

  const onInputChange = (e) => {
    setManga({ ...manga, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadManga();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:8080/manga/" + title, manga);
    navigate("/");
  };
  const loadManga = async () => {
    const result = await axios.get("http://localhost:8080/manga/"+title);
    setManga(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Manga</h2>
          <h2 className="text-center m-4">{title}</h2>
          <form onSubmit={(e) => onSubmit(e)}>
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