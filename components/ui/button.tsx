import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { ButtonProps } from '../../types'
import classes from './button.module.css'

const Button = (props: ButtonProps) => {
  return (
    <Link className={classes.btn} href={props.link}>{props.children}</Link>
  )
}

Button.propTypes = {}

export default Button