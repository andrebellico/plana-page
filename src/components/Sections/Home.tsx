import Image from 'next/image'
import { Button } from '../Button'
import Link from 'next/link'
import NavBarLinks from '../NavbarLinks'

export default function Home() {
  return (
    <div id="Home" className="relative w-full h-[97vh] overflow-hidden">
      <NavBarLinks />
      <Image
        src={'/home.svg'}
        objectFit="cover"
        alt="home"
        className="absolute top-0 left-0 w-full  h-[95vh] "
        layout="fill"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
        <div className="gap-6 flex flex-col items-center lg:px-60 md:px-16 sm:px-6 px-6">
          <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl  text-primary-700 font-bold">
            Torne o processo<br></br> mais simples
          </h1>
          <span className=" text-sm">
            Use a nossa tecnologia para transformar sua ideia em realidade,{' '}
            <br></br>sem sair do conforto da sua casa.
          </span>
          <div>
            <Button className="bg-green-600 hover:bg-green-500 text-white">
              <Link
                href={`https://wa.me/553584074351`}
                target="_blank"
                rel="noreferrer"
              >
                Começar agora!
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
