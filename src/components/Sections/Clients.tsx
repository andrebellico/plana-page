import { Avatar } from '@nextui-org/react'
import Image from 'next/image'

export default function FeedbackSection() {
  return (
    <div className="lg:px-80  md:px-60 px-12 sm:px-12 flex flex-col text-center justify-center items-center h-screen">
      <div className="">
        <h4 className="text-primary-700 mb-6 ">Testemunhas</h4>
        <h2 className="max-lg:text-4xl text-4xl max-md:text-4xl max-sm:text-2xl text-neutral-950 font-bold">
          O que os nossos clientes <br></br> estão dizendo
        </h2>
      </div>
      <div className="mt-20 flex flex-col gap-4 text-start">
        <Image src={'/star.svg'} width={142} height={22} alt="feedback" />
        <span className="text-3xl max-sm:text-lg text-neutral-950 font-semibold ">
          “Achei que está muito fácil de navegar e com boa experiência. E
          imagens de qualidade.”
        </span>
        <p className="sm:text-lg text-base text-neutral-600">
          <strong>Matt Cannon,</strong> Lead Developer
        </p>
        <div className="flex gap-4 items-center">
          <Avatar
            isBordered
            size="lg"
            color="warning"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <Avatar
            size="lg"
            isBordered
            color="default"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
          <Avatar
            isBordered
            size="lg"
            color="default"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </div>
      </div>
    </div>
  )
}
