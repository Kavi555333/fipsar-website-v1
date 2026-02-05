import React, { useState } from 'react';
import { 
  Check, 
  Clock, 
  ShieldCheck, 
  Activity, 
  BarChart3, 
  Settings, 
  HelpCircle 
} from 'lucide-react';
import { MessageCircle, MonitorPlay } from 'lucide-react';

/**
 * --- TYPES & INTERFACES ---
 */
const PlanType = {
  SILVER: 'SILVER',
  GOLD: 'GOLD',
  PLATINUM: 'PLATINUM',
} as const;

type PlanType = typeof PlanType[keyof typeof PlanType];

interface FeatureItem {
  text: string;
  highlight?: boolean;
}

interface RowData {
  id: string;
  label: string;
  icon: React.ReactNode;
  silver: string | (string | FeatureItem)[];
  gold: string | (string | FeatureItem)[];
  platinum: string | (string | FeatureItem)[];
  isList?: boolean;
}

/**
 * --- DATA CONFIGURATION ---
 * All content dependency is located here for easy editing.
 */
const TABLE_DATA: RowData[] = [
  {
    id: 'availability',
    label: 'Availability',
    icon: <Activity className="w-5 h-5 text-brand-light" />,
    silver: '99.5%',
    gold: '99.8%',
    platinum: '99.9%',
  },
  {
    id: 'response-time',
    label: 'Response Time',
    icon: <Clock className="w-5 h-5 text-brand-light" />,
    silver: 'Within 4 hours',
    gold: 'Within 2 hours',
    platinum: 'Within 30 minutes',
  },
  {
    id: 'resolution',
    label: 'Resolution',
    icon: <ShieldCheck className="w-5 h-5 text-brand-light" />,
    silver: '24 hours',
    gold: '8 hours',
    platinum: '4 hours',
  },
  {
    id: 'reporting',
    label: 'Reporting',
    icon: <BarChart3 className="w-5 h-5 text-brand-light" />,
    silver: 'Monthly',
    gold: 'Monthly',
    platinum: 'WBR + MBR + QBR',
  },
  {
    id: 'features',
    label: 'Coverage Features',
    icon: <Check className="w-5 h-5 text-brand-light" />,
    isList: true,
    silver: [
      'Business hours support',
      'Incident tickets',
      'Email support',
      'Health monitor',
      'Knowledge base'
    ],
    gold: [
      { text: '24x7 support', highlight: true },
      'Dedicated escalation',
      'Priority resolution',
      'Monthly checks',
      'Root-cause analysis',
      'Change coordination'
    ],
    platinum: [
      { text: '24x5 premium support', highlight: true },
      'Dedicated manager',
      'SLA governance',
      'Automation',
      'Advanced monitoring',
      'Preventative Advisory'
    ]
  },
  {
    id: 'governance',
    label: 'Governance & Mgmt',
    icon: <Settings className="w-5 h-5 text-brand-light" />,
    silver: 'Business hours escalation',
    gold: 'MBR + Change Management Included',
    platinum: 'Enterprise-grade Automation & Risk Mgmt Included'
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: <HelpCircle className="w-5 h-5 text-brand-light" />,
    silver: '$XXX/month',
    gold: '$XXX/month',
    platinum: '$XXX/month'
  }
];

/**
 * --- SUB-COMPONENTS ---
 */

