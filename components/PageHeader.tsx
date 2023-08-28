import React from 'react'

interface PageHeaderProps {
  heading: string
  subheading: string
}

const PageHeader = ({ heading, subheading }: PageHeaderProps) => {
  return (
    <section className="mb-8 text-center">
      <h1 className="text-5xl font-bold">{heading}</h1>
      <p className="text-xl text-muted-foreground">{subheading}</p>
    </section>
  )
}

export default PageHeader
