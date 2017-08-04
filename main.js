// 3. Dodatkowo włączamy tryb "strict"
'use strict'

// 2. Możemy też deklarować stałe (nie można do nich przypisać).
const activities = [
  {
    id: 3,
    alt: 'Bicycle',
    name: 'Cycling',
    timeSpent: 120
  },
  {
    id: 7,
    alt: 'Swimmer',
    name: 'Swimming',
    timeSpent: 60
  },
  {
    id: 9,
    alt: 'Runners',
    name: 'Running',
    timeSpent: 30
  }
]

const $activities = document.querySelector('.activities')

for (let k in activities) {
  // 1. Używamy `let` aby zadeklarować zmienną o zasięgu blokowym.
  let activity = activities[k]

  let $activity = document.createElement('div')
  $activity.className = 'activity'

  let $img = document.createElement('img')
  $img.classList.add('activity__img')
  $img.width = 250
  $img.height = 250
  $img.alt = activity.alt
  $img.src = `https://xpla.org/ext/lorempixel/250/250/sports/${activity.id}/`

  let $title = document.createElement('h3')
  $title.classList.add('activity__name')
  $title.textContent = activity.name

  let $time = document.createElement('p')
  $time.classList.add('activity__description')
  $time.innerHTML = `Time spent: <strong>${activity.timeSpent} min</strong>`

  let $button = document.createElement('button')
  $button.classList.add('activity__button--paused')
  $button.innerHTML = '&#9654; Start'

  $button.addEventListener('click', function () {
    window.alert(`Starting tracking: ${activity.name}`)
    console.log(activity)
  })

  $activity.appendChild($img)
  $activity.appendChild($title)
  $activity.appendChild($time)
  $activity.appendChild($button)

  $activities.appendChild($activity)
}

// 4. Odwołanie do activity powoduje `ReferenceError`
console.log(activity)
