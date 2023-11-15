import React from 'react'

const Toggle = (props) => {
  return (
    <div>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900">{props.text}</span>
            <span className="ms-3 text-sm font-medium text-gray-900">{props.text}</span>
        </label>

    </div>
  )
}

export default Toggle