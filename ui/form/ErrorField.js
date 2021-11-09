import camelcase from 'camelcase'

import ErrorIcon  from "public/icon/error.svg"
import AccessibleSvg from 'ui/components/AccessibleSvg';

export default function ErrorField({ name, error, srHidden, className }) {

  /** Use `srHidden = true` when the screen reader message
    is handled elsewhere. Eg. Fieldset legend should have
    the error message in the legend area.
  */

  return <span
    className={ `text-red-500 flex items-center ${className}` }
    id={ camelcase(`error-${name}`) }
    aria-hidden={ srHidden }
  >
    { error.visible
      ? <><AccessibleSvg alt="Error" className="mr-2"><ErrorIcon className="text-red-500 "/></AccessibleSvg>{ error.message }</>
      : null
    }
  </span>
}