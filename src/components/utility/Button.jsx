import React from 'react'

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.backgroundColor,
  };

  return (
    <a href={props.href} style={buttonStyle} className={`block text-white font-bold text-center text-[0.850rem] py-4`}>{props.content}</a>
  )
}

export default Button
