import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewManga() {
  const [manga, setManga] = useState({
    title: "",
    readingstatus: "",
    chapter: "",
  });

  const { title } = useParams();

  useEffect(() => {
    loadManga();
  }, []);

  const loadManga = async () => {
    const result = await axios.get("http://localhost:8080/manga/" + title);
    setManga(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Manga Details</h2>

          <div className="card">
            <div className="card-header">
              Details of manga title : {manga.title}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Title: </b>
                  {manga.title}
                </li>
                <li className="list-group-item">
                  <b>Reading Status: </b>
                  {manga.readingstatus}
                </li>
                <li className="list-group-item">
                  <b>Chapter: </b>
                  {manga.chapter}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}