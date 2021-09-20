import React, { useState } from "react";
import Content from "./Content";

const Items = (props) => {
  const [tabs, setTabs] = useState([
    "all",
    "grocery",
    "entertainment",
    "electronics",
    "personal",
  ]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [list, setList] = useState([
    ["Item from all"],
    ["Items from grocery"],
    ["Items from entertainment"],
    ["Items from electronics"],
    ["Items from personal"],
  ]);
  const setTab = (item) => {
    setSelectedTab(item);
    console.log(selectedTab);
  };
  return (
    <div className="col-7">
      {tabs.map((item, i) => {
        return (
          <button className="btn btn-primary" onClick={() => setTab(i)}>
            {item}
          </button>
        );
      })}

      <Content list={list[selectedTab]} />
    </div>
  );
};

export default Items;
