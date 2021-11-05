import { SSRProvider } from "@react-aria/ssr"
import LiveAnnouncer from "ui/form/LiveAnnouncer"

export default function Layout({ children }){
  return (
    <>
      <LiveAnnouncer />

      <SSRProvider>
        { children }
      </SSRProvider>
    </>
  )
}