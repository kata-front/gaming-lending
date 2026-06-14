import type { FC } from "react";

const Button: FC<{
  children: string;
  leftIconPath?: string;
  rightIconPath?: string;
}> = ({ children, leftIconPath, rightIconPath }) => {
  return (
    <button className='min-w-39 w-[25%] font-basic bg-yellow-400 p-3 rounded-2xl flex justify-center items-center gap-2'>
      {leftIconPath}
      {children}
      {rightIconPath}
    </button>
  );
};

export default Button;