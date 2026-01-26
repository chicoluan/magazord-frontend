import { Link, MapPin } from 'lucide-react'
import type { JSX } from 'react'
import DynamicIcon from '@/components/ui/dynamicIcon'
import type { SocialAccount } from '@/types/SocialAccount'
import { formatSocialAccounts } from '@/utils/formatSocialAccounts'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Organization } from '../ui/icons'

type ProfileAdditionalDataProps = {
  company?: string | null
  location?: string | null
  blog?: string | null
  socialAccounts?: SocialAccount[]
}

export default function ProfileAdditionalData({
  company,
  location,
  blog,
  socialAccounts,
}: ProfileAdditionalDataProps): JSX.Element {
  const formattedSocialAccounts = formatSocialAccounts(socialAccounts ?? [])

  return (
    <Accordion type='single' collapsible className='w-full text-blue-500'>
      <AccordionItem value='additionalData'>
        <AccordionTrigger className='flex-col items-center gap-0.5'>
          Informações Adicionais
        </AccordionTrigger>

        <AccordionContent>
          <div className='flex flex-col gap-2'>
            {/* Company */}
            {company && (
              <div className='flex items-center gap-2.5'>
                <Organization className='size-4' />
                <p>{company}</p>
              </div>
            )}

            {/* Location */}
            {location && (
              <div className='flex items-center gap-2.5'>
                <MapPin className='size-4' />
                <p>{location}</p>
              </div>
            )}

            {/* Portfólio */}
            {blog && (
              <a
                href={blog}
                target='_blank'
                className='flex items-center gap-2.5'
              >
                <Link className='size-4' />
                <p>{blog}</p>
              </a>
            )}

            {formattedSocialAccounts?.map((socialAccount) => (
              <a
                key={socialAccount.provider}
                target='_blank'
                href={socialAccount.url}
                className='flex gap-2.5 items-center'
              >
                <DynamicIcon className='size-4' icon={socialAccount.icon} />
                <p>{socialAccount.username}</p>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
