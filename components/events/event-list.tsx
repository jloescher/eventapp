import React from 'react'
import PropTypes from 'prop-types'
import { Event, ListDetailsProps } from '../../types'
import EventItem from './event-item'
import classes from './event-list.module.css'

const EventList = (props: ListDetailsProps) => {
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