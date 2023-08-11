import Image from 'next/image';

function Header() {
  const about = 'Welcome to "Hidden Jazz Gems: Unveiling Underrated Divas!" Discover the mind-blowing talents of underappreciated female jazz artists through curated profiles, rare recordings, and mind-boggling live performances. Join our rad community and embark on a wicked musical journey that\'ll leave you craving more. Get ready to groove with the sickest hidden treasures!'

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
        <h2 className='text-2xl font-semibold	'>About the project</h2>
        <p>{about}</p>
      </div>
    </div>
  )
}

export default Header
