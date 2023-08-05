/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Separator } from '../ui/separator';
import React, { useEffect } from 'react';
import { Badge } from '../ui/badge';
import ChevronRight from '../ui/ChevronRight';
import { Artist } from '@/app/page';

type HomeTemplateProps = {
  artists: Artist[];
  instruments: string[];
};

const HomeTemplate = ({artists, instruments}: HomeTemplateProps) => {
  const [slider, setSlider] = React.useState([1900, 2000]);
  const [selectedInstruments, setSelectedInstruments] = React.useState(
    instruments
  );

  const filteredArtists = artists.filter((artist: Artist) => {
    return (
      artist.activeYears.from >= slider[0] &&
      artist.activeYears.to <= slider[1] &&
      artist.instrument.some((instrument: string) =>
        selectedInstruments.includes(instrument)
      )
    );
  });

  return (
    <>
      <div className='mb-10'>
        <h1 className='text-4xl	font-bold mb-10 text-center'>Refocus Herstory</h1>
        <p>
          Welcome to "Hidden Jazz Gems: Unveiling Underrated Divas!" Discover
          the mind-blowing talents of underappreciated female jazz artists
          through curated profiles, rare recordings, and mind-boggling live
          performances. Join our rad community and embark on a wicked musical
          journey that'll leave you craving more. Get ready to groove with the
          sickest hidden treasures!
        </p>
      </div>
      <div className='flex flex-col gap-4 w-10/12 items-center mt-6'>
        <Slider
          defaultValue={slider}
          onValueChange={(v) => setSlider(v)}
          min={1900}
          max={2000}
          thumbOne={slider[0]}
          thumbTwo={slider[1]}
        />
        <div className='flex gap-2'>
          {instruments.map((instrument) => (
            <Toggle defaultPressed={true} key={instrument} onClick={
              () => setSelectedInstruments(
                (state) => state.includes(instrument)
                  ? state.filter(i => i !== instrument)
                  : [...state, instrument]
              )
            }>
              {instrument}
            </Toggle>
          ))}
        </div>
      </div>
      <Separator className='my-10' />
      <div className='flex flex-row gap-3 w-full flex-wrap items-center justify-center'>
        {filteredArtists.map(({activeYears, description, artistName, imageUrl, instrument}) => (
          <Card key={artistName} className='p-4 max-w-[430px]'>
            <CardHeader className='flex flex-row justify-between'>
            <img
              src={imageUrl}
              alt=''
              className='rounded-full object-cover w-[100px] h-[100px]'
              width={100}
              height={100}
            />
              <div className='text-right flex flex-col justify-between'>
                <CardTitle>{artistName}</CardTitle>
                <CardDescription>{`Aktive Zeit: ${activeYears.from} -  ${activeYears.to}`}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className='flex items-center gap-5'>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-1'>
                  {instrument.map((instrument) => (
                    <Badge key={instrument} variant='outline'>{instrument}</Badge>
                  ))}
                </div>
                <iframe
                  className="border-radius:12px"
                  src="https://open.spotify.com/embed/track/2XNNxHozxIxvJ6gUnjWjt3?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen;picture-in-picture"
                  loading="lazy"
                />
                <p className='text-ellipsis max-h-max[40px] line-clamp-3'>{description}</p>
              </div>
            </CardContent>
            <CardFooter className='flex flex-row-reverse'>
              <Sheet key={'right'}>
                <SheetTrigger asChild>
                  <Button variant='outline'>MEHR <ChevronRight /></Button>
                </SheetTrigger>
                <SheetContent side={'right'}>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className='grid gap-4 py-4'></div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type='submit'>Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default HomeTemplate;
