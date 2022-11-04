import React from 'react'
import PropTypes from 'prop-types'
import EventItem from './event-item'
import classes from './event-list.module.css'

type Event = {
  id: string,
  title: string,
  description: string,
  location: string,
  date: string,
  image: string,
  isFeatured: Boolean,
}

type Props = {
  items: Array<Event>
}

const EventList = (props: Props) => {
  const { items } = props

  return (
    <ul className={classes.list}>
      {items.map(event => 
        <EventItem
          key={event.id} 
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location} 
          date={event.date}
          image={event.image}
          isFeatured={event.isFeatured}
        />)}
    </ul>
  )
}

EventList.propTypes = {}

export default EventList