interface CardProps {
    text: string;
    image?: string;
    onClick?: () => void;
  }

const CardGame: React.FC<CardProps> = ({ text, onClick, image }) => {
    return (
      <div 
        className="p-2 flex flex-col items-center justify-center h-fit w-60 bg-white/10 hover:bg-gradient-to-br rounded-xl shadow-lg cursor-pointer hover:translate-y-1 transform transition-all duration-300 ease-in-out"
        onClick={onClick}
      >
        <img src={image} className="w-full aspect-[4/3] object-cover rounded-lg" />
        <div className="flex flex-col justify-center">
          <div className="text-center text-white text-2xl font-extrabold mb-1">Level {text}</div>
          {/* <div className="text-center text-white text-4xl font-extrabold">{text}</div> */}
        </div>
      </div>
    );
  }

export { CardGame };