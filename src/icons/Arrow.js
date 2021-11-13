export default function Arrow({
  width,
  height,
  style = {},
  fill = '#444',
  hover = {
    fill: '',
  },
  className = '',
  classNames = {
    svg: '',
    icon: '',
  },
  direction= 'right',
}={}){

  const [localFill, setLocalFill] = React.useState(fill)

  const rotate = React.useMemo(()=>{
    switch(direction){
      case 'right':
          return 'rotate(0deg)'

      case 'left':
          return 'rotate(180deg)'

      case 'up':
          return 'rotate(-90deg)'

      case 'down':
          return 'rotate(90deg)'
    }
  }, [direction])

  React.useEffect(()=>{
    setLocalFill(fill)
  }, [fill])


  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    style={{
      width: typeof width === 'number' ?`${width}px` :width,
      height: typeof height === 'number' ?`${height}px` :height,
      transform: rotate,
      ...style,
    }}
    className={`${className} ${classNames?.svg}`}
    onMouseOver={()=>{
        if( hover.fill ){
          setLocalFill(hover.fill)
        }
    }}
    onMouseLeave={()=>{
      setLocalFill(fill)
    }}>

      <path className={classNames.icon} fill={localFill} fillRule="evenodd" d="M9.293 6.707a1 1 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L14.586 12 9.293 6.707z"/>

    </svg>
  )
}