
import Logo  from "public/img/yeahburger-logo.svg"
import AccessibleSvg from "ui/components/AccessibleSvg"
import Link from "next/link"

export default function Header(){
  return <header className="bg-black text-white">
        <a href="#maincontent" className="global-skipnav bg-blue-600 rounded text-white">Skip to content</a>
      <div className="max-w-screen-md w-full flex-wrap justify-between flex flex-col sm:flex-row mx-auto items-center p-4">
        {/* <Image src="/img/yeahburger-logo.svg" width="156" height="40" role="img" alt="Yeah Burger" /> */}
        <AccessibleSvg href="/" alt="Yeah Burger"><Logo/></AccessibleSvg>
        <nav aria-label="Main menu">
          <ul className="flex space-y-2 sm:space-y-0 sm:space-x-4 items-center flex-col sm:flex-row">
            <li><Link href="/#menu"><a className="px-3 py-2 rounded-md">Menu</a></Link></li>
            <li><Link href="/#combos"><a className="px-3 py-2 rounded-md">Combos</a></Link></li>
            <li><Link href="/#location"><a className="px-3 py-2 rounded-md">Location</a></Link></li>
            <li>
              <a href="#" className="px-4 py-1 min-h-10 bg-white bg-opacity-10 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Shopping bag" aria-hidden="true"  role="img" width="24" height="24" focusable="false" className="mr-1 text-white" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 7.75h-2.75v-1C16.75 4.13 14.62 2 12 2S7.25 4.13 7.25 6.75v1H4.5c-.28 0-.5.22-.5.5v11.5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.25c0-.28-.22-.5-.5-.5zm-10.75-1c0-1.79 1.46-3.25 3.25-3.25s3.25 1.46 3.25 3.25v1h-6.5v-1zm-.75 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                <span className="px-1">Your order</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
}