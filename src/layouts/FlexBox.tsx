interface Props {
  className?: string;
  direction?: "row" | "col";
  children: React.ReactNode;
}

export default function FlexBox({ className, direction, children }: Props) {
  return (
    <div
      className={`flex ${
        direction === "col" ? "flex-col" : "flex-row"
      } ${className} ${className?.includes("items-") ? "" : "items-center"}`}
    >
      {children}
    </div>
  );
}
