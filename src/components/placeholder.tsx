import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceHolderProps = {
    label: string;
    icon?: React.ReactElement<{ className?: string }>;
    button?: React.ReactElement<{ className?: string }>;
}

const PlaceHolder = ({ label, icon = <LucideMessageSquareWarning />, button = <div />}: PlaceHolderProps) => {
    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center">
            {
                // Pas très propre d'après l'api : https://fr.react.dev/reference/react/cloneElement 
                cloneElement(icon, {  
                    className: "w-16 h-16"
                })}
            <h2 className="text-lg text-center">{label}</h2>
            {cloneElement(button, { className: "h-10" })}
        </div>
    )
}

export { PlaceHolder };