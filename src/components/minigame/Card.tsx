import { LucideIcon } from 'lucide-react'; // Import the LucideIcon type

interface CardProps {
  text: string; // Text to display on the card
  icon: LucideIcon; // Icon prop of type LucideIcon
}

const Card: React.FC<CardProps> = ({ text, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center h-20 w-36 bg-white rounded-lg shadow-lg cursor-pointer">
        <Icon className="w-8 h-8 text-blue-500" />
        <div className="mt-2 text-center text-black">{text}</div>
    </div>
  );
}

export default Card;
