import clsx from 'clsx'

export const SubmitButton = ({ label, isLoading, className, ...props }) => {
  const classnames = {
    base:'h-12 px-6 py-3 bg-primary-2 text-white bg-black rounded-lg flex font-bold text-18',
  }
  return (
    <button type="submit" className={ clsx(classnames.base, className)} disabled={ isLoading }>
      { isLoading ? 'Loading' : label }
      { isLoading && <img src="/_public/loading.png" className="animate-spin ml-3" alt="" width="24" height="24" /> }
    </button>
  )
}