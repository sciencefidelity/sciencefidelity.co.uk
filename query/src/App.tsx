import { QueryClient, QueryClientProvider } from "react-query"
// import { ReactQueryDevtools } from "react-query/devtools"
import { Example } from "components/Example"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  )
}
export default App
