"use client";

import React, { useState } from 'react'

const Header = () => {
    const [activeButton, setActiveButton] = useState("DAY");

    const buttons = [
        {
            title: "DAY",
            action: "#"
        },
        {
            title: "WEEK",
            action: "#"
        },
        {
            title: "MONTH",
            action: "#"
        },
        {
            title: "YEAR",
            action: "#"
        },
    ];

    const handleButtonClick = (title) => {
        setActiveButton(title);
    };

  return (
    <div>
        <div className='flex gap-12'>
            {buttons.map((button, index) => (
            <button
                key={index}
                onClick={() => handleButtonClick(button.title)}
                className={`font-medium py-1 px-4 ${activeButton === button.title ? 'bg-[#747474]' : ''}`}
            >
                {button.title}
            </button>
            ))}
        </div>
    </div>
  )
}

export default Header
