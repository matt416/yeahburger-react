import { SSRProvider } from "@react-aria/ssr"

export default function Layout({ children }){
  return (
    <SSRProvider>
      { children }
    </SSRProvider>
  )
}