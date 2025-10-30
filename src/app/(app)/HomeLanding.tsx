import React from 'react'

import type { Page } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import Link from 'next/link'
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import { cn } from '@/utilities/cn'

type HomeLandingProps = {
  page: Page
}

const stats = [
  { label: 'Sản phẩm được tuyển chọn', value: '2K+' },
  { label: 'Khách hàng quay lại', value: '98%' },
  { label: 'Giao hàng nội địa', value: '48h' },
]

const featureHighlights = [
  {
    title: 'Bộ sưu tập tối giản',
    description: 'Các dòng sản phẩm essentials với bảng màu trung tính, phù hợp mọi ngữ cảnh.',
  },
  {
    title: 'Chất liệu thân thiện',
    description: 'Ưu tiên vật liệu tái chế và quy trình sản xuất bền vững để giảm tác động môi trường.',
  },
  {
    title: 'Cập nhật theo mùa',
    description: 'Ra mắt capsule collection mỗi quý với số lượng giới hạn, bảo đảm sự độc đáo.',
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Bảo hành 365 ngày',
    description: 'Miễn phí đổi trả trong 30 ngày, bảo hành sản phẩm trên toàn bộ hệ thống.',
  },
  {
    icon: Truck,
    title: 'Miễn phí vận chuyển',
    description: 'Giao hàng miễn phí với đơn từ 999.000đ trên toàn quốc, hỗ trợ COD.',
  },
  {
    icon: Leaf,
    title: 'Cam kết bền vững',
    description: 'Đóng gói thân thiện và chương trình tái chế dành cho khách hàng thân thiết.',
  },
]

const curatedCollections = [
  {
    badge: 'New arrival',
    name: 'Urban Capsule 2025',
    description: 'Layering hiện đại với chất liệu giữ form, phù hợp nhịp sống thành thị.',
  },
  {
    badge: 'Best seller',
    name: 'Everyday Comfort',
    description: 'Những món đồ “must-have” với phom dáng thư thái và cảm giác mềm mại.',
  },
  {
    badge: 'Limited',
    name: 'Artisan Edition',
    description: 'Các thiết kế thủ công hợp tác cùng nghệ nhân địa phương, số lượng giới hạn.',
  },
]

const testimonials = [
  {
    quote:
      '“Chưa bao giờ tôi dễ dàng mix-match như vậy. Chất lượng vượt mong đợi, dịch vụ chăm sóc khách hàng rất tuyệt.”',
    author: 'Lan Anh — Giám đốc sáng tạo',
  },
  {
    quote:
      '“Đặt hàng sáng hôm trước, chiều hôm sau đã giao. Form chuẩn, màu sắc lên đúng mô tả.”',
    author: 'Minh Trí — Nhà thiết kế nội thất',
  },
]

