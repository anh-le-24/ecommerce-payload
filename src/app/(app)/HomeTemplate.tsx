import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import type { Page } from '@/payload-types'

import { RenderHero } from '@/heros/RenderHero'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { CategoryTabs } from '@/components/CategoryTabs'

const perks = [
  {
    description: 'Orders ship within 48 hours with detailed real-time tracking.',
    title: 'Fast worldwide shipping',
  },
  {
    description: 'Plan your purchases with secure payments and flexible checkout.',
    title: 'Secure checkout',
  },
  {
    description: 'Not the right fit? Enjoy 30-day, no-questions-asked returns.',
    title: 'Easy returns',
  },
]

const highlightStories = [
  {
    description: 'Layered textures, bold silhouettes, and neutral tones for every season.',
    title: 'New arrivals ready for any itinerary',
  },
  {
    description: 'Consciously sourced materials crafted to stay in your wardrobe for years.',
    title: 'Essentials built to last',
  },
  {
    description: 'Curate your look with matching sets, accessories, and weekend-ready kits.',
    title: 'Capsule collections curated by our stylists',
  },
]

export function HomeTemplate() {
  return (
    <main className="flex flex-col gap-20 pb-24 lg:gap-24">
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-neutral-900"
        />
        <div
          aria-hidden
          className="absolute -right-20 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -left-28 -top-32 h-[24rem] w-[24rem] rounded-full bg-primary/30 blur-3xl"
        />
        <div className="container relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-10">
              <div className="space-y-6 text-white">
                <div className="space-y-4">
                  <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Discover the next generation of everyday essentials.
                  </h1>
                  <p className="max-w-xl text-base text-white/70 sm:text-lg">
                    Shop refined basics, statement layers, and accessories curated for modern
                    living—all powered by Payload and tailored to your brand.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg shadow-black/10 transition hover:translate-y-0.5 hover:bg-neutral-100"
                >
                  Shop the collection
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/find-order"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white hover:text-white"
                >
                  Track an order
                </Link>
              </div>

              <dl className="grid gap-4 sm:grid-cols-3">
                {perks.map(({ title, description }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white/80 shadow-lg shadow-black/10 backdrop-blur"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      {title}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-white/70">{description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="hidden lg:block">
              <div className="rounded-3xl border border-white/20 bg-white/5 p-8 text-white/80 shadow-xl shadow-black/10 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                  This week&apos;s highlights
                </h3>
                <ul className="mt-6 space-y-6 text-sm leading-relaxed">
                  {highlightStories.map(({ title, description }) => (
                    <li key={title} className="space-y-2">
                      <p className="font-semibold text-white">{title}</p>
                      <p className="text-white/70">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex flex-col gap-10 rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-sm shadow-black/5 dark:border-neutral-800/60 dark:bg-neutral-900">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Shop by category
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Explore tailored collections or jump straight into all products.
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Build an experience that adapts to your customers. Curate categories inside Payload
              and they will appear here automatically.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="hidden max-w-sm lg:block">
              <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 text-sm text-neutral-600 shadow-inner dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300">
                Keep shoppers in the loop with seasonal drops, collections, or editor&apos;s picks.
                Update the content once in the CMS and watch it sync across your storefront.
              </div>
            </div>

            <div className="flex-1 lg:max-w-2xl">
              <CategoryTabs />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
