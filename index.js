//HW Solution Day 1
const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    colorDiv.style.backgroundColor = hairColor
    return colorDiv
}

const renderListItem = (name, value) => {
  const li = document.createElement('li')
  li.textContent = `${name}: ${value}`
  return li 
}


const renderList = (person) => {
  const list = document.createElement('ul')
  Object.keys(person).map((fieldName, _i, _keys) => {
    let li = renderListItem(fieldName, person[fieldName])
    list.appendChild(li)
  })
  return list
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')
  
  const person = {
      name: form.personName.value,
      hairColor: form.hairColor.value,
      age: form.age.value,
      birthPlace: form.birthPlace.value,
  }

  details.appendChild(renderList(person))
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

