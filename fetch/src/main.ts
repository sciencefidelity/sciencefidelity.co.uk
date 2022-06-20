const list = document.getElementById("list") as HTMLLIElement

interface Person {
  avatar: string
  first_name: string
  last_name: string
  email: string
}

fetch("https://reqres.in/api/users")
  .then(res => res.json())
  .then(people => {
    const { data }: { data: Person[] } = people
    console.log(data)
    let str = ""
    for (let i = 0; i <= data.length; i++) {
      if (data[i]) {
        str += `<img src=${data[i].avatar} />`
      }
    }
    list.innerHTML = str
  })
  // .then(data => root.innerHTML = `<pre>${JSON.stringify(data.data, undefined, 2)}</pre>`)
  .catch(error => console.log("ERROR", error.message))

export {}
