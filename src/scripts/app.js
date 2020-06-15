// IE polyfills
import 'svgxuse'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

const str = 'hello'
console.log(`${str} world`)

// function openMenu() {
//   const hamburger = document.querySelector('.hamburger')
//   const menu = document.querySelector('.c-navbar-wrap')

//   function openMenu(e) {
//     e.preventDefault()
//     hamburger.classList.toggle('is-active')
//     menu.classList.toggle('c-navbar-wrap--open')

//     if (hamburger.classList.contains('is-active')) {
//       document.addEventListener('click', documentClick)
//     } else {
//       document.removeEventListener('click', documentClick)
//     }
//   }

//   hamburger.addEventListener('click', openMenu)

//   function documentClick(e) {
//     if (
//       !e.target.closest('.c-navbar-wrap') &&
//       !e.target.closest('.hamburger')
//     ) {
//       openMenu(e)
//     }
//   }
// }

// openMenu()
