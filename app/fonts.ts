import localFont from 'next/font/local'

export const paperlogyFont = localFont({
  src: [
    {
      path: '../fonts/Paperlogy-1Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Paperlogy-2ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Paperlogy-3Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Paperlogy-4Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Paperlogy-5Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Paperlogy-6SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Paperlogy-7Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Paperlogy-8ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Paperlogy-9Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-paperlogy',
})