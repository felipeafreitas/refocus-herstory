import HomeTemplate from '@/components/templates/HomeTemplate/HomeTemplate'

async function getArtists() {
  return fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`, {
    cache: 'no-cache',
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

  console.log(artists[0]['Picture'][0]['url'])

  return (
    <HomeTemplate artists={artists} />
  )
}
