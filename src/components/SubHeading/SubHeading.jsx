import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1 rem" }}>
    <p className="p__comorant" style={{ color: "var(--color-white)" }}>
      {title}
    </p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
