

const Container = ({className,children}) => {
  return (
    <div className={`max-w-container m-auto ${className}`}>{children}</div>
  )
}

export default Container