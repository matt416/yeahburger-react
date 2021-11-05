import clsx from 'clsx'
import Image from 'next/image'

export default function SubmitButton({ label, loadingLabel = "Loading", isLoading, className, ...props }) {

  return (
    <button
      type="submit"
      className={ clsx('h-12 px-6 py-3 bg-primary-2 text-white bg-black rounded-lg flex font-bold text-18 space-x-4', className)}
      // disabled={ isLoading }
      aria-busy={ isLoading }>
      { isLoading ? <span className="mr-3">{ loadingLabel }</span> : label }
      { isLoading && <Image src="/icon/loading.png" className="animate-spin" alt="" width="24" height="24" /> }
    </button>
  )
}