export const HomeLanding: React.FC<HomeLandingProps> = ({ page }) => {
  const heroTitle = page?.meta?.title || page?.title || 'Bộ sưu tập mới nhất'
  const heroDescription =
    page?.meta?.description ||
    'Khám phá những phom dáng tối giản, chất liệu bền vững và trải nghiệm mua sắm liền mạch.'

  const hasBlocks = page?.layout && Array.isArray(page.layout) && page.layout.length > 0

  return (
    <main className="flex flex-col gap-24 pb-24 lg:gap-28">
      <section className="relative isolate overflow-hidden rounded-b-[3.5rem] border-b border-neutral-100 bg-gradient-to-br from-neutral-900 via-slate-900/95 to-black text-white dark:border-neutral-800">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[10%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-5%] top-[-15%] h-[32rem] w-[32rem] rounded-full bg-amber-500/20 blur-[160px]"
        />
        <div className="container relative grid gap-16 px-6 pb-24 pt-28 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:px-12 lg:px-16 lg:pt-32">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
              <Sparkles className="h-4 w-4" /> Bộ sưu tập mùa mới
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">
                {heroTitle}
              </h1>
              <p className="text-pretty text-base text-white/80 md:text-lg">{heroDescription}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 dark:bg-amber-400 dark:text-neutral-900"
                href="/shop"
              >
                Mua sắm ngay
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                href="/products"
              >
                Xem lookbook
              </Link>
            </div>

            <dl className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-3">
              {stats.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-sm text-white/60">{label}</dt>
                  <dd className="mt-1 text-2xl font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative isolate flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-10 top-10 h-32 rounded-full bg-white/20 blur-3xl"
            />
            <div className="relative grid gap-4 md:grid-cols-2">
              {featureHighlights.map(({ title, description }) => (
                <article
                  className="group rounded-2xl border border-white/10 bg-neutral-950/60 p-5 transition hover:border-white/30 hover:bg-neutral-900/80"
                  key={title}
                >
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
                  <div className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-white/70">
                    Khám phá
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </article>
              ))}
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-6 text-sm text-white/75 shadow-inner">
              <p>
                Tham gia bản tin để cập nhật trước tiên về lịch ra mắt capsule, ưu đãi độc quyền và
                workshop tại showroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full bg-neutral-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:bg-neutral-100/5 dark:text-neutral-300">
            Vì sao khách hàng chọn chúng tôi
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
            Trải nghiệm mua sắm chú trọng chất lượng, bền bỉ và dịch vụ tận tâm.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-lg shadow-neutral-200/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-300/50 dark:border-neutral-800 dark:bg-neutral-900/70 dark:shadow-black/30"
              key={title}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container px-6 md:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:bg-neutral-100/5 dark:text-neutral-300">
              Bộ sưu tập tuyển chọn
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-neutral-900 dark:text-white md:text-4xl">
              Những dòng sản phẩm đem lại cảm hứng mặc đẹp mỗi ngày.
            </h2>
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              Chúng tôi hợp tác với các nghệ nhân, dùng chất liệu tái chế và tối ưu phom dáng nhằm
              tạo nên trải nghiệm mặc đi kèm tính ứng dụng cao.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {curatedCollections.map(({ badge, name, description }) => (
              <article
                className={cn(
                  'relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-lg shadow-neutral-200/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-300/50 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-white',
                )}
                key={name}
              >
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  <span>{badge}</span>
                  <span>Lookbook</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {description}
                </p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition hover:underline dark:text-neutral-200"
                  href="/shop"
                >
                  Khám phá ngay <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-6 md:px-12 lg:px-16">
        <div className="grid gap-8 rounded-[2.5rem] border border-neutral-200 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black p-10 text-white shadow-2xl dark:border-neutral-700">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
              Đánh giá thực tế
            </span>
            <h2 className="text-3xl font-semibold leading-snug md:text-4xl">
              “Được tạo ra cho những ai yêu sự tinh giản nhưng vẫn muốn dấu ấn riêng.”
            </h2>
            <p className="text-sm text-white/80">
              Hơn 10.000 khách hàng đã nâng cấp tủ đồ với các thiết kế của chúng tôi.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map(({ author, quote }) => (
              <blockquote
                className="rounded-2xl border border-white/15 bg-white/10 p-6 text-sm text-white/85 backdrop-blur-xl"
                key={author}
              >
                <p>{quote}</p>
                <footer className="mt-4 text-xs font-medium uppercase tracking-wide text-white/60">
                  {author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-6 md:px-12 lg:px-16">
        <div className="overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-neutral-900/5 p-10 shadow-lg shadow-neutral-200/40 dark:border-neutral-700 dark:bg-neutral-900/70 dark:shadow-black/30">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-neutral-900 dark:text-white md:text-4xl">
                Ưu đãi dành cho thành viên mới
              </h3>
              <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                Đăng ký tài khoản để nhận voucher 15%, truy cập trước các bộ sưu tập giới hạn và ưu
                đãi sinh nhật cá nhân.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
                  href="/create-account"
                >
                  Tạo tài khoản
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-500 hover:text-neutral-900 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-neutral-400"
                  href="/login"
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white/70 p-8 text-sm shadow-inner dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">
              <p>
                “Shop luôn cập nhật xu hướng nhưng vẫn giữ tinh thần tối giản. Từ packaging đến dịch
                vụ hậu mãi đều chỉn chu.” –{' '}
                <span className="font-semibold text-neutral-900 dark:text-white">Thu Hà</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {hasBlocks && (
        <section className="container px-6 md:px-12 lg:px-16">
          <RenderBlocks blocks={page.layout} />
        </section>
      )}
    </main>
  )
}

