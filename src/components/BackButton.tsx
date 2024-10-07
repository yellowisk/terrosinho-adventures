import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  onClick?: () => void;
  showText?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, showText }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  // const StyledButton = styled.button`
  //   display: flex;
  //   flex-direction: row;
  //   gap: 4px;
  //   align-items: center;
  //   line-height: 16px;
  //   margin-bottom: 8px;
  // `;

  return (
    // <StyledButton onClick={goBack}>
    //   <ChevronLeft /> <span>Go Back</span>
    // </StyledButton>
    <button onClick={() => goBack()} className="flex flex-row gap-4 items-center line-height-16px mb-8 cursor-pointer pointer-events-auto">
      <ChevronLeft /> 
      { (showText || showText == undefined) && <span>Go Back</span> }
    </button>
  );
};

export default BackButton;
