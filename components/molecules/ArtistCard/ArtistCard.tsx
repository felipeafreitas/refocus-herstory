/* eslint-disable @next/next/no-img-element */


import { ParsedArtist } from '@/types';
import EmbeddedMedia from './EmbeddedMedia';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ChevronRight } from '@/components/ui/ChevronRight';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

type ArtistCardProps = {
  artist: ParsedArtist;
};

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Card className='p-4 max-w-[430px]'>
    <CardHeader className='flex flex-row justify-between'>
    <img
      src={artist['Picture Link']}
      alt={`${artist?.['First Name']} ${artist?.['Surname']}`}
      className='rounded-full object-cover w-[100px] h-[100px]'
      width={100}
      height={100}
    />
      <div className='text-right flex flex-col justify-between'>
        <CardTitle>{`${artist?.['First Name']} ${artist?.['Surname']}`}</CardTitle>
        <CardDescription>{`Aktive Zeit: ${artist?.['First Appearance']} -  ${artist?.['Last Appearance']}`}</CardDescription>
      </div>
    </CardHeader>
    <CardContent className='flex items-center gap-5'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-1'>
          {artist?.['Instrument']?.map((instrument) => (
            <Badge key={instrument} variant='outline'>{instrument}</Badge>
          ))}
        </div>
        <EmbeddedMedia url={artist?.['Media Link']} />
        {artist?.['Description'] && <p className='text-ellipsis max-h-max[40px] line-clamp-3'>{artist?.['Description']}</p>}
      </div>
    </CardContent>
    <CardFooter className='flex flex-row-reverse'>
      <Sheet key={'right'}>
        <SheetTrigger asChild>
          <Button variant='outline' className='border-0 text-white bg-[#F66048] hover:bg-[#c34b39] hover:text-white'>
            MEHR <ChevronRight />
          </Button>
        </SheetTrigger>
        <SheetContent side={'right'} className="overflow-y-auto">
          <SheetHeader className='mb-4'>
            <img
              src={artist?.['Picture Link'] || 'https://placehold.co/600x400'}
              alt={`${artist?.['First Name']} ${artist?.['Surname']}`}
              className='object-cover max-h-[50vh]'
              width={'100%'}
            />
            <div className='px-6'>
              <SheetTitle className=''>{`${artist?.['First Name']} ${artist?.['Surname']}`}</SheetTitle>
              <span className=''>
                {`Aktive Zeit: ${artist?.['First Appearance']} -  ${artist?.['Last Appearance']}`}
              </span>
            </div>
          </SheetHeader>
          <SheetDescription className='px-6 flex flex-col gap-6 mb-6'>
            <div className='flex flex-row gap-1'>
              {artist['Instrument']?.map((instrument) => (
                <Badge key={instrument} variant='outline'>{instrument}</Badge>
              ))}
            </div>
            <div className=''>
              <div>{`Geboren am: ${artist?.['Date of Birth']}`}</div>
              <div>{`Gestorben am: ${artist?.['Date of Death']}`}</div>
            </div>
            {artist?.['Description'] && <p className='text-black'>{artist['Description']}</p>}
            {artist?.['Publications / Albums'] && (
              <div className='text-black'>
                <h2 className='text-xl font-bold'>Publikationen / Alben</h2>
                <div>{artist?.['Publications / Albums']}</div>
              </div>
            )}
            {artist?.['Bands / Formations'] && (
              <div className='text-black'>
                <h2 className='text-xl	font-bold'>Bands / Formationen</h2>
                {artist?.['Bands / Formations']}
              </div>
            )}
            {artist?.['Sources'] && (
              <div className='text-black [&>p>a]:text-[#F66048]'>
                <h2 className='text-xl	font-bold'>Sources</h2>
                {artist?.['Sources']}
              </div>
            )}
          </SheetDescription>
          <SheetFooter className='p-6'>
            <SheetClose asChild>
              <Button type='submit' className='border-0 text-white bg-[#F66048] hover:bg-[#c34b39] hover:text-white'>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </CardFooter>
  </Card>
  )
}
