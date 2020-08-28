import React from "react";
import { PuffLoader } from "react-spinners";

class Loading extends React.Component {
  state = {
    startAnimation: "fadeIn"
  }
  render(){
    return (
      <div
        style={{ background: "rgba(4,4,4)", width: "100vw", height: "100vh" }}
        className= {`animated ${this.state.startAnimation} d-flex align-items-center justify-content-center flex-column`}
      >
        <PuffLoader size={60} color="#b88746" />
      </div>
    );
  }
};

export default Loading;
