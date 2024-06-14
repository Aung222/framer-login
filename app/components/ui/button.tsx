import clsx from "clsx";

export function Button({
  children,
  color,
  className,
}: {
  children: React.ReactNode;
  color: string;
  className?: string;
}) {
  return (
    <button
      className={clsx("w-full rounded-xl text-white mx-auto py-3", className, {
        "bg-blue-500": color === "primary",
        "bg-gray-500": color === "secondary",
      })}
    >
      {children}
    </button>
  );
}
