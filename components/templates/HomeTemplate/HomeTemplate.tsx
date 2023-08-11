/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { Separator } from '../../ui/separator';
import React from 'react';
import Header from '@/components/molecules/Header/Header';
import Filter from '@/components/molecules/Filter/Filter';
import ArtistCard from '@/components/molecules/Card';
import { Artist } from '@/lib/types';

type HomeTemplateProps = {
  artists: Artist[];
};

const HomeTemplate = ({ artists }: HomeTemplateProps) => {
  const instruments = Array.from(new Set(artists.map(artist => artist['Instrument']).filter(Boolean).flat()));

  const [slider, setSlider] = React.useState([1900, new Date().getFullYear()]);
  const [selectedInstruments, setSelectedInstruments] = React.useState(instruments);

  const filteredArtists = artists.filter((artist: Artist) => {
    return (
      artist['First Appearance'] >= slider[0] &&
      artist['Last Appearance'] <= slider[1] &&
      artist['Instrument'].some((instrument: string) =>
        selectedInstruments.includes(instrument)
      )
    );
  });

  return (
    <>
      <Header />
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

export default HomeTemplate;
