import type { JSX } from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Heart, LocationEdit, Pin } from 'lucide-react'

type CardUserProps = {
  avatar_url?: string
  name?: string | null
  bio?: string | null
  company?: string | null
}

export default function CardUser({
  avatar_url,
  name,
  bio,
  company,
}: CardUserProps): JSX.Element {
  return (
    <Card className='border-none shadow-none w- gap-4'>
      <CardHeader className='flex flex-col justify-center items-center'>
        <div className='relative'>
          <Avatar className='h-28 w-28'>
            <AvatarImage src={avatar_url} />
          </Avatar>
          <Badge variant='secondary' className='absolute right-0 bottom-0 p-2'>
            😎
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='flex flex-col text-center gap-1'>
        <p className='text-xl font-bold'>{name}</p>
        <p className='text-sm text-muted-foreground'>{bio}</p>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='additionalData'>
            <AccordionTrigger className='flex-col items-center gap-0.5 text-blue-500'>
              Informações Adicionais
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col'>
                <div className='flex gap-2.5 items-center'>
                  <Heart className='size-4' />
                  <p>Magazord - plataforma</p>
                </div>
                <div className='flex gap-2.5 items-center'>
                  <LocationEdit className='size-4' />
                  <p>Rio do Sul - SC</p>
                </div>
                <div className='flex gap-2.5 items-center'>
                  <Heart className='size-4' />
                  <p>Cordas.hub.uok</p>
                </div>
                <div className='flex gap-2.5 items-center'>
                  <Heart className='size-4' />
                  <p>Gabriel.s.cordeiro</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  )
}
