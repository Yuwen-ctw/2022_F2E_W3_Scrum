function getDraggingStyle(style, isDragging) {
  const draggingStyle = isDragging
    ? {
        margin: '0 0 0 150px',
        scale: '0.8',
        opacity: '0.75',
        outline: '3px solid #473438',
      }
    : {}
  return { ...style, ...draggingStyle }
}

export default getDraggingStyle
