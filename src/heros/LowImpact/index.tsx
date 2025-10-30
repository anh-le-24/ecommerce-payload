import React from 'react'

import type { Page } from '@/payload-types'

import { RichText } from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <div className="relative z-10 flex flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-16 md:py-16">
      <div className="max-w-2xl space-y-6">
        {children || (richText && <RichText data={richText} enableGutter={false} />)}
      </div>
    </div>
  )
}
