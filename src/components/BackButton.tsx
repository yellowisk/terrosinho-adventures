import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    line-height: 16px;
    margin-bottom: 8px;
  `;

  return (
    <StyledButton onClick={goBack}>
      <ChevronLeft /> <span>Go Back</span>
    </StyledButton>
  );
};

export default BackButton;
