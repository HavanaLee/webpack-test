import { useContext, useState } from 'react'
import { places } from '@/data'
import { getImageUrl } from './utils'
import type { place } from './data'
import { SizeContext } from './context'

export default function App() {
  const [isLarge, setIsLarge] = useState(false)

  const imageSize = isLarge ? 150 : 100
  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked)
          }}
        />
        Use large images
      </label>
      <hr />
      <SizeContext.Provider value={imageSize}>
        <List />
      </SizeContext.Provider>
    </>
  )
}

function List() {
  const listItems = places.map(place => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ))
  return <ul>{listItems}</ul>
}

function Place(props: { place: place }) {
  return (
    <>
      <PlaceImage place={props.place} />
      <p>
        <b>{props.place.name}</b>
        {': ' + props.place.description}
      </p>
    </>
  )
}

function PlaceImage({ place }: { place: place }) {
  const imageSize = useContext(SizeContext)
  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />
}
