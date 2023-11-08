import React from 'react'

const Button = (props) => {
  return (
    <a href={props.href} className={`block bg-[${props.backgroundColor}] text-white font-bold text-center text-[0.950rem] py-4`}>{props.content}</a>
  )
}

export default Button
