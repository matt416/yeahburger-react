import clsx from "clsx"

export default function TextInputElement({ field, meta, ...props }) {
  return <input
    className={ clsx("border border-gray-300 rounded-md px-3 py-2") }
    {...field}
    {...props}
    id={props.name}
    required=""
    aria-required={props.required}
    aria-describedby={`error-${props.name}`} // Should become {aria-errormessage} when better supported
    aria-invalid={!!meta.touched && !!meta.error}
  />
}