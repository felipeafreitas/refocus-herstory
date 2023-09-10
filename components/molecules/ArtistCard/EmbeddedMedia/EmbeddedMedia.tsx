type EmbeddedMediaProps = {
  url: string;
}

const EmbeddedMedia = ({ url }: EmbeddedMediaProps) => {
  const urlObject = new URL(url)

  if (urlObject.origin.includes('spotify')) return (
    <iframe
      className="border-radius:12px"
      src={url.includes('embed')
        ? url
        : `${urlObject.origin}/embed/${urlObject.pathname}`
      }
      width="100%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen;picture-in-picture"
      loading="lazy"
    />
  )

  if (urlObject.origin.includes('youtu')) return (
    <iframe
      width="100%"
      className="rounded-xl	"
      height="152"
      src={url.includes('embed')
        ? url
        : `https://www.youtube.com/embed/${urlObject.searchParams.get('v')
          ? urlObject.searchParams.get('v')
          : `/${urlObject.pathname}`
        }`
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  )

  return null
}

export default EmbeddedMedia
