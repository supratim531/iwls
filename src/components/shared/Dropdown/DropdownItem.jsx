import React from "react";

const DropdownItem = (props) => {
  const { children } = props;

  return (
    <li className="flex cursor-pointer items-center gap-3 bg-[#6a97ea9a] bg-gradient-to-l from-[#6a97ea9a] to-slate-200 px-4 py-2 text-[#415781] shadow-xl hover:text-[#C9A267]">
      {children}
    </li>
  );
};

export default DropdownItem;
