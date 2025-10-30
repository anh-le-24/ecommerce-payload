'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <section className="relative isolate overflow-hidden text-white" data-theme="dark">
      <div className="absolute inset-0">
        {media && typeof media === 'object' ? (
          <Media fill imgClassName="object-cover" priority resource={media} />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
      </div>
      <div className="relative container flex flex-col items-center gap-8 px-6 py-32 text-center md:px-16">
        <div className="max-w-2xl space-y-6">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
        </div>
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-4">
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
    </section>
  )
}
