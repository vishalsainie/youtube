import React, { useContext } from "react";
import Nav from "./Nav";
import myContext from "../Helper/Context";

const Header = (props) => {
  const user = useContext(myContext)

  return (
    <>
      <div className="bg-yellow-200">{user}</div>
      <Nav num={props.num}/>
    </>
  );
};

export default Header;
