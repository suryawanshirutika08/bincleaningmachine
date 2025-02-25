import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { Testimonial } from '@/components/Testimonial'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/sapl_logo_final.jpg'

export function Introduction() {
  return (
    <>
      
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Shreepad Automachine Pvt Ltd.',
          image: avatarImage2,
        }}
      >

        <p>
          About us 
        </p>
         <br />
        <p>
                                              
        Company with leadership in the field of designing. Manufacturing and supply 
        of Industrial Component Cleaning Machine.
        We offer aqueous based industrial 
        Component Cleaning Machines and Ultrasonic Cleaning Machine.High precision cleaning application with advanced 
        Filtration & Oil removal systems for increasing components efficiency, 
        performance and working.

        </p>
      </Testimonial>
      
      <SubIntroduction />
    </>
  )
}

const SubIntroduction = () => {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          "Shreepad Automachine PVT.LTD" Specialized in Components Cleaning
          Machines.
        </p>
        <p className="mt-4">
          Industrial Cleaning is the thorough Cleaning of machinery,equipment or
          parts in a manufacturing plant.
        </p>
        <p className="mt-4">Basic to brilliance.</p>
        <p className="mt-4">
          Bin/Component Cleaning Machine technical specification as below.
        </p>


       








        <ul role="list" className="mt-8 space-y-3">
          {[
            'HIGH PRESSURE ROTARY CLEANING.',
            '20 BAR CAPACITY PUMP.',
            'COMPACT FILTRATION SYSTEM TO ARREST THE ENTIRE DIRT,GREASE,OIL,ETC.',
            'WATER TANK CAPACITY 300 TO 350 LTRS.',
            'DISK OR BELT TYPE OIL SKIMMER FOR OIL REMOVAL.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          "SHREEPAD AUTOMACHINE offers a comprehensive and efficient industrial
          cleaning solution, ensuring optimal performance, cleanliness, and
          safety in manufacturing environments."
        </p>
      </Container>
    </section>
  )
}