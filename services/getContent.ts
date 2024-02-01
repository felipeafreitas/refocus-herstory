type Table = 'Artists' | 'Content'

export async function getContent<C>(table: Table): Promise<C[]> {
  return fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${table}`, {
    next: { revalidate: 60 * 10 }, // 10 minutes
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
    })
  })
    .then(res => res.json())
    .then(res => res.records)
    .then(res => res.map((record: { fields: any; }) => record.fields))
};
