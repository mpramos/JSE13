// Promise

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
    //   const skills = []
      if (skills.includes('Node')) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))



    fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
        // getting the data
        console.log(data)
    })
    .catch(error => console.error(error)) // handling error if something wrong happens
    
    const url = 'https://restcountries.com/v2/all' // countries api
    const fetchData = async () => {
        try {
            const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()