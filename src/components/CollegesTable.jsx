import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CollegeRow from "./CollegeRow";
import LoadingRow from "./LoadingRow";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

import collegeData from "../../dummyCollegesData";

const CollegesTable = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [visibleColleges, setVisibleColleges] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchColleges = async () => {
      setIsLoading(true);
      try {
        // const response = await fetch("DummycollegesData.json");
        // const data = await response.json();
        setColleges(collegeData);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setVisibleColleges((prevVisibleColleges) => prevVisibleColleges + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedColleges = sortBy
    ? filteredColleges.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : filteredColleges;

  const handleSort = (key) => {
    if (key === "fees") {
      setSortBy(key);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      if (sortBy === key) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortBy(key);
        setSortOrder("asc");
      }
    }
  };

  return (
    <div className="container">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="collegeListWrapper">
        <table>

          <TableHeader
            handleSort={handleSort}
            sortBy={sortBy}
            sortOrder={sortOrder}
          />
          <tbody>
            {isLoading ? (
              <LoadingRow />
            ) : (
              sortedColleges
                .slice(0, visibleColleges)
                .map((college) => (
                  <CollegeRow key={college.Cd} college={college} />
                ))
            )}
          </tbody>
        </table>

        <TableFooter
          isLoading={isLoading}
          visibleColleges={visibleColleges}
          totalCount={colleges.length}
        />
      </div>
    </div>
  );
};

export default CollegesTable;
