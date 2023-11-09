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
    <header className='flex justify-between'>
        <div className='flex gap-12'>
            {buttons.map((button, index) => (
            <button
                key={index}
                onClick={() => handleButtonClick(button.title)}
                className={`font-medium py-2 px-4 ${activeButton === button.title ? 'bg-[#747474] text-white' : ''}`}
            >
                {button.title}
            </button>
            ))}
        </div>
        <button className='bg-[#747474] text-white px-4 py-2'>CREATE SCREENSHOT</button>
    </header>
  )
}

export default Header
