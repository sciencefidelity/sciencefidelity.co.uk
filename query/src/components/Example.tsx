import { useQuery } from "react-query"

export const Example = () => {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://api.github.com/repos/sciencefidelity/Nova-Astro").then(res =>
  //     res.json()
  //   )
  // )

  // if (isLoading) return <div>Loading...</div>
  // let errorMessage = "An unknown error has occurred"
  // if (error instanceof Error) {
  //   errorMessage = `An error has occurred: ${error.message}`
  // }
  // if (error) return <div>{errorMessage}</div>

  const myRequest = new Request(
    "https://api.github.com/repos/sciencefidelity/Nova-Astro"
  )

  const getGithubData = async () => {
    await fetch(myRequest).then()
      .then(res => res.json())
      .then(data => data)
  }
  const data = getGithubData()
  console.log(data)
  return (
    <div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
      {/* <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <p>Client is loaded</p> */}
    </div>
  )
}
