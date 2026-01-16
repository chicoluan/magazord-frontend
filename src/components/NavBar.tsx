import type { JSX } from 'react'

export default function NavBar(): JSX.Element {
  return (
    <div className="flex bg-background md:bg-primary">
      <div className="flex items-center justify-between">
        <p className="text-sm">15:18</p>
      </div>
    </div>
  )
}
