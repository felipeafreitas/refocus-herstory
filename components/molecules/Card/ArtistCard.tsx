/* eslint-disable @next/next/no-img-element */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../../ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../ui/sheet';

import { Badge } from '../../ui/badge';
import ChevronRight from '../../ui/ChevronRight';
import { Artist } from '@/lib/types';

type ArtistCardProps = {
  artist: Artist;
};

function ArtistCard({ artist }: ArtistCardProps) {
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
        <iframe
          className="border-radius:12px"
          src={artist?.['Spotify Link']}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen;picture-in-picture"
          loading="lazy"
        />
        <p className='text-ellipsis max-h-max[40px] line-clamp-3'>{artist?.['Description']}</p>
      </div>
    </CardContent>
    <CardFooter className='flex flex-row-reverse'>
      <Sheet key={'right'}>
        <SheetTrigger asChild>
          <Button variant='outline'>MEHR <ChevronRight /></Button>
        </SheetTrigger>
        <SheetContent side={'right'} className="overflow-y-auto sm:max-w-[50%]">
          <SheetHeader className='mb-4'>
            <img
              src={artist['Picture Link']}
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
            <p className='text-black'>{artist['Description']}</p>
            <div className='text-black'>
              <h2 className='text-xl font-bold'>Publikationen / Alben</h2>
              <div>{artist?.['Publications / Albums']}</div>
            </div>
            <div className='text-black'>
              <h2 className='text-xl	font-bold'>Bands / Formationen</h2>
              <div>{artist?.['Bands / Formations']}</div>
            </div>
          </SheetDescription>
          <SheetFooter className='p-6'>
            <SheetClose asChild>
              <Button type='submit'>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </CardFooter>
  </Card>
  )
}

export default ArtistCard
