import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}

/**
 * Page-width wrapper. Thin convenience component around the .container-vm
 * utility class defined in app/globals.css so section components don't
 * repeat the class name everywhere.
 */
export default function Container({ children, className = "", as = "div" }: ContainerProps) {
  const Tag = as;
  return <Tag className={`container-vm ${className}`.trim()}>{children}</Tag>;
}
