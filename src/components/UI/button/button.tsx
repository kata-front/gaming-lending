import type { FC } from "react";

const Button: FC<{
  children: string;
  leftIconPath?: string;
  rightIconPath?: string;
}> = ({ children, leftIconPath, rightIconPath }) => {
  return (
    <button className='cursor-pointer min-w-39 w-[25%] font-basic bg-yellow-400 p-3 rounded-2xl flex justify-center items-center gap-2'>
      {leftIconPath && <img src={leftIconPath}/>}
      {children}
      {rightIconPath && <img src={rightIconPath}/>}
    </button>
  );
};

export default Button;