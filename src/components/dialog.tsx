interface DialogProps {
    text: string;
  }
  
  const Dialog: React.FC<DialogProps> = ({ text }) => {
    return (
      <div className="relative inline-block max-w-xs p-4 text-white font-bold bg-gray-700 border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
        <div className="text-sm">{text}</div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-300"></div>
      </div>
    );
  };
  
  export default Dialog;