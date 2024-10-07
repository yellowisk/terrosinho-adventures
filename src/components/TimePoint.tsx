import React from "react";
import {
  StyledTimePoint,
  StyledPoint,
  StyledPointTitle,
  StyledPointTime,
} from "./TimeLIne.styles";
import { Story } from "../types/story";

interface TimePointProps {
  title: string;
  selected: boolean;
  onClick?: () => void;
  isStart?: Story | undefined;
}

const TimePoint: React.FC<TimePointProps> = ({ title, onClick, selected, isStart }) => {
  return (
    <StyledTimePoint onClick={onClick}>
      <StyledPointTitle selected={selected}>
        <span>{title.includes('Late') ? `${title.split(' ')[0]} ${title.split(' ')[1]}` :title.split(' ')[0]}</span>
      </StyledPointTitle>
      <StyledPoint selected={selected} className={isStart == undefined ? "glow": ""}/>
      <StyledPointTime selected={selected}>
        <span>{title.includes('Late') ? title.split(' ')[2] :title.split(' ')[1]}</span>
      </StyledPointTime>
    </StyledTimePoint>
  );
};

export default TimePoint;
