'use client'
import { CMSLink } from '@/components/Link'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import React, { Suspense } from 'react'

import { MobileMenu } from './MobileMenu'
import type { Header } from 'src/payload-types'

import { LogoIcon } from '@/components/icons/logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex items-center justify-between gap-4 py-3 md:py-4">
        <div className="flex flex-1 items-center gap-3 md:gap-6">
          <div className="flex md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>

          <Link
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-white hover:shadow-md md:h-11 md:w-11"
            href="/"
            aria-label="Go to homepage"
          >
            <LogoIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </Link>

          {menu.length ? (
            <ul className="hidden items-center gap-1 rounded-full border border-transparent bg-white/50 p-1 text-sm font-medium text-slate-600 shadow-sm backdrop-blur transition hover:border-slate-200 md:flex">
              {menu.map((item) => (
                <li key={item.id}>
                  <CMSLink
                    {...item.link}
                    size="clear"
                    className={cn(
                      'relative navLink inline-flex items-center rounded-full px-3 py-2 text-slate-600 transition-colors duration-200 hover:text-slate-900',
                      {
                        active:
                          item.link.url && item.link.url !== '/'
                            ? pathname.includes(item.link.url)
                            : false,
                        'text-slate-900':
                          item.link.url && item.link.url !== '/'
                            ? pathname.includes(item.link.url)
                            : false,
                      },
                    )}
                    appearance="nav"
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex flex-none items-center justify-end gap-2 md:gap-4">
          <Suspense fallback={<OpenCartButton />}>
            <Cart />
          </Suspense>
        </div>
      </nav>
    </header>
  )
}
