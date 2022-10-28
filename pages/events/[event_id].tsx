import React from 'react'
import {useRouter} from 'next/router'

const EventPage = () => {
  const r = useRouter()

  let query = r.query

  return (
    <div>
      <h1>`Event Page ${query.event_id}`</h1>
    </div>
  )
}

export default EventPage