interface CardProps {
    text: string;
    image?: string;
    onClick?: () => void;
  }

const CardGame: React.FC<CardProps> = ({ text, onClick, image }) => {
    return (
      <div 
        className="flex flex-col items-center justify-center h-48 w-48 bg-gradient-to-tl from-purple-500  to-purple-700 hover:bg-gradient-to-br rounded-2xl shadow-lg cursor-pointer hover:translate-y-1 transform transition-all duration-300 ease-in-out"
        onClick={onClick}
      >
        <img src={image} className="w-full h-24 rounded-2xl" />
        <div className="text-center text-black text-2xl">{text}</div>
      </div>
    );
  }

export { CardGame };