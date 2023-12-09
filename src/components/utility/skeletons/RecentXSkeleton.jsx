import React from "react";
import RecentsContainer from "@/components/utility/Recents/RecentsContainer";
import PropTypes from "prop-types";
import Title from "@/components/utility/Title";
const RecentXSkeleton = (props) => {
  return (
    <div className={props.className}>
      <Title content={props.title} />

      <p className="font-light pb-4">
        {props.description}
      </p>

      <div className="w-full flex flex-col gap-5">
        <RecentsContainer>
          <div className="bg-gray-200 animate-pulse w-16 h-16 flex rounded-xl rounded-tr-none rounded-br-none justify-center text-white items-center"></div>
          <div className="w-3/6 flex items-center h-full border-r-4">
            <div className="h-[1rem] w-[30ch] rounded-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className="w-3/6 flex flex-row justify-between items-center px-8">
            <div className="h-[1rem] w-[8ch] rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-[1rem] w-[8ch] rounded-full bg-gray-200 animate-pulse"></div>
          </div>
        </RecentsContainer>
        <RecentsContainer>
          <div className="bg-gray-200 animate-pulse w-16 h-16 flex rounded-xl rounded-tr-none rounded-br-none justify-center text-white items-center"></div>
          <div className="w-3/6 flex items-center h-full border-r-4">
            <div className="h-[1rem] w-[30ch] rounded-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className="w-3/6 flex flex-row justify-between items-center px-8">
            <div className="h-[1rem] w-[8ch] rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-[1rem] w-[8ch] rounded-full bg-gray-200 animate-pulse"></div>
          </div>
        </RecentsContainer>
        <RecentsContainer>
          <div className="bg-gray-200 animate-pulse w-16 h-16 flex rounded-xl rounded-tr-none rounded-br-none justify-center text-white items-center"></div>
          <div className="w-3/6 flex items-center h-full border-r-4">
            <div className="h-[1rem] w-[30ch] rounded-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className="w-3/6 flex flex-row justify-between items-center px-8">
            <div className="h-[1rem] w-[8ch] rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-[1rem] w-[8ch] rounded-full bg-gray-200 animate-pulse"></div>
          </div>
        </RecentsContainer>
      </div>
    </div>
  );
};

RecentXSkeleton.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default RecentXSkeleton;
