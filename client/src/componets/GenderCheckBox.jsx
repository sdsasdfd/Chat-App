import React from "react";

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 ${
            selectedGender === "male" ? "selected" : ""
          } cursor-pointer`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
