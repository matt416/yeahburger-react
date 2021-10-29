import Image from "next/image"
import Logo  from "public/img/yeahburger-logo.svg"
import AccessibleSvg from "ui/components/AccessibleSvg"
import Layout from "ui/layout/Layout"
// const MainMenu = [
//   { label: "Menu", href: "#menu" },
//   { label: "Combos", href: "#combos" },
//   { label: "Location", href: "#location" }
// ]

export default function Index(){

  return (
    <Layout>
      <header className="bg-black text-white">
        <a href="#maincontent" className="skipnav bg-blue-600 rounded text-white">Skip to content</a>
      <div className="max-w-screen-md w-full flex-wrap justify-between flex flex-col sm:flex-row mx-auto items-center p-4">
        {/* <Image src="/img/yeahburger-logo.svg" width="156" height="40" role="img" alt="Yeah Burger" /> */}
        <AccessibleSvg alt="Yeah Burger"><Logo/></AccessibleSvg>
        <nav aria-label="Main menu">
          <ul className="flex space-y-2 sm:space-y-0 sm:space-x-4 items-center flex-col sm:flex-row">
            <li><a href="#menu" className="px-3 py-2 rounded-md">Menu</a></li>
            <li><a href="#combos" className="px-3 py-2 rounded-md">Combos</a></li>
            <li><a href="#location" className="px-3 py-2 rounded-md">Location</a></li>
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
    <main className="w-full mx-auto" tabIndex="-1" id="maincontent">
      <section
        className="w-full bg-black relative overflow-hidden bg-cover px-4"
        style={{
          backgroundImage: "url('/img/yeah-burger-banner.jpg')",
          backgroundPosition: "20% 50%"
        }}>
        <h1 className="sr-only">Yeah Burger</h1>
        <div className="absolute inset-0 bg-black z-0 opacity-70"></div>
          <div className="text-white max-w-sm sm:max-w-screen-md mx-auto min-h-50vh items-center relative z-10 grid sm:grid-cols-2 gap-6 my-auto">
            <div className="space-y-4 col-start-2">
            <p className="text-5xl font-bold">Your new favourite burger</p>
            <p className="text-2xl">Now open until 11pm</p>
            </div>
        </div>
      </section>

      <section className="bg-beige-100 w-override" id="menu" tabIndex="-1">

        <div className="max-w-sm sm:max-w-screen-md px-4 w-full mx-auto py-12 space-y-6">
          {/** using section as it has no implict role, but can receive one with a label */}
        <div className="flex-col sm:flex-row flex justify-between items-center">
          <h2 className="text-4xl font-bold mb-4 sm:mb-0">Our menu</h2>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">

            <div className="bg-white rounded-xl h-full overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <Image layout="fill" src="/img/beef-burger@3x.png" className="object-cover" alt="Our delicious beef burger with pickles, onions, tomato, cheese, and bacon" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Beef Burgers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum quam ac tristique tincidunt.</p>

                <ul className="w-full space-y-3">
                  <li>
                    <button className="flex justify-between items-center w-full">
                      <span className="underline">Yeah Burger</span>
                      <span className="font-bold">$9</span>
                    </button>
                  </li><li>
                    <button className="flex justify-between items-center w-full">
                      <span className="underline">Double Yeah Burger</span>
                      <span className="font-bold">$12</span>
                    </button>
                  </li><li>
                    <button className="flex justify-between items-center w-full">
                      <span className="underline">Mini Yeah Burger</span>
                      <span className="font-bold">$6</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl h-full overflow-hidden">

              <div className="aspect-w-16 aspect-h-9">
                <Image layout="fill" src="/img/plant-burger@3x.png" className="object-cover" alt="Our refreshing plant burger, with lettuce, tomato, and cheese" />
              </div>

              <div className="p-6 space-y-4">

                <h3 className="text-xl font-bold">Plant Burgers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum quam ac tristique tincidunt.</p>

                <ul className="w-full space-y-3">
                  <li>
                    <button className="flex justify-between items-center w-full">
                      <span className="underline">Yeah Plant</span>
                      <span className="font-bold">$9</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex justify-between items-center w-full">
                      <span className="underline">Double Yeah Plant</span>
                      <span className="font-bold">$12</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex justify-between items-center w-full">
                      <span className="underline">Mini Yeah Plant</span>
                      <span className="font-bold">$6</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl space-y-4 h-full">
              <h3 className="text-xl font-bold">Sides</h3>
              <ul className="w-full space-y-3">
                <li>
                  <button className="flex justify-between items-center w-full">
                    <span className="underline">Fries</span>
                    <span className="font-bold">$3</span>
                  </button>
                </li>
                <li>
                  <button className="flex justify-between items-center w-full">
                    <span className="underline">Onion rings</span>
                    <span className="font-bold">$3</span>
                  </button>
                </li>
                <li>
                  <button className="flex justify-between items-center w-full">
                    <span className="underline">Poutine</span>
                    <span className="font-bold">$4</span>
                  </button>
                </li>
                <li>
                  <button className="flex justify-between items-center w-full">
                    <span className="underline">Salad</span>
                    <span className="font-bold">$3</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-bold">Drinks</h3>
              <ul className="w-full space-y-3">
                <li>
                  <button className="flex justify-between items-center w-full">
                    <span className="underline">Pop</span>
                    <span className="font-bold">$1</span>
                  </button>
                </li>
                <li>
                  <button className="flex justify-between items-center w-full">
                    <span className="underline">Juice</span>
                    <span className="font-bold">$1</span>
                  </button>
                </li>
                <li>
                  <button className="flex justify-between items-center w-full">
                    <span className="underline">Water</span>
                    <span className="font-bold">$1</span>
                  </button>
                </li>
              </ul>
          </div>
        </div>
        </div>
      </section>

      <section className="bg-black w-override" id="combos" tabIndex="-1">
        <div className="max-w-sm sm:max-w-screen-lg px-4 w-full mx-auto py-12 space-y-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Combo specials</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl h-full flex flex-col">

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Single Combo</h3>
                <Image width="40" height="40" src="/img/single-burger@3x.png" alt=""/>
              </div>
              {/** Icon */}
              <p className="sr-only">This combo includes</p>

              <ul className="pt-2 space-y-2">
                <li>Yeah Burger or Plant</li>
                <li>Any regular side</li>
                <li>Any drink</li>
              </ul>

              <div className="grid gap-2 mt-auto pt-4 grid-cols-1-2">
                <span className="text-xl border-gray-200 border rounded-md min-h-10 px-3 py-1 flex items-center justify-center font-bold">$11</span>
                <button className="bg-black rounded-md text-white min-h-10 px-3 py-1 flex items-center justify-center">Add to order <span className="sr-only">, single combo</span></button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl h-full flex flex-col">

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Double Combo</h3>
                <Image width="40" height="40" src="/img/double-burger@3x.png" alt=""/>
              </div>
              {/** Icon */}
              <p className="sr-only">This combo includes</p>
              <ul className="pt-2 space-y-2">
                <li>Double Yeah Burger or Plant</li>
                <li>Any regular side</li>
                <li>Any drink</li>
              </ul>

              <div className="grid gap-2 mt-auto pt-4 grid-cols-1-2">
                <span className="text-xl border-gray-200 border rounded-md min-h-10 px-3 py-1 flex items-center justify-center font-bold">$14</span>
                <button className="bg-black rounded-md text-white min-h-10 px-3 py-1 flex items-center justify-center">Add to order <span className="sr-only">, double combo</span></button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl h-full flex flex-col">

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Mini Combo</h3>
                <Image width="40" height="40" src="/img/mini-burger@3x.png" alt=""/>

              </div>

              {/** Icon */}
              <p className="sr-only">This combo includes</p>
              <ul className="pt-2 space-y-2">
                <li>Mini Yeah Burger or Plant</li>
                <li>Any regular side</li>
                <li>Any drink</li>
              </ul>

              <div className="grid gap-2 mt-auto pt-4 grid-cols-1-2">
                <span className="text-xl border-gray-200 border rounded-md min-h-10 px-3 py-1 flex items-center justify-center font-bold">$8</span>
                <button className="bg-black rounded-md text-white min-h-10 px-3 py-1 flex items-center justify-center">Add to order <span className="sr-only">, mini combo</span></button>
              </div>
            </div>
            <div className="hidden sm:block md:hidden p-6 rounded-xl h-full bg-white bg-opacity-10" aria-hidden="true">

            </div>
          </div>

        </div>
      </section>

      <section className="max-w-sm py-12 space-y-6 w-full px-4 sm:max-w-screen-lg mx-auto" id="location" tabIndex="-1">

        <h2 className="text-4xl font-bold text-center mb-8">Location and hours</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="sr-only">Location</h3>
            <address className="not-italic mb-6">
              <dl>
                <dt className="sr-only">Address</dt>
                <dd className="mb-4">
                  188 Burger Blvd<br/>
                  Toronto, Ontario<br/>
                  A1Y 4T6
                </dd>

                <dt className="sr-only">Phone</dt>
                <dd>416-555-1866</dd>

                <dt className="sr-only">Email</dt>
                <dd>info@yeahburger.test</dd>
              </dl>
            </address>

            <div>
              <h3 className="text-lg font-bold">Our hours</h3>
              <p>Open every day for delivery and pickup from 12pm to 11pm</p>
            </div>
          </div>

          <div>
            <h3 className="sr-only">Map and directions</h3>
            {/**  Map */ }
            <a href="#" className="relative aspect-w-16 aspect-h-9 block rounded-xl overflow-hidden ">
              <Image layout="fill" src="/img/location-map@2x.png" className="object-cover"  alt="Directions to our location on Google Maps" />
            </a>
          </div>
        </div>
      </section>

    </main>
    <footer className=" mx-auto  flex-row sm:flex-col flex items-center justify-between w-full ">
        <h2 className="sr-only">Footer</h2>

        <nav aria-label="footer" className="w-full grid grid-cols-2 sm:grid-cols-none sm:grid-rows-2 sm:grid-flow-row">
          <ul className="flex items-center py-4 flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 sm:justify-center">
            <li><a href="#menu" className="px-3 py-2 rounded-md">Menu</a></li>
            <li><a href="#combos" className="px-3 py-2 rounded-md">Combos</a></li>
            <li><a href="#location" className="px-3 py-2 rounded-md">Location</a></li>
            <li>
              <a href="#" className="px-4 py-1 min-h-10 bg-black text-white rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"  aria-label="Shopping bag icon" aria-hidden="true"  role="img" width="24" height="24" focusable="false" className="mr-1 text-white" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 7.75h-2.75v-1C16.75 4.13 14.62 2 12 2S7.25 4.13 7.25 6.75v1H4.5c-.28 0-.5.22-.5.5v11.5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.25c0-.28-.22-.5-.5-.5zm-10.75-1c0-1.79 1.46-3.25 3.25-3.25s3.25 1.46 3.25 3.25v1h-6.5v-1zm-.75 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                <span className="px-1">Your order</span>
              </a>
            </li>
          </ul>

          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center sm:space-x-4 w-full sm:justify-center py-4 sm:border-t sm:border-gray-100">
            <li><a href="#">Site map</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Terms &amp; privacy</a></li>
          </ul>
        </nav>
    </footer>
    </Layout>
)}