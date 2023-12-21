import React from 'react'

const Filter = ({labelName,children,className,handleFung}) => {
    return (
        <div className='text-[#767676] text-base font-dm'>
            <label htmlFor="">{labelName}</label>
            <select name="" id="" className={`${className} px-1 py-5`} onChange={handleFung}>
                {children}
            </select>
        </div>
    )
}

export default Filter