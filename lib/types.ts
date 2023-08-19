import React, { ReactElement } from 'react';

export interface Artist {
  'First Name': string;
  'Surname': string;
  'Instrument': string[];
  'Picture Link': string;
  'Date of Birth': string;
  'Date of Death': string;
  'Publications / Albums': string;
  'Bands / Formations': string;
  'Description': string;
  'Sources': string;
  'First Appearance': number;
  'Last Appearance': number;
  'Spotify Link': string;
  'Youtube Link': string;
}

export interface ParsedArtist {
  'First Name': string;
  'Surname': string;
  'Instrument': string[];
  'Picture Link': string;
  'Date of Birth': string;
  'Date of Death': string;
  'Publications / Albums': ReactElement | undefined;
  'Bands / Formations': ReactElement | undefined;
  'Description': string;
  'Sources': ReactElement | undefined;
  'First Appearance': number;
  'Last Appearance': number;
  'Spotify Link': string;
  'Youtube Link': string;
}
