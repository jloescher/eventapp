import React, { ReactNode } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import classes from './button.module.css'

type Props = {
  onClick?: string,
  children?: ReactNode,
  link?: string
}

const Button = (props: Props) => {
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>{props.children}</Link>
    )
  }
  
  return <button className={classes.btn}>{props.children}</button>
}

Button.propTypes = {}

export default Button