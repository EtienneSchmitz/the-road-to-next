import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
    label: string;
};

const SubmitButton = ({ label }: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit">
            {pending ? <LucideLoaderCircle className="h-4 w-4 animate-spin" /> : null}
            {label}
        </Button>
    );
};

export { SubmitButton }; 