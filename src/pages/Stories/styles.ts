import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
`;

export const StoriesContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 16px;

  > div {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      scale: calc(0.5);
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      scale: calc(1);
      transform: translateY(0);
    }
  }
`;