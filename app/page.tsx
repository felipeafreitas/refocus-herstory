/* eslint-disable react/no-children-prop */
import HomeTemplate from '@/components/templates/HomeTemplate/HomeTemplate'
import { Artist, ParsedArtist } from '@/lib/types';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

async function getArtists(): Promise<Artist[]> {
  return fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`, {
    next: { revalidate: 3600 },
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
    })
  })
    .then(res => res.json())
    .then(res => res.records)
    .then(res => res.map((record: { fields: any; }) => record.fields))
};

export default async function Home() {
  const artists = await getArtists()
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

  return (
    <HomeTemplate artists={parsedArtists} />
  )
}
