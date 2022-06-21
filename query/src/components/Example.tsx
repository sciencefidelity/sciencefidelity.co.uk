import { Fragment,  useQuery } from "react-query"

const req = new Request(
  "https://randomuser.me/api/?nat=es,fi,fr,gb&results=50&seed=science"
)
// async function getGithubStats() {
//   try {
//     const res = await fetch(req)
//     const data = await res.json()
//     return data
//   } catch (error) {
//     console.log("ERROR", error.message)
//   }
// }
// const data = await getGithubStats()

interface Name {
  title: string
  first: string
  last: string
}

interface Location {
  city: string
  country: string
}

interface DOB {
  date: Date
  age: number
}

interface Picture {
  large: string
  medium: string
  thumbnail: string
}

interface Person {
  gender: string
  name: Name
  location: Location
  email: string
  dob: DOB
  nat: string
  picture: Picture
}

const countries = ["ES", "FR", "FI", "GB"]

function sort(people: Person[]) {
  return people.sort((a, b) => {
    const nameA = a.name.last.toUpperCase()
    const nameB = b.name.last.toUpperCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
}

export const Example = () => {
  const { isLoading, error, data } = useQuery("userData", () =>
    fetch(req).then(res => res.json())
  )

  if (isLoading) return <div>Loading...</div>
  let errorMessage = "An unknown error has occurred"
  if (error instanceof Error) {
    errorMessage = `An error has occurred: ${error.message}`
  }
  if (error) return <div>{errorMessage}</div>
  const { results }: { results: Person[] } = data
  const people = sort(results)
  return (
    <div  
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
      }}
    >
      {/* <pre style={{fontSize: "1rem"}}>{JSON.stringify(results[0], undefined, 2)}</pre> */}
      {countries.map((country, idx) => (
        <button key={idx} style={{cursor: "pointer"}}>{country}</button>
      ))}
      {people.map(person => (
        <div 
          key={person.email}
          style={{
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img 
            src={person.picture.large} 
            alt={person.name.first + " " + person.name.last}
            style={{ borderRadius: "100%" }}
          />
          <h1 style={{fontSize: "1rem"}}>
            {person.name.first} {person.name.last}
          </h1>
          <h2 style={{fontSize: "1rem"}}>{person.location.country}</h2>
        </div>
      ))}
    </div>
  )
}
