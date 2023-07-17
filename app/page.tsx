import HomeTemplate from '@/components/templates/HomeTemplate'

export default function Home() {
  const artists = [
    {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg',
      artistName: 'Aretha Franklin',
      description: 'Aretha Louise Franklin was an American singer, songwriter, actress, pianist, and civil rights activist. Franklin began her career as a child singing gospel at New Bethel Baptist Church in Detroit, Michigan, where her father C. L. Franklin was a minister.',
      instrument: 'Vocals',
      activeYears: '1952-2017',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Ella Fitzgerald',
      description: 'Ella Fitzgerald, also known as the "First Lady of Song" and "Queen of Jazz," was an American jazz vocalist with a career spanning six decades. She was renowned for her incredible vocal range, improvisational ability, and scat singing.',
      instrument: 'Vocals',
      activeYears: '1934-1993',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Billie Holiday',
      description: 'Billie Holiday, born Eleanora Fagan, was an American jazz and blues singer known for her distinctive voice and emotional depth. Her vocal style influenced generations of musicians and remains iconic in the history of jazz.',
      instrument: 'Vocals',
      activeYears: '1933-1959',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Nina Simone',
      description: 'Nina Simone, born Eunice Kathleen Waymon, was an American singer, songwriter, and pianist. She was an influential figure in jazz, blues, and civil rights activism, and her music often addressed the social and racial issues of her time.',
      instrument: 'Vocals, Piano',
      activeYears: '1954-2003',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Sarah Vaughan',
      description: 'Sarah Vaughan, known as the "Divine One," was an American jazz singer with a rich and velvety voice. She was admired for her vocal control, improvisational skills, and extensive range, making her one of the most accomplished jazz vocalists in history.',
      instrument: 'Vocals',
      activeYears: '1942-1990',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Dinah Washington',
      description: 'Dinah Washington, born Ruth Lee Jones, was an American jazz and blues singer. With her powerful voice and emotional delivery, she earned the nickname "Queen of the Blues." Her career encompassed various styles, including jazz, R&B, and traditional pop.',
      instrument: 'Vocals',
      activeYears: '1943-1963',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Carmen McRae',
      description: 'Carmen McRae was an American jazz singer, composer, and pianist. Known for her distinctive phrasing and expressive vocals, she had a successful career that spanned several decades, leaving a lasting impact on the jazz world.',
      instrument: 'Vocals, Piano',
      activeYears: '1944-1991',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Anita ODay',
      description: 'Anita ODay was an American jazz singer and one of the leading female vocalists of the swing era. With her impeccable timing and inventive vocal style, she became known for her collaborations with big bands and small jazz groups.',
      instrument: 'Vocals',
      activeYears: '1939-2006',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Lena Horne',
      description: 'Lena Horne was an American singer, actress, and civil rights activist. She achieved fame as a jazz and pop vocalist and became one of the first African-American performers to be widely accepted in the entertainment industry.',
      instrument: 'Vocals',
      activeYears: '1933-2000',
      },
      {
      imageUrl: 'https://www.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2018-08-17/AP/Photo_Gallery_Aretha_Franklin_39183.jpg-266aa.jpg', // Replace this with the image URL of the next artist
      artistName: 'Melody Gardot',
      description: 'Melody Gardot is an American jazz singer, songwriter, and musician. Known for her soulful voice and heartfelt performances, she has garnered critical acclaim for her modern approach to jazz music.',
      instrument: 'Vocals, Guitar',
      activeYears: '2005-present',
      },
  ];

  const instruments = ['Guitar', 'Bass', 'Drums', 'Vocals', 'Keyboard'];


  return (
    <HomeTemplate artists={artists} instruments={instruments}/>
  )
}
