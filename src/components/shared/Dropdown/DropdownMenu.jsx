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
      className="relative flex flex-row items-center justify-between gap-1 transition-all duration-200 ease-in-out hover:!text-black"
    >
      {children}
      <span className="mt-1">
        {drop ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </span>
    </div>
  );
};

export default DropdownMenu;
