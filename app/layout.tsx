import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { paperlogyFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'PrivacyCheck - AI 기반 개인정보처리방침 점검 서비스',
  description: '법적 리스크 없이, 빠르고 정확하게 AI가 점검하는 개인정보처리방침 분석 서비스',
  generator: 'PrivacyCheck',
  openGraph: {
    title: 'PrivacyCheck - AI 기반 개인정보처리방침 점검 서비스',
    description: '법적 리스크 없이, 빠르고 정확하게 AI가 점검하는 개인정보처리방침 분석 서비스',
    url: 'https://privacy-check.ai',
    siteName: 'PrivacyCheck',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'PrivacyCheck 서비스 이미지'
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrivacyCheck - AI 기반 개인정보처리방침 점검 서비스',
    description: '법적 리스크 없이, 빠르고 정확하게 AI가 점검하는 개인정보처리방침 분석 서비스',
    images: ['/hero-bg.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${paperlogyFont.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
