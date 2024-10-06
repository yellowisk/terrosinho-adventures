import React from "react";
import { Pin } from "lucide-react";


interface TimePointProps {
    title: string;
    selected: boolean;
    onClick?: () => void;
}

const TimePoint: React.FC<TimePointProps> = ({ title, onClick, selected }) => {
    return (
        <>
            {/* <div className="flex flex-col flex-wrap transform -translate-y-[8vh] w-fit text-center items-center cursor-pointer" onClick={onClick}> */}
            <div className="flex flex-col flex-wrap w-fit h-fit text-center items-center cursor-pointer" onClick={onClick}>
                {/* TODO: Style the text */}
                {/* <Pin size={24} strokeWidth="2px" color={selected ? "#c9550c":"white"} fill={selected ? "#c9550c":"white"} className="transform translate-y-[9vh] rotate-180"transform="translate(-5, 20) rotate(180)"/> */}
                <p className={`md:text-white ${selected? "":"text-sm"} font-bold leading-none transform -translate-y-14`}>{title}</p>
                {/* <p className={`md:text-white ${selected? "":"text-sm"} font-bold leading-none transform translate-y-[10vh]`}>{title}</p> */}
                <Pin size={24} strokeWidth="2px" color={selected ? "#c9550c":"white"} fill={selected ? "#c9550c":"white"} className="transform -translate-y-12"/>
            </div>
        </>
    );
};

export default TimePoint;