export default function Label({ children, className, ...props }) {
  return <label htmlFor={ props.id || props.name } {...props} className={ className }>{ children }</label>
}