import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  let data = useSelector((state) => state.counter.value);
  return <div>Hello {data}</div>;
};

export default Header;
