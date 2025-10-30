import type { Metadata } from 'next'

import React from 'react'

import type { Page } from '@/payload-types'
import { HomeLanding } from './HomeLanding'
import { queryPageBySlug } from './utilities/queryPageBySlug'
import { homeStaticData } from '@/endpoints/seed/home-static'
import { notFound } from 'next/navigation'
import { generateMeta } from '@/utilities/generateMeta'

const HOME_SLUG = 'home'

const getHomePage = async () => {
  let page = await queryPageBySlug({ slug: HOME_SLUG })

  if (!page) {
    page = homeStaticData() as Page
  }

  return page
}

export default async function HomePage() {
  const page = await getHomePage()

  if (!page) {
    return notFound()
  }

  return <HomeLanding page={page} />
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomePage()

  return generateMeta({ doc: page })
}

