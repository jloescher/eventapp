import { Component } from "react"

export type Event = {
  id: string,
  title: string,
  description: string,
  location: string,
  date: string,
  image: string,
  isFeatured: Boolean,
}

export type ListDetailsProps = {
  items: Array<Event>
}

export type DateFilter = {
  year: Number
  month: Number | any
}

export type ButtonProps = {
  children: any,
  link: string
}