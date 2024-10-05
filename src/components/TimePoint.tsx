import React from "react";
import { Pin } from "lucide-react";


interface TimePointProps {
    title: string;
    selected: boolean;
    onClick: () => void;
}

const TimePoint: React.FC<TimePointProps> = ({ title, onClick, selected }) => {
    return (
        <>
            <div className="flex flex-col flex-wrap transform -translate-y-[8vh] w-fit text-center items-center cursor-pointer" onClick={onClick}>
                {/* TODO: Style the text */}
                <p className={`text-white ${selected? "":"text-sm"} font-bold leading-none mb-2`}>{title}</p>
                <Pin size={24} strokeWidth="2px" color={selected ? "#c9550c":"white"} fill={selected ? "#c9550c":"white"}/>
            </div>
        </>
    );
};

export default TimePoint;