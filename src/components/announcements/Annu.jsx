import React from "react";

const Annu = () => {
  const mystyle = {
    width: "100%",
  };

  return (
    <>
      <section className="announc background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src="./images/banner.jpg" alt="" width="100%" height="100%" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annu;
