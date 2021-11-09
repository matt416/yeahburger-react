export default function Required({ required = false, label = "Required", srOnly = false, className, ...props }){

  const classList = srOnly ? 'sr-only' : `bg-yellow-200 text-yellow-900 text-xs font-normal rounded-full px-1.5 py-0.5 ${className}`

  return required ? <span className={ classList } {...props}>{ label }</span> : null
}

//<span className="sr-only">Optional</span>