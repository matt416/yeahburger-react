export default function Required({ required = false, label = "Required", className }){
  return required ? <span className={ `bg-yellow-200 text-yellow-900 text-xs font-normal rounded-full px-1.5 py-0.5 ${className}`}>{ label }</span> : <span className="sr-only">Optional</span>
}