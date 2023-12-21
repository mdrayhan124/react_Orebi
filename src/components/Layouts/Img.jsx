import React from 'react'

const Img = ({className,src,alt,imgClassName}) => {
  return (
    <div className={className}>
        <picture>
            <img src={src} alt={alt} className={imgClassName}/>
        </picture>
    </div>
  )
}

export default Img