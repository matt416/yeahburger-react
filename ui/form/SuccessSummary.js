import { forwardRef, useEffect, useRef, useState } from "react"
import { useFormikContext } from "formik";
import Link from "next/link"
import AccessibleSvg from "ui/components/AccessibleSvg";
import SuccessIcon  from "public/icon/valid.svg"
import Head from "next/head"
import { ref } from "yup";
export default function SuccessSummary({ isSuccess }) {

  const { resetForm } = useFormikContext()
  const ref = useRef()
  useEffect(() => {
    if (isSuccess) {
      ref.current.focus()
      resetForm()
    }
  }, [resetForm, isSuccess])


  return isSuccess
    ? <div style={{ scrollMarginTop: '2rem' }} className="bg-green-100 text-green-900 p-4 rounded-xl">

      <h2 className="flex items-center font-bold text-md mb-2" tabIndex="-1" ref={ ref } >
        <AccessibleSvg alt={ false } className="mr-2"><SuccessIcon className="text-white "/></AccessibleSvg>
          Single combo added to your order
      </h2>
      <ul>
        <li><a href="#cart" className="underline">Go to checkout (1 item in order)</a></li>
        <li><Link href="/#menu"><a className="underline">Browse our menu</a></Link></li>
      </ul>
      </div>
    : null
}
