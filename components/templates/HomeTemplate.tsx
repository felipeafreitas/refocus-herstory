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
import Image from 'next/image';
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
import React from 'react';

type HomeTemplateProps = {
  artists: {
    imageUrl: string;
    artistName: string;
    description: string;
    instrument: string;
    activeYears: string;
  }[];
  instruments: string[];
};

const HomeTemplate = ({artists, instruments}: HomeTemplateProps) => {
  const [slider, setSlider] = React.useState([1900, 2000]);

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
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between w-full'>
          <span>{slider[0]}</span>
          <span>{slider[1]}</span>
        </div>
        <Slider defaultValue={slider} onValueChange={(v) => setSlider(v)} min={1900} max={2000}/>
        <div>
          {instruments.map((instrument) => (
            <Toggle key={instrument}>{instrument}</Toggle>
          ))}
        </div>
      </div>
      <Separator className='my-10' />
      <div className='flex flex-col gap-3 w-full'>
        {artists.map(({activeYears, description, artistName, imageUrl, instrument}) => (
          <Card key={artistName} className='p-4'>
            <CardHeader>
              <CardTitle>{artistName}</CardTitle>
              <CardDescription>{activeYears}</CardDescription>
            </CardHeader>
            <CardContent className='flex items-center gap-5'>
              <img
                src={imageUrl}
                alt=''
                className='rounded-full object-cover'
                width={200}
              />
              <div>
                <ul>
                  <li>{instrument}</li>
                  <li>{description}</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Sheet key={'right'}>
                <SheetTrigger asChild>
                  <Button variant='outline'>See more</Button>
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
