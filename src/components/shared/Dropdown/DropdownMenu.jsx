import { useState } from "react";

import { ChevronDown, ChevronUp } from "react-feather";

const DropdownMenu = (props) => {
  const { children } = props;

  const [drop, setDrop] = useState(false);
  const dropArrow = () => {
    setDrop(!drop);
  };

  return (
    <div
      onClick={dropArrow}
      className="relative flex flex-row items-center justify-between duration-1000 ease-in-out hover:!text-black"
    >
      {children}
      {drop ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </div>
  );
};

export default DropdownMenu;
