import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>(021) 7824262</label>
            <i className="fa fa-envelope"></i>
            <label>hello@erigostore.co.id</label>
          </div>
          <div className="right row RText">
            <label>Erigo-X</label>
            <label>Pop-up Store</label>
            <span>💼&nbsp;</span>
            <label>Career</label>
            <span>📰&nbsp;</span>
            <label>News</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
