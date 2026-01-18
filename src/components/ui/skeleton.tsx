import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={cn(
        'animate-fill rounded-md bg-size-[200%_100%] bg-linear-to-r from-muted via-muted-foreground/20 to-muted',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
