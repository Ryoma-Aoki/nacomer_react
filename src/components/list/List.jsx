import React, { useState } from "react";
import ListFilter from "./ListFilter";
import ListView from "./ListView";
import "../../styles/list.css";

export default function List(props) {
  const [filteredPeriod, setFilteredPeriod] = useState([]);

  return (
    <div className="list">
      <ListFilter
        filteredPeriod={filteredPeriod}
        setFilteredPeriod={setFilteredPeriod}
        className="listFilter"
      />
      <ListView
        filteredPeriod={filteredPeriod}
        setViewMode={props.setViewMode}
        setHobbyId={props.setHobbyId}
        className="listView"
      />
    </div>
  );
}
