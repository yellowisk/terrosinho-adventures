// Card.tsx
import { LucideIcon } from "lucide-react";

interface CardProps {
    text: string;
    icon: LucideIcon;
    onClick: () => void;
    selected: boolean;
}

export const Card: React.FC<CardProps> = ({ text, icon: Icon, onClick, selected }) => {
    return (
        <div
            className={`border-2 rounded-lg cursor-pointer flex flex-col justify-center items-center p-4
                        ${selected ? 'bg-fuchsia-600 text-white' : 'bg-white text-black'} 
                        hover:bg-fuchsia-500`}
            onClick={onClick}
        >   
            <Icon className={`w-6 h-6 mb-2`} />
            <div className='text-center px-16 font-semibold flex-grow overflow-hidden'>
                <div className='overflow-hidden whitespace-nowrap text-ellipsis line-clamp-2'>
                    {text}
                </div>
            </div>
        </div>
    );
};
