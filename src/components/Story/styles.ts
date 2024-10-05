import styled from "styled-components";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  padding: 16px;
  height: 100vh;
  width: 100vw;
  background-color: red;
`;

export const Footer = styled.div`
  height: 12%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: blue;
  align-items: center;
`;

type alignProps ={
  align?: 'left' | 'right';
}

export const FramesContainer = styled.div<alignProps>`
  height: 85%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: end;
  ${props => props.align === 'left' && `
    flex-direction: row-reverse;
    `}
`;

export const Frame = styled.div`
  background-color: yellow;
  width: 30%;
  bottom: 0;
  padding: 8px;
  overflow: hidden;
`;

export const LegendContainer = styled.div`
  height: 100%;
  width: 100%;
  color: yellowgreen;
  padding: 8px;
  margin: 0 16px;
  overflow: hidden;
`;

export const LegendTitle = styled.h1`
  font-size: 24px;
  color: white;
`;

export const LegendDescription = styled.p`
  font-size: 16px;
  color: white;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

export const LeftChevron = styled(ChevronLeft)`
  color: white;
  size: 24px;
  cursor: pointer;
`;

export const RightChevron = styled(ChevronRight)` 
  color: white;
  size: 24px;
  cursor: pointer;
`;