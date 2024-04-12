import Link from 'next/link'
import { Button } from './Button'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className=" fixed top-0 z-20 flex w-screen px-[100px] items-center py-6 bg-neutral-100 opacity-95 justify-between">
      <div className="flex gap-14 text-sm">
        <Image src={'/logo.svg'} width={96} height={29} alt="logo" />
        <div className="gap-6 flex">
          <h1>Home</h1>
          <h1>Sobre nós</h1>
          <h1>FAQs</h1>
        </div>
      </div>
      <div className="flex gap-4 ">
        <Button variant="secondary">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://plana-adhoc.vercel.app"
          >
            Login
          </Link>
        </Button>
        <Button>Entrar em contato</Button>
      </div>
    </header>
  )
}
