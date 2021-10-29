import clsx from 'clsx'

export default function FieldError({ touched, error, ...props }) {

  // Trigger to aria-live container to announce error

  return <span
    className={ clsx('text-red-500', props.className) }
    id={`error-${props.name}`}
  >
    { touched && error ? error : "" }
  </span>
}