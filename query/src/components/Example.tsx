import { useQuery } from "react-query"

export const Example = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/sciencefidelity/Nova-Astro").then(res =>
      res.json
    )
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  return (
    <div>
      {data?.name && <h1>{data.name}</h1>}
    </div>
  )
}
