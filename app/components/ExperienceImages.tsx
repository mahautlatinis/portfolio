import Image from 'next/image';
import up42 from "public/images/home/42/42up2.jpg"
import deloittelogo from "public/images/home/deloitte/deloitte-digital.png"
import greenlylogo from 'public/images/home/greenly/logo-greenly.png'
import mahaut from 'public/images/home/mahaut.png';
import peers from 'public/images/home/greenly/peers.png'
import shorthair from 'public/images/home/42/updated-42.jpg'

export default function ExperienceImages() {
    return (<div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt=""
            src={greenlylogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt=""
            src={peers}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt=""
            src={mahaut}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt=""
            src={deloittelogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt=""
            src={up42}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt=""
            src={shorthair}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>)
}