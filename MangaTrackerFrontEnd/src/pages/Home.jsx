import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [mangas, setMangas] = useState([]);

  
    useEffect(() => {
      loadMangas();
    }, []);
  
    const loadMangas = async () => {
      const result = await axios.get("http://localhost:8080/mangas");
      setMangas(result.data);
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
            </tr>
          </thead>
          <tbody>
                {mangas.map((manga,index) => (
                    <tr>
                        <td>{manga.title}</td>
                        <td>{manga.readingstatus}</td>
                        <td>{manga.chapter}</td>
                      </tr>
                    ))
                }

           
          </tbody>
        </table>
      </div>
    </div>
  );
}