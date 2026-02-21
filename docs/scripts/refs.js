const images = [
  'r-ref.jpg',
  'r-watermelon.jpg',
  'r-f.png',
  'i-gift.png',
  'i-hug.png',
  'i-shrug.png',
  'g-paws.jpg',
  'i-gift.png',
  'j-badge.png',
  'm-ref.jpeg',
  'm-witch.png',
  'u-hugs.jpg',
]
const selector = '#images'

const selectorElement = document.querySelector(selector)

const fragment = document.createDocumentFragment()

images.forEach(fileName => {
  const li = document.createElement('li')
  const img = document.createElement('img')
  img.src = `../images/${fileName}`
  img.alt = 'ref'
  li.appendChild(img)
  fragment.appendChild(li)
})

selectorElement.appendChild(fragment)
