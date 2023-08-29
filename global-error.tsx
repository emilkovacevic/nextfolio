'use client'

import React from 'react'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="grid min-h-screen p-6 bg-background place-items-center">
          <h2>Something went wrong!</h2>
          <button type="button" onClick={() => reset()}>
            Try again
          </button>
        </main>
      </body>
    </html>
  )
}
