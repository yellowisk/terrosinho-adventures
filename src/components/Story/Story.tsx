import React, { useState } from "react";
import { Story } from "../../types/story";
import Button from "../Button";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import * as S from "./styles";
type StoryCoverProps = {
  story: Story;
};

const StoryCover: React.FC<StoryCoverProps> = ({ story }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div onClick={handleClick}>
        <img alt="" src={story.cover} />
        <span>{story.title}</span>
      </div>
      {isOpen && (
        <S.Container>
          <S.FramesContainer>
            <S.Frame>
              aslifjlaisj
            </S.Frame>
          </S.FramesContainer>
          <S.Footer>
            <S.LeftChevron className="" />
            <S.LegendContainer>
              <S.LegendTitle>{story.title}</S.LegendTitle>
              <S.LegendDescription>skudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsdskudhsiudhiuchsd</S.LegendDescription>
            </S.LegendContainer>
            <S.RightChevron />
          </S.Footer>
        </S.Container>
      )}
    </>
  );
};

export default StoryCover;
