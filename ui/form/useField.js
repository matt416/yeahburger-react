import { useFormikContext, useField } from "formik"
import { useEffect, useState } from "react"

export default function useShowError(props) {
  const [field, meta, helper] = useField(props)
  const { submitCount, ...context } = useFormikContext()

  // const [error, setError] = useState({
  //   visible: !!meta.error && submitCount > 0,
  //   message: meta.error
  // })


  const error = {
    visible: !!meta.error && submitCount > 0,
    message: meta.error
  }

  // setError(prevState => ({ ...prevState,
  //   visible: !!meta.error && submitCount > 0,
  //   message: meta.error }))

  const [valid, setValid] = useState()

  useEffect(() => {
    // console.log("touched field", context.dirty)

    setValid(!meta.error && meta.value !== meta.initialValue)
  }, [meta.error, meta.initialValue, meta.value])

  // if (meta.touched) { alert(meta.touched) }
  // const valid = !meta.error && !!meta.touched
  return { field, meta, helper, error, valid }
}
