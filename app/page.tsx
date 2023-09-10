/* eslint-disable react/no-children-prop */
import { Artist, ParsedArtist } from '@/types';
import { HomeTemplate } from '@/components/templates'
import { getContent } from '@/services';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

export default async function Home() {
  const content = await getContent<{ [key:string]: string }>('Content')
  const artists = await getContent<Artist>('Artists')
  let parsedArtists: ParsedArtist[] = []
  artists.forEach((artist) => {
    parsedArtists.push(
      {
        ...artist,
        'Sources': artist['Sources'] ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{artist['Sources']}</ReactMarkdown> : undefined,
        'Publications / Albums': artist['Publications / Albums'] ? <ReactMarkdown remarkPlugins={[remarkGfm]} >{artist['Publications / Albums']}</ReactMarkdown> : undefined,
        'Bands / Formations': artist['Bands / Formations'] ? <ReactMarkdown remarkPlugins={[remarkGfm]} >{artist['Bands / Formations']}</ReactMarkdown> : undefined,
      }
    )
  })

  const orderedArtists = parsedArtists.sort((a, b) => {
    const aYear = a['First Appearance'];
    const bYear = b['First Appearance'];

    if (aYear < bYear) {
      return -1;
    }
    if (aYear > bYear) {
      return 1;
    }
    return 0;
  })


  return (
    <HomeTemplate artists={orderedArtists} content={content} />
  )
}
