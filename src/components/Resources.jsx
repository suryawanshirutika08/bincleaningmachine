import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
// import discordImage from '@/images/resources/discord.svg'
// import figmaImage from '@/images/resources/figma.svg'
// import videoPlayerImage from '@/images/resources/video-player.svg'
import firstImage from '@/images/screencasts/first.jpg';
import secondImage from '@/images/screencasts/second.png';
import thirdImage from '@/images/screencasts/third.jpg';
import fourthImage from '@/images/screencasts/fourth.jpeg';
import fifthImage from '@/images/screencasts/fifth.jpg';
import sixthImage from '@/images/screencasts/sixth.jpg';

const resources = [
  {
    title: 'High Pressure,Bin/Component Cleaning Machine.Compact Band Pape',
    description:
      'Standard 800 dia rotary basket,20 bar capacity pump,compact band paper filtration system,PlC control,weight carring capacity 60 to 80 kgs,600MM × 400MM × 300MM height capacity maxs,water tank capacity 300 to 350 LTRS, oil skimmer,water level indicator and maintenance friendly machine.',
    image: function FigmaImage() {
      return (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
              <div className="relative w-full h-full">
                  <Image src={firstImage} alt="" layout="fill" objectFit="" unoptimized />
              </div>
          </div>
      )
    },
  },
  {
    title: 'Ultrasonic Cleaning Machine.',
    description:
      'Ultrasonic Cleaning is the preferred high-precision cleaning technique that is designed to remove surface contamination from products completely and rapidly.The ultrasonic cleaning process design depends on factors like the component or product type, material, surface quality, contamination type and required cleanliness level.(e.g, particle size and Millipore values)',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          /> */}
          <Image
            className="relative"
            src={secondImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Multi Stage Equal Indexing Converised Component Cleaning Machine.',
    description:
      "High pressure rotary cleaning, ultrasonic cleaning, air cartan for drying,oven/hot air blow for drying,retutn line conveyor for basket,PLC control, millipore upto 1 to 2 micron and maintenance friendly machine.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={thirdImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Compact Band Filtration.',
    description:
      'Compact design to remove impurities from coolant.Levet type limit switch.Fully automatic operation float switch sensor to remove clogged filter paper automatically.Availagble in standard models.Customized design to suit specific requirements.Also made available.Filtration: 15,25,50 Microns.Moc. MS, SS 30H.Magnetic Seperator add - on available.Skimmer add-on avilable.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={fourthImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Oil Separator.',
    description:
      'To separate Tramp Oil from CNC Machines,No filter element,No replacement cost.Improved product finish,Extended Oil change period.Reduced machine downtime,Substantial saving on Mfg and Maintenance Expenses.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={fifthImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Oil Skimmer.',
    description:
      ' To separate floting Oil from water and maintenance friendly unit.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={sixthImage} alt="" unoptimized />
        </div>
      )
    },
  },


]

export function Resources() {
  return (
    <section
      id="Images"
      aria-labelledby="Images-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="Images-title">
          Images
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Using advanced automation and technology to power industries.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        Our machines stand as a testament to precision engineering and unmatched 
          efficiency, delivering performance that drives progress and innovation.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-72">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