// Renders a list of features with optional highlighting
const FeatureList: React.FC<{ items: (string | FeatureItem)[], alignment?: 'left' | 'center' }> = ({ items }) => {
  return (
    <ul className={`space-y-2 text-sm leading-tight inline-block text-left`}>
      {items.map((item, idx) => {
        const text = typeof item === 'string' ? item : item.text;
        const isHighlight = typeof item !== 'string' && item.highlight;
        
        return (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1 min-w-[6px] w-[6px] h-[6px] rounded-full bg-brand-light shrink-0" />
            <span className={isHighlight ? "font-bold text-slate-800" : "text-slate-600"}>
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

/**
 * --- MAIN COMPONENT ---
 */
export const ServicePricingTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlanType>(PlanType.GOLD);

  // Helper to render cell content based on data type
  const renderCellContent = (content: string | (string | FeatureItem)[], isList: boolean, isPricing: boolean, highlightColorClass: string) => {
    if (isPricing) {
      return (
        <span className={`text-xl font-bold italic ${highlightColorClass}`}>
          {content as string}
        </span>
      );
    }
    if (isList && Array.isArray(content)) {
      return <FeatureList items={content} />;
    }
    return <span className="font-medium text-slate-700">{content as string}</span>;
  };

  // Helper for mobile header styles using arbitrary values for the specific palette
  const getHeaderStyles = (type: PlanType) => {
    switch (type) {
      case PlanType.SILVER:
        return 'bg-[#006FF6] text-white'; 
      case PlanType.GOLD:
        return 'bg-[#3989FF] text-white'; 
      case PlanType.PLATINUM:
        return 'bg-[#1560CE] text-white'; 
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const getSubTitle = (type: PlanType) => {
    switch (type) {
      case PlanType.SILVER: return 'Essential support for steady operations';
      case PlanType.GOLD: return ' Advanced support for critical workloads';
      case PlanType.PLATINUM: return 'Enterprise model with automation and governance';
      default: return '';
    }
  };

  return (
    <>
    
        <div className="container mt-16 px-8 mx-auto relative">
      
      {/* <div className="max-w-7xl mx-auto mb-12 text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Choose the Plan That Fits Your Biz
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Select a service level that matches your business needs. From essential coverage to enterprise-grade management.
        </p>
      </div> */}


           <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-4xl font-extrabold font-black text-slate-900 tracking-tight relative z-10">
                  Service Plans
            </h2>
            {/* Underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#006FF6] rounded-full"></div>
          </div>
          <p className="mt-8 text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          {/* Select a service level that matches your business needs. From essential coverage to enterprise-grade management. */}
            Flexible Managed Services Built Around Your Business.
          </p>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          {/* Select a service level that matches your business needs. From essential coverage to enterprise-grade management. */}
            Every organization has different operational needs. That’s why we offer flexible managed services — from essential support to enterprise-grade operations.
          </p>
        </div>
  
      <div className="lg:hidden">
        {/* Tabs */}
        <div className="flex rounded-t-xl overflow-hidden shadow-sm">
          {[PlanType.SILVER, PlanType.GOLD, PlanType.PLATINUM].map((plan) => {
            const isActive = activeTab === plan;
            let activeClass = '';
            
            if (isActive) {
               if (plan === PlanType.SILVER) activeClass = 'bg-[#006FF6] text-white';
               if (plan === PlanType.GOLD) activeClass = 'bg-[#3989FF] text-white';
               if (plan === PlanType.PLATINUM) activeClass = 'bg-[#1560CE] text-white';
            } else {
               activeClass = 'bg-white text-slate-500 hover:bg-slate-50 border-b-2 border-slate-100';
            }

            return (
              <button
                key={plan}
                onClick={() => setActiveTab(plan)}
                className={`flex-1 py-4 text-sm sm:text-base font-bold transition-colors duration-200 uppercase tracking-wide ${activeClass}`}
              >
                {plan}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="bg-white shadow-xl rounded-b-xl border border-t-0 border-slate-200 overflow-hidden">
          {/* Mobile Header Banner */}
          <div className={`${getHeaderStyles(activeTab)} p-6 text-center transition-colors duration-300`}>
             <h3 className="text-2xl font-bold mb-1 capitalize">{activeTab.toLowerCase()}</h3>
             <p className="text-white/90 text-sm font-medium">{getSubTitle(activeTab)}</p>
          </div>

          <div className="divide-y divide-slate-100">
            {TABLE_DATA.map((row) => {
               const planKey = activeTab.toLowerCase() as keyof Pick<RowData, 'silver' | 'gold' | 'platinum'>;
               const content = row[planKey];
               const isPricing = row.id === 'pricing';
               
               let pricingColor = 'text-slate-700';
               if (activeTab === PlanType.SILVER) pricingColor = 'text-[#006FF6]';
               if (activeTab === PlanType.GOLD) pricingColor = 'text-[#3989FF]';
               if (activeTab === PlanType.PLATINUM) pricingColor = 'text-[#1560CE]';

               return (
                 <div key={row.id} className={`p-5 ${isPricing ? 'bg-slate-50' : ''}`}>
                   <div className="flex items-center gap-2 mb-3 text-[#3989FF] font-bold uppercase text-xs tracking-wider">
                      {row.icon}
                      <span>{row.label}</span>
                   </div>
                   <div className="pl-7">
                      {renderCellContent(content, !!row.isList, isPricing, pricingColor)}
                   </div>
                 </div>
               );
            })}
          </div>
        </div>
      </div>


  
      <div className="hidden lg:block shadow-xl rounded-xl overflow-hidden border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-center border-collapse">
            <thead>
              {/* Header Row */}
              <tr>
                {/* Metric Header */}
                <th className="w-1/4 bg-[#1560CE] p-0 align-bottom">
                  <div className="h-full flex flex-col justify-end p-6 text-left">
                    <h3 className="text-white text-xl font-bold tracking-wide">Metric</h3>
                  </div>
                </th>

                {/* Silver Header (#006FF6) */}
                <th className="w-1/4 bg-[#006FF6] p-0 align-bottom border-l border-white/10">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-1">Silver</h3>
                    <p className="text-white/90 text-sm font-medium">Essential support for steady operations</p>
                  </div>
                </th>

                {/* Gold Hedder (#3989FF) */}
                <th className="w-1/4 bg-[#3989FF] p-0 relative align-bottom border-l border-white/20">
                  {/* Recommended Badge */}
                  <div className="absolute top-0 left-0 right-0 bg-[#1560CE] text-white text-xs font-bold py-1 uppercase tracking-widest shadow-sm">
                    Recommended
                  </div>
                  <div className="p-6 pt-10">
                    <h3 className="text-white text-2xl font-bold mb-1">Gold</h3>
                    <p className="text-white/90 text-sm font-medium">Advanced support for critical workloads</p>
                  </div>
                </th>

                {/* Platinum Header (#1560CE) */}
                <th className="w-1/4 bg-[#1560CE] p-0 align-bottom border-l border-white/20">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-1">Platinum</h3>
                    <p className="text-white/80 text-sm font-medium">Enterprise model with automation</p>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {TABLE_DATA.map((row, index) => {
                const isEven = index % 2 === 0;
                const isPricing = row.id === 'pricing';
                // Special padding for pricing row
                const rowClass = isPricing ? 'bg-white' : (isEven ? 'bg-white' : 'bg-slate-50/50');
                const cellPadding = isPricing ? 'py-8 px-4' : 'py-5 px-4';

                return (
                  <tr key={row.id} className={`${rowClass} hover:bg-slate-50 transition-colors duration-150`}>
                    {/* Label Column */}
                    <td className={`text-left ${cellPadding} border-r border-slate-100`}>
                      <div className="flex items-center gap-3 pl-2">
                        <div className="shrink-0">{row.icon}</div>
                        <span className="font-semibold text-slate-700">{row.label}</span>
                      </div>
                    </td>

                    {/* Silver Value */}
                    <td className={`${cellPadding} border-r border-slate-100 align-top`}>
                       {renderCellContent(row.silver, !!row.isList, isPricing, 'text-[#006FF6]')}
                    </td>

                    {/* Gold Value */}
                    <td className={`${cellPadding} border-r border-slate-100 align-top bg-[#3989FF]/5 relative`}>
                      {/* Subtle highlight for the Gold column body */}
                      {renderCellContent(row.gold, !!row.isList, isPricing, 'text-[#3989FF]')}
                    </td>

                    {/* Platinum Value */}
                    <td className={`${cellPadding} align-top`}>
                       {renderCellContent(row.platinum, !!row.isList, isPricing, 'text-[#1560CE]')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>


     <div className="relative overflow-hidden rounded-2xl bg-[#006FF6] shadow-2xl mt-16 mb-12">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 px-8 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-white tracking-tight mb-6 drop-shadow-sm">
          Ready for Stress-Free Operations?
        </h2>
        
        <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Let us manage your platforms while you focus on growing your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#006FF6] hover:text-[#1560CE] font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>Talk to Our Experts</span>
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-[#1560CE]/20 backdrop-blur-sm border border-white/40 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5">
            <MonitorPlay className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>Request a Demo</span>
          </button>
        </div>
      </div>
    </div>
    </>

  );
};