import React from 'react'

interface PageHeaderProps {
  heading: string
  subheading: string
}

const PageHeader = ({ heading, subheading }: PageHeaderProps) => {
  return (
    <section className="mb-8 text-center">
      <h2 className="text-5xl font-bold">{heading}</h2>
      <p className="my-4 text-xl text-muted-foreground">{subheading}</p>
      <hr />
    </section>
  )
}

export default PageHeader
