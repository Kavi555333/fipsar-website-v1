// import React from 'react'
import { DeliverablesScrollSpy } from './DeliverablesScrollSpy'
import Ourmanaged from './Ourmanaged'
import { ServicePricingTable } from './ServicePricingTable'
import heroSec from '../../../assets/ServicesHero/digihero.jpg'
import ManagedServicesModel from './ManagedServicesModel'

const ManagedServices = () => {
  return (
    <>
          <section className="py-24 mt-8 relative overflow-hidden">



      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group order-2 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300 opacity-20 group-hover:opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <img 
                src={heroSec}
                // src="https://media.licdn.com/dms/image/v2/D4D12AQHmFSpSsNNwjw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700739535268?e=2147483647&v=beta&t=B2ncwR50vK6yjuF-IU6amLgaRke3J7U44uv_RtxkNCI"
                // src='https://caddcentre.com/blog/wp-content/uploads/2024/06/automation-data-analytic-with-robot-digital-visualization-big-data-scientist1.jpg'
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab7Wep8BP4amVVsYi6qo0ZzPHGvsGl0BPqQ&s" 
                alt="AI and Automation Technology" 
                className="w-full h-auto object-cover transform group-hover:scale-150 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              {/* <span className="w-8 h-[2px] bg-blue-600"></span> */}
              {/* <span className="text-sm font-bold tracking-widest text-[#006FF6] uppercase">
                Managed Service
              </span> */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006FF6]/5 border border-[#006FF6]/20 text-[#006FF6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FF6]"></span>
                </span>
               Data Platform Managed Service
                </div>
            </div>
{/*             
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 leading-tight">
              Unlock Predictive <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Intelligence
              </span>
            </h2> */}
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold  mb-6 leading-tight">
              Reliable End-to-End
 <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02A5E6] via-[#0188F0] to-[#006FF6]">
              Data Platform Operations
              </span>
            </h2>
            
            <p className="text-lg font-600 mb-8 leading-relaxed">
            We deliver 24×5 managed services to ensure your data platforms, analytics systems and cloud environments remain available, secure and continuously optimized. Our proactive operations model focuses on performance, stability and compliance — so your teams can focus on outcomes, not outages.
              {/* We help organizations embed AI into core business operations through responsible, scalable and performance-driven solutions. From predictive analytics to generative AI, we deliver practical intelligence with measurable business impact. */}
            </p>

            {/* <ul className="space-y-4 mb-8">
              {[
                "Data-driven decision making",
                "Automated operational workflows",
                "Scalable Generative AI models"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-600">{item}</span>
                </li>
              ))}
            </ul> */}

            {/* <div className="flex flex-wrap gap-4">
              <Button variant="primary">Explore Solutions</Button>
              <Button variant="outline">View Case Studies</Button>
            </div> */}
          </div>

        </div>
      </div>



      </section>

    <DeliverablesScrollSpy/>
    <Ourmanaged/>
    <ManagedServicesModel/>
    <ServicePricingTable/>

    </>
  )
}

export default ManagedServices
