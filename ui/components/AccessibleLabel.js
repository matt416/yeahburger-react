import { isString } from "helpers/isType"

export default function AccessibleLabel({ children, delimiter = "|" }) {

  if (!isString(children)) return <>{ children }</>

  const [label, srLabel] = children.split(delimiter)

  return <>{ label } { srLabel ? <span className="sr-only">{ srLabel }</span> : null }</>
}