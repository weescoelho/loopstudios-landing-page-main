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

// Menu mobile

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const iconMenuButton = document.querySelector('[data-menu="button"] img')

function openMenu(event){
  menuList.classList.toggle('active')
  menuButton.classList.toggle('active')
}
menuButton.addEventListener('click', openMenu);

