import type { Metadata } from 'next'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { homeStaticData } from '@/data/homeStaticData'
import React from 'react'

import type { Page } from '@/payload-types'
import { notFound } from 'next/navigation'
import { cn } from '@/utilities/cn'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params }: Args) {
  const { slug = 'home' } = await params

  let page = await queryPageBySlug({
    slug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStaticData() as Page
  }

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  const hasHero = hero && hero.type && hero.type !== 'none'
  const isHighImpactHero = hero?.type === 'highImpact'

  return (
    <div className="flex flex-col gap-16 pb-24 lg:gap-24">
      {hasHero &&
        (isHighImpactHero ? (
          <RenderHero {...hero} />
        ) : (
          <section className="relative isolate overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/25"
            />
            <div
              aria-hidden
              className="absolute inset-x-4 bottom-[-35%] h-[22rem] rounded-[50%] border border-white/10 bg-white/40 blur-2xl dark:border-white/5 dark:bg-white/10"
            />
            <div className="container relative py-16 md:py-24 lg:py-28">
              <RenderHero {...hero} />
            </div>
          </section>
        ))}

      <section className={cn('container', hasHero ? 'mt-4' : 'mt-16')}>
        <RenderBlocks blocks={layout} />
      </section>
    </div>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = 'home' } = await params

  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        ...(draft ? [] : [{ _status: { equals: 'published' } }]),
      ],
    },
  })

  return result.docs?.[0] || null
}
