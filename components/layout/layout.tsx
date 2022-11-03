import React, { Fragment } from 'react'
import MainHeader from './main-header'

type Props = {
  children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout