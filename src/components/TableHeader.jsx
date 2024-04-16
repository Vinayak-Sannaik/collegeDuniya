import React from "react";

const TableHeader = ({ handleSort, sortBy, sortOrder }) => {
  return (
    <thead>
            <tr>
              <th>CD Rank</th>
              <th>Colleges</th>
              <th onClick={() => handleSort("fees")}>
                Course Fees{" "}
                {sortBy === "fees" ? (sortOrder === "asc" ? "↑" : "↓") : "↑↓"}
              </th>
              <th>Placements</th>
              <th onClick={() => handleSort("rating")}>
                User Reviews{" "}
                {sortBy === "rating" ? (sortOrder === "asc" ? "↑" : "↓") : "↑↓"}
              </th>

              <th onClick={() => handleSort("ranking")}>
                Ranking{" "}
                {sortBy === "ranking"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : "↑↓"}
              </th>
            </tr>
          </thead>
  );
};

export default TableHeader;