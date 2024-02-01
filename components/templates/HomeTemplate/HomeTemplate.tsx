/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import React from 'react';
import { Header, Filter, ArtistCard } from '@/components/molecules';
import { ParsedArtist } from '@/types';
import { initialYear, lastYear } from '@/constants';
import { Separator } from '@/components/ui/separator';

type HomeTemplateProps = {
  artists: ParsedArtist[];
  content: { [key:string]: string }[]
};

export const HomeTemplate = ({ artists, content }: HomeTemplateProps) => {
  const instruments = Array.from(
    new Set(artists.map(artist => artist['Instrument']).filter(Boolean).flat())
  );

  const [slider, setSlider] = React.useState([initialYear, lastYear]);
  const [selectedInstruments, setSelectedInstruments] = React.useState(instruments);

  const filteredArtists = artists.filter((artist: ParsedArtist) =>
    artist['First Appearance'] >= slider[0] &&
    artist['Last Appearance'] <= slider[1] &&
    artist['Instrument'].some((instrument: string) =>
      selectedInstruments.includes(instrument)
    )
  );

  return (
    <>
      <Header content={content}/>
      <Filter
        instruments={instruments}
        slider={slider}
        setSlider={setSlider}
        setSelectedInstruments={setSelectedInstruments}
      />
      <Separator className='my-10' />
      <div className='flex flex-row gap-3 w-full flex-wrap items-center justify-center'>
        {filteredArtists.map((artist) => (
          <ArtistCard
            artist={artist}
            key={`${artist?.['First Name']} ${artist?.['Surname']}`}
          />
        ))}
      </div>
    </>
  );
};
