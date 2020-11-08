import React from "react";

const Image = ({ g, t }) => {
  return (
    <div id="grimage">
      {t ? <span>{t}</span> : null}
      <img src={g} alt="Graph" width={320} />
    </div>
  );
};

export default Image;
