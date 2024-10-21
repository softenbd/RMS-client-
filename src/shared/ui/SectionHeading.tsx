import { ReactNode } from "react";

const SectionHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`uppercase text-lg md:text-xl lg:text-2xl font-medium ${className}`}
    >
      {children}
    </h1>
  );
};
export default SectionHeading;
