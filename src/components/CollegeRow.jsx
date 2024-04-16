// CollegeRow.js
import React from "react";

const CollegeRow = ({ college, isLoading }) => {
  return (
    <tr key={college.Cd}>
      <td>
        <span className={college.featured ? "badge" : ""}>
          {college.featured ? "Featured" : ""}
        </span>{" "}
        #<span className="bold">{college.Cd}</span>
      </td>
      <td>
        <a href="#" target="_blank" rel="noopener noreferrer"><span className="boldMax"> {college.name}</span></a>
      </td>
      <td>
        <span className="bold">₹ {college.fees}</span>
        <br />
        <span className="boldMini">BE/B.Tech</span>
        <br /> -1st Year Fees
      </td>
      <td>
        <span className="bold">₹ {college.placement["avg_package"]}</span>
        <br /> Average Package <br />₹{" "}
        <span className="bold">{college.placement["highest_package"]}</span>
        <br /> Highest Package
      </td>
      <td>
        <span className="bold"> 📀 {college.rating}/10</span>
        <br />
        <span className="boldMini">Based on {college.ranking * 79} User Reviews</span>
      </td>
      <td>
        #<span className="bold">{college.ranking}</span>{" "}
        <span className="boldMini">/{college.ranking * 23} in India</span>
      </td>
    </tr>
  );
};

export default CollegeRow;
