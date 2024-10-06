// Card.tsx
import { LucideIcon } from "lucide-react";

interface CardProps {
    text: string;
    icon: LucideIcon;
    onClick: () => void;
    selected: boolean; // New prop to indicate if the card is selected
}

export const Card: React.FC<CardProps> = ({ text, icon: Icon, onClick, selected }) => {
    return (
        <div
            className={`p-4 border-2 rounded-lg cursor-pointer flex flex-col justify-center items-center 
                        ${selected ? 'bg-fuchsia-600 text-white' : 'bg-white text-black'} 
                        hover:bg-fuchsia-200`}
            onClick={onClick}
        >
            <Icon className="w-6 h-6 mb-2" />
            <div className="text-center font-semibold">{text}</div>
        </div>
    );
};
