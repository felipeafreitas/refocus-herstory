import Image from 'next/image';

type HeaderProps = {
  content: { [key:string]: string }[]
};

export function Header({ content }: HeaderProps) {
  const about = content[0].About

  return (
    <div className='flex flex-col gap-10 mb-12 justify-center items-center w-10/12'>
      <div className='flex justify-center items-center w-full sm:w-[354px]'>
      <Image
        src="/logo.png"
        alt="Refocus Herstory"
        width={1331}
        height={286}
      />
      </div>
      <div>
        <h2 className='text-2xl font-semibold	'>Über das Projekt</h2>
        <p>{about}</p>
      </div>
    </div>
  )
}
