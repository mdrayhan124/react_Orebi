import React from 'react'

const InputField = ({inputType,placeholder,className}) => {
  return (
    <input type={inputType} placeholder={placeholder} className={`${className} w-[508px] text-[#767676] font-normal text-sm py-[14px] outline-none`} />
  )
}

export default InputField