import dynamic from 'next/dynamic'
export const Footer = dynamic(() => import('src/components/Footer'))
export const Header = dynamic(() => import('src/components/Header'))
export const Icon = dynamic(() => import('src/icons/Index'))
export const Layout = dynamic(() => import('src/layouts/General'))
export const Lightbox = dynamic(() => import('src/components/Lightbox'))
export const LightboxClose = dynamic(() => import('src/components/LightboxClose'))
export const Portal = dynamic(() => import('src/components/Portal'))

