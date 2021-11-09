import ErrorField from "./ErrorField"
import useField from "./useField"

export default function Field({ children, name, type }) {
  const { error } = useField({ name, type })

  return (
    <div className="flex flex-col py-4">
      { children }
      <ErrorField error={ error } name={ name }  className="mt-1" />
    </div>
  )
}