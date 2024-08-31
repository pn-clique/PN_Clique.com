import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface SocialProps {
  image?: string | StaticImport
  icon?: ReactNode
  url: string
}

export default function Social({ icon, image, url }: SocialProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="w-8 h-8 rounded-full hover:bg-primary/30 flex justify-center items-center shadow-shape active:scale-95 transition-all"
    >
      {image && <Image src={image} alt="Social" width={16} height={16} />}
      {icon && icon}
    </Link>
  )
}
