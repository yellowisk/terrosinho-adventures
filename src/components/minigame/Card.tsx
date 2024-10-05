import { LucideIcon } from 'lucide-react'; // Import the LucideIcon type

interface CardProps {
  text: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ text, icon: Icon, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center h-20 w-36 bg-white rounded-lg shadow-lg cursor-pointer" 
      onClick={onClick}
    >
      <Icon className="w-8 h-8 text-blue-500" />
      <div className="mt-2 text-center text-black">{text}</div>
    </div>
  );
}

export default Card;
