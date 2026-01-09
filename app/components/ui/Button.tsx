import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "danger";

export function Button({
  children,
  variant = "primary",
  onClick,
}: {
  children: ReactNode;
  variant?: Variant;
  onClick?: () => void;
}) {
  const base =
    "px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none";

  const styles: Record<Variant, string> = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
