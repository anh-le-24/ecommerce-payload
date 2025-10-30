import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="relative z-10 grid gap-8 px-6 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,380px)] md:items-center md:px-16 md:py-16">
      <div className="max-w-xl space-y-6">
        {richText && <RichText data={richText} enableGutter={false} />}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-wrap gap-4">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {media && typeof media === 'object' && (
        <div className="relative z-10 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
          <Media imgClassName="object-cover" priority resource={media} />
          {media?.caption && (
            <div className="border-t border-white/20 px-6 py-4 text-sm text-white/80 dark:border-white/10">
              <RichText data={media.caption} enableGutter={false} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
