import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [mangas, setMangas] = useState([]);

    const {title} = useParams()
  
    useEffect(() => {
      loadMangas();
    }, []);
  
    const loadMangas = async () => {
      const result = await axios.get("http://localhost:8080/mangas");
      setMangas(result.data);
    };

    const deleteManga = async (title) => {
        await axios.delete("http://localhost:8080/manga/" + title);
        loadMangas();
      };
  
 
  
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">ReadingStatus</th>
              <th scope="col">Chapter</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
                {mangas.map((manga,index) => (
                    <tr>
                        <td>{manga.title}</td>
                        <td>{manga.readingstatus }</td>
                        <td>{manga.chapter}</td>
                        <td>
                            <Link
                                className="btn btn-primary mx-2"
                                to={`/viewmanga/${manga.title}`}
                            >
                                View
                            </Link>
                            <Link
                            className="btn btn-outline-primary mx-2"
                            to={`/editmanga/${manga.title}`}
                            >
                                Edit
                            </Link>
                            <button
                            className="btn btn-danger mx-2"
                            onClick={() => deleteManga(manga.title)}
                            >
                            Delete
                            </button>
                        </td>
                      </tr>
                    ))
                }

           
          </tbody>
        </table>
      </div>
    </div>
  );
}