function getDraggingStyle(style, isDragging) {
  const draggingStyle = isDragging
    ? {
        scale: '0.7',
        opacity: '0.75',
        outline: '3px solid #473438',
      }
    : {}
  return { ...style, ...draggingStyle }
}

export default getDraggingStyle
