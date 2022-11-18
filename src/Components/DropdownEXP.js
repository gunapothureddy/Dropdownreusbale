import React, { useState } from "react";

import Dropdown from "./common/Dropdown/index";

const options = [
  { label: "Location 1", value: 1 },

  { label: "Location 2", value: 2 },

  { label: "Location 3", value: 3 },

  { label: "Location 4", value: 4 },

  { label: "Location 5", value: 5 },

  { label: "Location 6", value: 6 }
];

const DropdownEXP = () => {
  const [state, setState] = useState({
    SeletedVal: ""
  });
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     SeletedVal: ""
  //   };
  // }

  const handleChange = (e) => {
    var value = e.target.value;

    setState({
      SeletedVal: value
    });
  };

  return (
    <div className="App">
      <Dropdown
        id={"ddl1"}
        name={"ddllocation"}
        options={options}
        title={"Locations"}
        handleChange={handleChange}
        selectedValue={state.SeletedVal}
      />
    </div>
  );
};

export default DropdownEXP;
