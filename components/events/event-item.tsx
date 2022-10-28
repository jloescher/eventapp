import React from 'react'
import PropTypes from 'prop-types'
import { Event } from '../../types'
import Link from 'next/link'
import Image from 'next/image'

const EventItem = (props: Event) => {
  const { title, image, date, location, id } = props

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li>
      <Image src={'/' + image} alt="" width={500} height={500} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}


EventItem.propTypes = {}

export default 
EventItem