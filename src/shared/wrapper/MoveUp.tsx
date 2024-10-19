import { ReactNode } from "react";


export const MoveUp = ({ children }: { children: ReactNode }) => {
    return (
      <div className="-mt-44 pt-44 bg-black  relative overflow-hidden">
        {children}
      </div>
    );
  };