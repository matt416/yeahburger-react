import clsx from 'clsx'
import camelcase from 'camelcase'

import { useFormikContext } from 'formik';
import { announce } from 'ui/form/LiveAnnouncer';
import { useEffect } from 'react';
import ErrorIcon  from "public/icon/error.svg"
import AccessibleSvg from 'ui/components/AccessibleSvg';

export default function ErrorField({ showError, error, name, srHidden, className }) {
  // Set `srHidden` when the screen reader message is handled elsewhere. Eg. Fieldset legend should have the error message in the legend area.



  // Trigger to aria-live container to announce error
  // useEffect(() => {
  //   if (touched && error) {
  //     announce(error, "assertive")
  //   }
  // }, [touched, error])

  return <span
    className={ clsx('text-red-500 flex items-center', className) }
    id={camelcase(`error-${name}`)}
    aria-hidden={ srHidden }
  >
    { showError
      ? <><AccessibleSvg alt="Error" className="mr-2"><ErrorIcon className="text-red-500 "/></AccessibleSvg>{ error }</>
      : null
    }
  </span>
}