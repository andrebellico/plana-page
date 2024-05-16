import { Button } from '../Button'
import Link from 'next/link'
import NavBarLinks from '../NavbarLinks'
import ImageComponent from '../ImgComponent'

export default function Home() {
  const imageSrc = '/home.svg'

  return (
    <div id="Home" className="relative w-full h-[97vh] overflow-hidden">
      <NavBarLinks />
      <ImageComponent src={imageSrc} />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
        <div className="gap-6 flex flex-col items-center lg:px-60 md:px-16 sm:px-6 px-6">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl  text-primary-700 font-bold">
            Alcance Novos Patamares de Sucesso com Facilidade
          </h1>
          <span className="text-sm">
            Desbloqueie seu potencial máximo e alcance novos horizontes com
            nosso sistema líder.
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
