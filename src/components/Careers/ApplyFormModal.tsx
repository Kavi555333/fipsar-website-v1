
import React, { useEffect } from 'react';
import { X, ChevronDown, Paperclip } from 'lucide-react';

interface ApplyFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyFormModal: React.FC<ApplyFormModalProps> = ({ isOpen, onClose }) => {
  const BRAND_BLUE = "#02A5E6";

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      {/* Overlay/Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#02A5E6] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden isolate animate-slideUp"
        style={{ 
          background: `linear-gradient(145deg, ${BRAND_BLUE} 0%, #0088C2 100%)` 
        }}
      >
        {/* Background Decorative Diagonal */}
        <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M100 0 L0 100 L100 100 Z" fill="white" />
          </svg>
        </div>

        {/* Close Button */}
        <div className="absolute top-5 right-5 z-30">
          <button 
            onClick={onClose}
            className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all border border-white/10 active:scale-95"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1 px-8 py-10 md:px-12 md:py-12 custom-scrollbar">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-white font-medium text-sm block tracking-wide opacity-90">Name :</label>
                <input 
                  type="text" 
                  className="w-full h-11 px-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-white/40 outline-none shadow-sm text-gray-800 text-sm transition-all"
                  placeholder=""
                />
              </div>

              {/* Position Field */}
              <div className="space-y-1.5">
                <label className="text-white font-medium text-sm block tracking-wide opacity-90">Position For Applying :</label>
                <div className="relative">
                  <select 
                    className="w-full h-11 px-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-white/40 outline-none shadow-sm text-gray-800 text-sm appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled></option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="uiux">UI/UX Designer</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#02A5E6] pointer-events-none" size={16} />
                </div>
              </div>

              {/* E-Mail Field */}
              <div className="space-y-1.5">
                <label className="text-white font-medium text-sm block tracking-wide opacity-90">E - Mail :</label>
                <input 
                  type="email" 
                  placeholder="| @gmail.com"
                  className="w-full h-11 px-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-white/40 outline-none shadow-sm text-gray-800 text-sm placeholder:text-gray-300 transition-all"
                />
              </div>

              {/* LinkedIn Field */}
              <div className="space-y-1.5">
                <label className="text-white font-medium text-sm block tracking-wide opacity-90">LinkedIn Profile URL</label>
                <input 
                  type="url" 
                  placeholder="| url here"
                  className="w-full h-11 px-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-white/40 outline-none shadow-sm text-gray-800 text-sm placeholder:text-gray-300 transition-all"
                />
              </div>

              {/* Phone Number Field */}
              <div className="space-y-1.5">
                <label className="text-white font-medium text-sm block tracking-wide opacity-90">Phone Number :</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="+91"
                    className="w-full h-11 px-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-white/40 outline-none shadow-sm text-gray-800 text-sm transition-all"
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#02A5E6] pointer-events-none" size={16} />
                </div>
              </div>

              {/* Portfolio Field */}
              <div className="space-y-1.5">
                <label className="text-white font-medium text-sm block tracking-wide opacity-90">Portfolio | GitHub URL</label>
                <input 
                  type="url" 
                  placeholder="| url here"
                  className="w-full h-11 px-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-white/40 outline-none shadow-sm text-gray-800 text-sm placeholder:text-gray-300 transition-all"
                />
              </div>

              {/* Upload Resume Area */}
              <div className="space-y-1.5">
                <label className="text-white font-medium text-sm block tracking-wide opacity-90">Upload Your Resume :</label>
                <div className="relative h-24 bg-white rounded-xl flex flex-col items-center justify-center px-6 cursor-pointer group hover:bg-white/95 transition-all shadow-sm border-2 border-dashed border-gray-200">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <Paperclip className="text-[#02A5E6] mb-1 opacity-40 group-hover:opacity-100 transition-opacity" size={20} />
                  <span className="text-gray-400 italic text-xs tracking-tight">| accepts pdf , docs</span>
                </div>
              </div>

              {/* Upload Cover Letter Area */}
              <div className="space-y-1.5">
                <label className="text-white font-medium text-sm block tracking-wide opacity-90">Upload Cover Letter :</label>
                <div className="relative h-24 bg-white rounded-xl flex flex-col items-center justify-center px-6 cursor-pointer group hover:bg-white/95 transition-all shadow-sm border-2 border-dashed border-gray-200">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <Paperclip className="text-[#02A5E6] mb-1 opacity-40 group-hover:opacity-100 transition-opacity" size={20} />
                  <span className="text-gray-400 italic text-xs tracking-tight">| accepts pdf , docs</span>
                </div>
              </div>
            </div>

            {/* Additional Notes Textarea */}
            <div className="space-y-1.5 pt-2">
              <label className="text-white font-medium text-sm block tracking-wide opacity-90">Additional Notes | Message :</label>
              <textarea 
                rows={3}
                className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-white/40 outline-none shadow-sm text-gray-800 text-sm resize-none transition-all placeholder:text-gray-200"
                placeholder=" "
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button 
                type="submit"
                className="bg-[#1D63D3] hover:bg-[#164DB0] text-white font-bold py-3 px-16 rounded-lg shadow-lg transition-all active:scale-95 text-base tracking-wider uppercase"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyFormModal;
