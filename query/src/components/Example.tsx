import { useState } from "react"
import { useQuery } from "react-query"
import { z } from "zod"
import { Users } from "./Users"

const req = new Request(
  "https://randomuser.me/api/?nat=es,fi,fr,gb&results=50&seed=science"
)

const Person = z.object({
  dob: z.object({
    date: z.date(),
    age: z.number()
  }),
  email: z.string().email(),
  gender: z.string(),
  location: z.object({
    city: z.string(),
    country: z.string()
  }),
  nat: z.string(),
  name: z.object({
    title: z.string(),
    first: z.string(),
    last: z.string()
  }),
  picture: z.object({
    large: z.string().url(),
    medium: z.string().url(),
    thumbnail: z.string().url()
  })
})

// const Results = z.array(Person)
export type Person = z.infer<typeof Person>

function sort(people: Person[]) {
  return people.sort((a, b) => {
    const nameA = a.name.last.toUpperCase()
    const nameB = b.name.last.toUpperCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
}

function nationality(users: Person[], nat: string) {
  return users.filter(u => u.nat === nat)
}

const countries = ["ES", "FR", "FI", "GB"]

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
  // Results.parse(results)
  const initialUsers = sort(results)
  const [users, setUsers] = useState(initialUsers)
  const [currentNat, setCurrentNat] = useState("X")

  function handleFilterUsers(nat: string) {
    setCurrentNat(nat)
    if (nat === "X") {
      setUsers(initialUsers)
    } else {
      setUsers(nationality(initialUsers, nat))
    }
  }

  return (
    <main>
      <ul
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(5, 1fr)",
          placeItems: "center",
          paddingBlock: "2rem"
        }}
      >
        <li>
          <button
            disabled={users.length === initialUsers.length}
            style={{
              cursor: "pointer",
              width: "5rem",
              padding: "0.5rem 1rem"
            }}
            onClick={() => handleFilterUsers("X")}
          >
            X
          </button>
        </li>
        {countries.map((country, idx) => (
          <li key={idx}>
            <button
              disabled={currentNat === country}
              style={{
                cursor: "pointer",
                width: "5rem",
                padding: "0.5rem 1rem"
              }}
              onClick={() => handleFilterUsers(country)}
            >
              {country}
            </button>
          </li>
        ))}
      </ul>
      <Users users={users} />
    </main>
  )
}
