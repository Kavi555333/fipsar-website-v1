// import React from 'react'

const HeroSectionIC = () => {
  return (
    <>
      
        <div className='container mx-auto lg:mt-36  max-w-7xl sm:px-12   px-4 '>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className=''>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#02A5E6]/5 border border-[#02A5E6]/20 text-[#02A5E6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02A5E6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#02A5E6]"></span>
                        </span>
                        Partnership
                    </div>    
                    <div className='mt-6'>
                        <h1 className="text-4xl sm:text-5xl lg:text-4xl leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-tight relative"  style={{ lineHeight: "42px" }}>
                            Powering Innovation Through <br />
                            <span className="text-[#02A5E6]">  Strategic Collaboration</span> <br />
                        </h1>
                    </div>
                    <div className='mt-6'>
                        <p className="max-w-2xl mx-auto  text-lg  leading-relaxed font-normal opacity-90">
                            We collaborate with platform leaders and cloud providers to deliver innovation at scale. Our ecosystem integrates best-in-class technologies across data, cloud, analytics  and AI to build high-impact solutions tailored to Life Sciences.
                        </p>
                    </div>
                </div>
                <div className=''>
                   
                    <div style={{position: 'relative'}} className='attached-hero-image'>
                        <div style={{position: 'relative'}} className='Bbanner-video-align'>
                               <img src="https://www.yugabyte.com/wp-content/uploads/2025/01/powering-innovation-through-partnerships-blog.jpg"
                               alt="dfds"/>
                        </div>    
                    </div> 


                 </div>
            </div>
        </div>






    </>
  )
}

export default HeroSectionIC
