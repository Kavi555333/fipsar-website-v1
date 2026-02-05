import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown,
   Layers, 
  BarChart3,Brain ,ShieldCheck, ServerCog, RefreshCcw, Activity       
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Types ---

interface SubItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavItem {
  id: string;
  label: string;
  href?: string;
  type: 'link' | 'dropdown' | 'mega';
  children?: SubItem[] | { title: string; items: SubItem[] }[];
}

// --- NAV ITEMS ---

// partial: set internal route paths
const NAV_ITEMS: NavItem[] = [
  { id: 'partnerships', label: 'Home', type: 'link', href: '/' },
  {
    id: 'services',
    label: 'Services',
    type: 'dropdown',
    children: [
      { label: 'Data Engineering & Integration', href: '/service/dataengineering', description: '...', icon: <Layers size={16} /> },
      { label: 'Business Intelligence & Visualization', href: '/service/businessIntelligence', description: '...', icon: <BarChart3  size={16} /> },
      { label: 'AI & Machine Learning', href: 'service/aimachine', description: '...', icon: <Brain  size={16} /> },
      { label: 'Salesforce Life Science', href: 'service/salesforce', description: '...', icon: <Activity   size={16} /> },
      { label: 'Data Governance', href: '/service/governance', description: '...', icon: <ShieldCheck  size={16} /> },
      { label: 'Data Platform Managed Services', href: '/service/managedservice', description: '...', icon: <ServerCog  size={16} /> },
      { label: 'Digital Transformation', href: '/service/digitaltransformation', description: '...', icon: <RefreshCcw  size={16} /> },
    ] as SubItem[]
  },
  { id: 'indsutrys', label: 'Industry', type: 'link', href: '/industry' },
  { id: 'solutions', label: 'Solutions', type: 'link', href: '/solutions' },
  // { id: 'partnerships', label: 'Partnerships', type: 'link', href: '/partners' },
  { id: 'insights', label: 'Insights', type: 'link', href: '/insights' },
  { id: 'about', label: 'About Us', type: 'link', href: '/aboutus' },
  { id: 'career', label: 'Career', type: 'link', href: '/career' },
];

