import Required from "./Required";

export default function Label({ htmlFor = undefined, required = false, children, className }) {
  return <label htmlFor={ htmlFor } className={ `font-bold text-lg ${className}` }>{ children } <Required required={ required }/></label>
}