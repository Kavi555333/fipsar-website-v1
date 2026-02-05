
import React, { useState,type  ChangeEvent,type  FormEvent, useRef  } from 'react';
import { ChevronRight, ShieldCheck, Globe, ExternalLink } from 'lucide-react';
import Swal, { type SweetAlertOptions } from "sweetalert2";


interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  mobileNumber: string;
  countryCode: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    mobileNumber: '',
    countryCode: 'us +1',
    message: '',
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, _setIsSuccess] = useState(false);

const firstNameRef = useRef<HTMLInputElement>(null);
const lastNameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement>(null);
const companyRef = useRef<HTMLInputElement>(null);
const mobileRef = useRef<HTMLInputElement>(null);
const messageRef = useRef<HTMLTextAreaElement>(null);

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setIsSubmitting(false);
//     setIsSuccess(true);
//     setTimeout(() => setIsSuccess(false), 5000);
//   };

const showAlertAndFocus = async <T extends HTMLElement>(
  options: SweetAlertOptions,
  ref: React.RefObject<T | null>
) => {
  await Swal.fire({
    ...options,
    confirmButtonColor: "#02A5E6",
    focusConfirm: true,
    returnFocus: false,
  });

  setTimeout(() => {
    ref.current?.focus();
  }, 50);
};


