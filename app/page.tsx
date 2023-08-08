import HomeTemplate from '@/components/templates/HomeTemplate'

export type Artist = {
    imageUrl: string;
    artistName: string;
    description: string;
    instrument: string[];
    activeYears: {
      from: number;
      to: number;
    };
}

async function getArtists() {
  return fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`, {
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

  return (
    <HomeTemplate artists={artists} />
  )
}
