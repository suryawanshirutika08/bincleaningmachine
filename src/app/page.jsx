import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
    
     












      <Screencasts />
      {/* <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Shreepad Automachine',
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
      </Testimonial> */}
     
      <Resources />
      <FreeChapters />
      {/* <Pricing /> */}
      {/* <Testimonials />
      <Author /> */}
      {/* <Footer /> */}
    </>
  )
}
