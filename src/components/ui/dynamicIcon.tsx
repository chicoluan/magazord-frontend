import type { LucideProps } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export type LucideIconName = keyof typeof LucideIcons

type DynamicIconProps = {
  icon: LucideIconName
  className?: string
}

export default function DynamicIcon({ icon, className }: DynamicIconProps) {
  const Ikon = LucideIcons[icon] as React.ComponentType<LucideProps> | undefined

  if (!Ikon) {
    return null
  }

  return <Ikon className={className} />
}
