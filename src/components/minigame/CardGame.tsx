interface CardProps {
    text: string;
    image?: string;
    onClick?: () => void;
  }

const CardGame: React.FC<CardProps> = ({ text, onClick, image }) => {
    return (
      <div 
        className="flex flex-col items-center justify-center h-48 w-48 bg-white rounded-lg shadow-lg cursor-pointer hover:translate-y-1 transform transition duration-300 ease-in-out" 
        onClick={onClick}
      >
        <img src={image} className="w-24 h-24 rounded-full" />
        <div className="mt-2 text-center text-black text-2xl">{text}</div>
      </div>
    );
  }

export { CardGame };