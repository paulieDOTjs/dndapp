import React from "react";
import "./WallX.css";

function WallX(props) {
  /**************************
   * Takes in wallClass prop
   * applies it to className
   * className changes visual
   * element of "wall"
   **************************/
  return (
    <div className="WallX">
      <div className="WallXMain" />
      <div className="WallXSecondary" />
      <div className="WallXTertiary" />
    </div>
  );
}

export default WallX;
