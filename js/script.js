const imagesGrid = document.querySelectorAll('.grid-item')

imagesGrid.forEach((image) =>{
  image.addEventListener('mouseenter', () => {
    const imageDescription = image.querySelector('p')
    imageDescription.classList.add('grid-hover')
  })
  image.addEventListener('mouseleave', () => {
    const imageDescription = image.querySelector('p')
    imageDescription.classList.remove('grid-hover')
  })
})
