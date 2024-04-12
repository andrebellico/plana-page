import Link from 'next/link'
import { Button } from './Button'

export default function Navbar() {
  return (
    <header className=" absolute top-0 z-10 flex w-screen px-[100px] items-center py-6 bg-neutral-100 justify-between">
      <div className="flex gap-14 text-sm">
        <h1>Plana Adhoc</h1>
        <div className="gap-6 flex">
          <h1>Home</h1>
          <h1>Sobre nós</h1>
          <h1>FAQs</h1>
        </div>
      </div>
      <div className="flex gap-4 font-bold">
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