// --- Single Header Component (includes Mobile Drawer internally) ---

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string[]>([]); // for mobile

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = (id: string) => {
    setExpanded(curr => curr.includes(id) ? curr.filter(i => i !== id) : [...curr, id]);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-100 transition-all duration-300 border-b shadow-sm
          ${isScrolled
            ? 'bg-white backdrop-blur-md shadow-sm py-3 border-gray-200'
            : 'bg-white backdrop-blur-sm py-4 border-transparent'
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50">
                <Link to="/">
                <img
                    src="https://www.fipsar.com/assets/img/Fipsar-logo.jpg"
                    width="110"
                    alt="Fipsar Logo"
                    style={{ cursor: 'pointer' }}
                />
                </Link>
            </div>

            {/* Desktop Nav */}
    {/* Desktop Nav */}
            <nav
            className="hidden lg:flex items-center gap-1 h-full"
            role="navigation"
            aria-label="Primary"
            >
            {NAV_ITEMS.map((item) => (
                <div
                key={item.id}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => {
                    setTimeout(() => {
                    setActiveDropdown((curr) => (curr === item.id ? null : curr));
                    }, 120);
                }}
                >
                {/* TOP LINK */}
                <Link
                    to={item.href || '#'}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-[16px] font-bold rounded-full transition-all duration-200
                    ${
                        activeDropdown === item.id
                        ? 'text-[#006FF6] bg-indigo-50/80'
                        : 'text-[#424242] hover:text-[#006FF6] hover:bg-slate-50'
                    }
                    `}
                >
                    {item.label}
                    {item.type === 'dropdown' && (
                    <ChevronDown
                        size={14}
                        className={`ml-0.5 transition-transform duration-300 ease-out
                        ${activeDropdown === item.id ? 'rotate-180 text-[#006FF6]' : 'text-slate-400'}
                        `}
                    />
                    )}
                </Link>

                {/* DROPDOWN */}
                {item.type === 'dropdown' && (
                    <div
                    className={`
                        absolute left-0 top-full mt-3 w-72
                        bg-white rounded-2xl border border-slate-100
                        shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]
                        z-50
                        transform-gpu origin-top
                        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                        will-change-[opacity,transform]
                        ${
                        activeDropdown === item.id
                            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                        }
                    `}
                    >
                  
                    <div className="absolute -top-3 left-0 right-0 h-3" />

                    <div className="p-2 space-y-1">
                        {(item.children as SubItem[])?.map((sub, idx) => (
                        <Link
                            key={idx}
                            to={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="
                            flex items-start gap-3 p-3 rounded-xl
                            transition-all   duration-200 ease-out
                            hover:bg-slate-50 hover:translate-x-1
                            group
                            "
                        >
                            {sub.icon && (
                            <div className="mt-0.5 text-slate-400 group-hover:text-[#006FF6] transition-colors">
                                {sub.icon}
                            </div>
                            )}
                            <span className="text-sm font-semibold text-slate-700 group-hover:text-[#006FF6]">
                            {sub.label}
                            </span>
                        </Link>
                        ))}
                    </div>
                    </div>
                )}
                </div>
            ))}
            </nav>


            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-6 w-px bg-slate-200"></div>
              <Link
                    to="/contact"
                    className="px-6 py-2.5 bg-slate-900 hover:bg-[#006FF6] text-white text-sm font-bold rounded-full transition-colors shadow-lg shadow-slate-200"
                >
                    Contact us
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-[#424242] hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (internal) */}
      <>
        <div
          className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`
          fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-out lg:hidden
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <span className="font-bold text-lg text-slate-800">Navigation</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full" aria-label="Close menu"><X size={20} /></button>
          </div>
          <div className="overflow-y-auto h-[calc(100%-80px)] p-4">
<ul className="space-y-1">
  {NAV_ITEMS.map((item) => {
    const isExpanded = expanded.includes(item.id);
    const hasChildren = item.type !== 'link';
    return (
      <li key={item.id} className="border-b border-gray-50 last:border-none">
        {hasChildren ? (
          <div>
            <button
              onClick={() => toggleMobile(item.id)}
              aria-expanded={isExpanded}
              aria-controls={`mobile-sub-${item.id}`}
              className="flex items-center justify-between w-full py-4 text-left text-slate-700 font-bold"
            >
              <span>{item.label}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#006FF6]' : 'text-slate-400'}`}
              />
            </button>

            {/* Collapsible container: use max-h transition for smoother collapse */}
            <div
              id={`mobile-sub-${item.id}`}
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
              style={{ maxHeight: isExpanded ? '1000px' : '0px' }}
            >
              <div className="bg-slate-50/50 rounded-lg p-2">
                {item.type === 'mega' ? (
                  <div className="p-4 space-y-6">
                    {(item.children as { title: string; items: SubItem[] }[]).map((group, gi) => (
                      <div key={gi}>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          {group.title}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((sub, si) => {
                            const isExternal = !!sub.href && /^https?:\/\//.test(sub.href);
                            return (
                              <li key={si}>
                                {isExternal ? (
                                  <a
                                    href={sub.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-md text-[#424242] hover:text-[#006FF6] py-1"
                                  >
                                    {sub.label}
                                  </a>
                                ) : (
                                  <Link
                                    to={sub.href || '/'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-sm text-[#424242] hover:text-[#006FF6] py-1"
                                  >
                                    {sub.label}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-2">
                    {(item.children as SubItem[]).map((sub, i) => {
                      const isExternal = !!sub.href && /^https?:\/\//.test(sub.href);
                      return isExternal ? (
                        <a
                          key={i}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 text-sm text-[#424242] hover:text-[#006FF6] hover:bg-white rounded-md transition-colors"
                        >
                          <div className="font-bold">{sub.label}</div>
                          {/* {sub.description && <div className="text-xs text-slate-400 mt-0.5">{sub.description}</div>} */}
                        </a>
                      ) : (
                        <Link
                          key={i}
                          to={sub.href || '/'}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block p-3 text-sm text-[#424242] hover:text-[#006FF6] hover:bg-white rounded-md transition-colors"
                        >
                          <div className="font-bold">{sub.label}</div>
                          {/* {sub.description && <div className="text-xs text-slate-400 mt-0.5">{sub.description}</div>} */}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // top-level simple link (no children)
          (/^https?:\/\//.test(item.href || '') ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-4 text-slate-700 font-bold hover:text-[#006FF6]"
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.href || '/'}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 text-slate-700 font-bold hover:text-[#006FF6]"
            >
              {item.label}
            </Link>
          ))
        )}
      </li>
    );
  })}
</ul>

          </div>
        </div>
      </>
    </>
  );
}
