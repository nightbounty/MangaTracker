import React, { useEffect, useState } from "react";


export default function Home() {

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
            
              <tr>
                <td>One Piece</td>
                <td>Reading</td>
                <td>1069</td>
        
              </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}