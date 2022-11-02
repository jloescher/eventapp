import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/events-detail/event-summary'
import EventLogistics from '../../components/events-detail/event-logistics'
import EventContent from '../../components/events-detail/event-content'

const EventPage = () => {
  const r = useRouter()

  const eventId = r.query.event_id
  const event = getEventById(eventId)

  if (!event) {
    return '<p>No event found.</p>'
  } else {
    const { title, description, date, location, image } = event
    return (
      <Fragment>
        <EventSummary title={title} />
        <EventLogistics date={date} address={location} image={image} imageAlt={title} />
        <EventContent>
          <p>{ description }</p>
        </EventContent>
      </Fragment>
    )
  }
}

export default EventPage