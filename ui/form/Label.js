export default function Label({ children, ...props }) {
  return <label htmlFor={props.id || props.name} className="text-lg mb-1">{ children }</label>
}