import type { JSX } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Instagram, Organization } from '../ui/icons'
import { Link, MapPin } from 'lucide-react'

type ProfileAdditionalDataProps = {
  company?: string | null
  location?: string | null
  blog?: string | null
}

export default function ProfileAdditionalData({
  company,
  location,
  blog,
}: ProfileAdditionalDataProps): JSX.Element {
  return (
    <Accordion type='single' collapsible className='w-full text-blue-500'>
      <AccordionItem value='additionalData'>
        <AccordionTrigger className='flex-col items-center gap-0.5'>
          Informações Adicionais
        </AccordionTrigger>

        <AccordionContent>
          <div className='flex flex-col'>
            {company && (
              <div className='flex gap-2.5 items-center'>
                <Organization className='size-4' />
                <p>{company}</p>
              </div>
            )}
            {location && (
              <div className='flex gap-2.5 items-center'>
                <MapPin className='size-4' />
                <p>{location}</p>
              </div>
            )}
            {blog && (
              <div className='flex gap-2.5 items-center'>
                <Link className='size-4' />
                <p>{blog}</p>
              </div>
            )}
            <div className='flex gap-2.5 items-center'>
              <Instagram className='size-4 stroke-primary' />
              <p>Gabriel.s.cordeiro</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
