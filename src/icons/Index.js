import dynamic from 'next/dynamic'

const Components = {
  Arrow: dynamic(() => import('src/icons/Arrow')),
  X: dynamic(() => import('src/icons/X'))
}

export default function Icon(props){
  return(<>
  {(()=>{

    if (typeof Components[props.type] !== "undefined") {
      return (
        React.createElement(Components[props.type], {
          key: props._uid,
          ...props,
        })
      )
    }

    return React.createElement(
      () => <div>The component {props.type} has not been created yet.</div>,
      { key: props._uid }
    )
  })()}
  </>)
}