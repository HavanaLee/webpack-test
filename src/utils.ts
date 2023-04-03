import type { place } from './data'

export function getImageUrl(place: place) {
  return 'https://i.imgur.com/' + place.imageId + 'l.jpg'
}
