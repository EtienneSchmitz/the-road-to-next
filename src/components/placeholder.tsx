import { LucideMessageSquareWarning } from "lucide-react";

type PlaceHolderProps = {
  label: string;
  renderIcon?: (className: string) => React.ReactElement;
  renderButton?: (className: string) => React.ReactElement;
};

const PlaceHolder = ({
  label,
  renderIcon = (className) => (
    <LucideMessageSquareWarning className={className} />
  ),
  renderButton = (className) => <div className={className} />,
}: PlaceHolderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {renderIcon("w-16 h-16")}
      <h2 className="text-lg text-center">{label}</h2>
      {renderButton("h-10")}
    </div>
  );
};

export { PlaceHolder };
