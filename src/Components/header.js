import React from "react";
function Header(Props) {
  return (
    <div>
      <h1>{Props.info}</h1>
      <h2>My number is {Props.myNumber}</h2>
    </div>
  );
}
// export { Header }; //Exporting object from header
export default Header;
