import { useQuery } from "react-query"

const req = new Request(
  "https://api.github.com/repos/sciencefidelity/Nova-Astro"
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

export const Example = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(req).then(res => res.json())
  )

  if (isLoading) return <div>Loading...</div>
  let errorMessage = "An unknown error has occurred"
  if (error instanceof Error) {
    errorMessage = `An error has occurred: ${error.message}`
  }
  if (error) return <div>{errorMessage}</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
