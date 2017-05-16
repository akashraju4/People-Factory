//HW Solution Day 1
const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    colorDiv.style.backgroundColor = hairColor
    return colorDiv
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthPlace.value

  details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${renderColor(hairColor).outerHTML}</li>
      <li>Age: ${age}</li>
      <li>Birthplace: ${birthplace}</li>
    </ul>
  `
}

personForm.addEventListener('submit', handleSubmit)
























// const personForm = document.querySelectorAll('form')[0]

// const handleSubmit = (ev) => {
//     ev.preventDefault()
//     const form = ev.target
//     const details = document.querySelector('.details')
    
    
//     // for(i = 0; i < personForm.length; i++)
//     // {
//     //     personForm[i].value = document.createElement()
//     //     personForm[i].textContent = personForm[i].value
//     //     details.appendChild(personForm[i])
//     // }

//      const personName = form.personName.value
//      const hairColor = form.hairColor.value
//      const age = form.age.value
//      const birthPlace = form.birthPlace.value
//      changeElem()


//     // const breakline = document.createElement('br');
//     // const name = document.createElement('name')
//     // name.textContent = 'Name:' + personName
//     // details.appendChild(name)
//     // details.appendChild(breakline)
//     // const hair = document.createElement('hair')
//     // hair.textContent = "Hair Color:"
//     // const colors = document.createElement('div')
//     // colors.style = `height: 50px; width: 100px; background-color: ${hairColor}`
//     // details.appendChild(hair)
//     // details.appendChild(colors)
//     // const breakline3 = document.createElement('br');
//     // const years = document.createElement('years')
//     // years.textContent = 'Age:' + age
//     // details.appendChild(years)
//     // details.appendChild(breakline3)
//     // const origin = document.createElement('origin')
//     // const breakline4 = document.createElement('br');
//     // origin.textContent = 'Birth Place:' + birthPlace
//     // details.appendChild(origin)
//     // details.appendChild(breakline4)  
// }

// personForm.addEventListener('submit', handleSubmit)

// // const getElem = (personForm) => {
// //     document.createElement('newElem')
// //     return getElem
// // }
// // const changeElem = (getElem) => {
// //     getElem.textContent = getElem
// //     details.appendChild(getElem)
// // }

