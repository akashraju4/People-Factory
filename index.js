const personForm = document.querySelectorAll('form')[0]

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    
    // for(i = 0; i < personForm.length; i++)
    // {
    //     personForm[i].value = document.createElement()
    //     personForm[i].textContent = personForm[i].value
    //     details.appendChild(personForm[i])
    // }

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = form.age.value
    const birthPlace = form.birthPlace.value


    // const colorDiv = `
    // <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>`

   //details.innerHTML = `<em>${personName}</em>`
    const breakline = document.createElement('br');
    const name = document.createElement('name')
    name.textContent = 'Name:' + personName
    details.appendChild(name)
    details.appendChild(breakline)
    const hair = document.createElement('hair')
    hair.textContent = "Hair Color:"
    const colors = document.createElement('div')
    colors.style = `height: 50px; width: 100px; background-color: ${hairColor}`
    details.appendChild(hair)
    details.appendChild(colors)
    const breakline3 = document.createElement('br');
    const years = document.createElement('years')
    years.textContent = 'Age:' + age
    details.appendChild(years)
    details.appendChild(breakline3)
    const origin = document.createElement('origin')
    const breakline4 = document.createElement('br');
    origin.textContent = 'Birth Place:' + birthPlace
    details.appendChild(origin)
    details.appendChild(breakline4)

    //one way to show type

   // details.innerHTML = `
     //   <ul>
     //   <li>Name: ${personName}</li>
     //   <li>Hair Color: ${colorDiv}</li>
     //   <li>Age: ${age}</li>
     //  <li>Birthplace: ${birthPlace}</li>
     //    </ul>
        //`
    
    
}

personForm.addEventListener('submit', handleSubmit)