const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!formData.firstName) {
    await showAlertAndFocus(
      { icon: "warning", title: "First Name Required", text: "Please enter your first name." },
      firstNameRef
    );
    return;
  }

  if (!formData.lastName) {
    await showAlertAndFocus(
      { icon: "warning", title: "Last Name Required", text: "Please enter your last name." },
      lastNameRef
    );
    return;
  }

  if (!formData.workEmail) {
    await showAlertAndFocus(
      { icon: "warning", title: "Email Required", text: "Please enter your work email." },
      emailRef
    );
    return;
  }

  if (!isValidEmail(formData.workEmail)) {
    await showAlertAndFocus(
      { icon: "error", title: "Invalid Email", text: "Please enter a valid email address." },
      emailRef
    );
    return;
  }

  if (!formData.companyName) {
    await showAlertAndFocus(
      { icon: "warning", title: "Company Name Required", text: "Please enter your company name." },
      companyRef
    );
    return;
  }

  if (!formData.mobileNumber) {
    await showAlertAndFocus(
      { icon: "warning", title: "Mobile Number Required", text: "Please enter your mobile number." },
      mobileRef
    );
    return;
  }

  if (!/^\d{7,15}$/.test(formData.mobileNumber.replace(/\D/g, ""))) {
    await showAlertAndFocus(
      { icon: "error", title: "Invalid Mobile Number", text: "Please enter a valid mobile number." },
      mobileRef
    );
    return;
  }

  if (!formData.message) {
    await showAlertAndFocus(
      { icon: "warning", title: "Message Required", text: "Please tell us how we can help." },
      messageRef
    );
    return;
  }

  try {
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message",
      text: "Please wait while we submit your request.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading(),
    });

    await new Promise(resolve => setTimeout(resolve, 1500));

    Swal.fire({
      icon: "success",
      title: "Message Sent Successfully",
      text: "Our team will get back to you shortly.",
      confirmButtonColor: "#02A5E6",
    });

    setFormData({
      firstName: "",
      lastName: "",
      workEmail: "",
      companyName: "",
      mobileNumber: "",
      countryCode: "us +1",
      message: "",
    });

  } catch {
    Swal.fire({
      icon: "error",
      title: "Submission Failed",
      text: "Something went wrong. Please try again later.",
      confirmButtonColor: "#02A5E6",
    });
  } finally {
    setIsSubmitting(false);
  }
};



  const locations = [
    {
      name: "New Jersey",
      address: "170 Township line Road, Suite B2A Hillsborough, NJ - 08844",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.484831201509!2d-74.654848!3d40.481234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ea6f0a6d1a1b%3A0x8e8e8e8e8e8e8e8e!2s170%20Township%20Line%20Rd%2C%20Hillsborough%20Township%2C%20NJ%2008844!5e0!3m2!1sen!2sus!4v1625642456789!5m2!1sen!2sus",
      link: "https://www.google.com/maps/search/?api=1&query=170+Township+line+Road+Suite+B2A+Hillsborough+NJ+08844"
    },
    {
      name: "Chennai",
      address: "Shankaran Avenue 65/8, Radhakrishnan Street Velachery Chennai - 600042",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.412456789!2d80.222345!3d12.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ea1a1a1a1b%3A0x1a1a1a1a1a1a1a1b!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625642456790!5m2!1sen!2sin",
      link: "https://www.google.com/maps/search/?api=1&query=Shankaran+Avenue+65/8+Radhakrishnan+Street+Velachery+Chennai+600042"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden">
      
      {/* Background Layer: Global Connectivity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Global Digital Network"
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-[#02A5E6]/90 mix-blend-multiply"></div>
      </div>

      {/* Brand Geometric Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 z-10">
        {[160, 120, 80, 40].map((size) => (
          <div 
            key={size}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full aspect-square"
            style={{ width: `${size}%` }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Form Card */}
        <div className="bg-[#02A5E6]/40 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 border border-white/20 shadow-2xl text-white">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Send us a message</h2>
            <p className="text-white/70 text-sm font-medium">We'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/90 ml-1">First Name *</label>
                <input  ref={firstNameRef} type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="w-full px-5 py-3 bg-white border-none rounded-xl outline-none text-gray-800 placeholder:text-gray-300 font-medium transition-all focus:ring-4 focus:ring-white/20" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/90 ml-1">Last Name *</label>
                <input   ref={lastNameRef} type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="w-full px-5 py-3 bg-white border-none rounded-xl outline-none text-gray-800 placeholder:text-gray-300 font-medium transition-all focus:ring-4 focus:ring-white/20" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/90 ml-1">Work Email *</label>
                <input  ref={emailRef} type="email" name="workEmail" value={formData.workEmail} onChange={handleInputChange} placeholder="email@company.com" className="w-full px-5 py-3 bg-white border-none rounded-xl outline-none text-gray-800 placeholder:text-gray-300 font-medium transition-all focus:ring-4 focus:ring-white/20" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/90 ml-1">Company</label>
                <input    ref={companyRef} type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Organization" className="w-full px-5 py-3 bg-white border-none rounded-xl outline-none text-gray-800 placeholder:text-gray-300 font-medium transition-all focus:ring-4 focus:ring-white/20" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/90 ml-1">Mobile Number</label>
              <div className="flex gap-2 sm:gap-3 overflow-hidden">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="appearance-none w-[85px] sm:w-[100px] flex-shrink-0 px-3 sm:px-4 py-3 bg-white border-none rounded-xl outline-none text-gray-800 font-bold cursor-pointer transition-all focus:ring-4 focus:ring-white/20"
                >
                  <option value="us +1">us +1</option>
                  <option value="uk +44">uk +44</option>
                  <option value="in +91">in +91</option>
                </select>
                <input 
                 ref={mobileRef}
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="000-000-0000"
                  className="flex-1 min-w-0 px-5 py-3 bg-white border-none rounded-xl outline-none text-gray-800 placeholder:text-gray-300 font-medium transition-all focus:ring-4 focus:ring-white/20"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/90 ml-1">How can we help? *</label>
              <textarea   ref={messageRef} name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Your message..." className="w-full px-5 py-3 bg-white border-none rounded-xl outline-none text-gray-800 placeholder:text-gray-300 font-medium resize-none transition-all focus:ring-4 focus:ring-white/20" />
            </div>

            <button
              disabled={isSubmitting || isSuccess}
              type="submit"
              className={`w-full md:w-auto px-10 py-3.5 rounded-xl font-black text-base transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 ${
                isSuccess ? 'bg-white text-emerald-500' : 'bg-white text-[#02A5E6] hover:bg-white/90 hover:scale-[1.02]'
              }`}
            >
              {isSuccess ? 'Sent Successfully' : isSubmitting ? 'Submitting...' : 'Submit Now'}
              {!isSuccess && !isSubmitting && <ChevronRight className="w-5 h-5 stroke-[3px]" />}
            </button>
          </form>
        </div>

        {/* Content Section */}
        <div className="text-white space-y-8 md:space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
              Let's Connect<br />and Grow.
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-lg leading-relaxed font-medium">
              Join our global network. Our experts are ready to guide your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc, idx) => (
              <div key={idx} className="rounded-[1.5rem] overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl group hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="h-40 relative overflow-hidden bg-gray-200">
                  <iframe 
                    title={loc.name}
                    src={loc.mapUrl}
                    className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-5 bg-[#1E94C5]/80 backdrop-blur-sm flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{loc.name}</h3>
                    <p className="text-[10px] text-white/80 leading-relaxed font-semibold uppercase tracking-wide mb-3">
                      {loc.address}
                    </p>
                  </div>
                  <a 
                    href={loc.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-white/70 transition-colors bg-white/10 w-fit px-3 py-1.5 rounded-lg border border-white/20"
                  >
                    View Map <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 pt-2">
            {[
              { icon: ShieldCheck, label: "Trusted By", value: "Enterprise Secure" },
              { icon: Globe, label: "Network", value: "Global Presence" }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/50">{stat.label}</span>
                  <span className="font-bold text-xs">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
