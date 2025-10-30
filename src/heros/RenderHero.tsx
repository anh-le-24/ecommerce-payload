import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import { cn } from '@/utilities/cn'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  if (type === 'highImpact') {
    return <HeroToRender {...props} />
  }

  const className = cn(
    'relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-neutral-800/60 dark:bg-neutral-900/80 dark:text-neutral-50',
    type === 'mediumImpact' &&
      'bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900 text-white',
  )

  return (
    <div className={className}>
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700',
          type === 'mediumImpact' &&
            'opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]',
        )}
      />
      <HeroToRender {...props} />
    </div>
  )
}
