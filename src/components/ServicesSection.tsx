import React, { useState } from 'react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ArrowUpRight, Check, Plus, Layers, Zap, Radio, Video, Camera, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEnquiry }) => {
  const [activeCard, setActiveCard] = useState<string>('digital');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'digital':
        return <Zap className="w-5 h-5 text-[#ff3b00]" />;
      case 'atl':
        return <Radio className="w-5 h-5 text-[#ff3b00]" />;
      case 'btl':
        return <Layers className="w-5 h-5 text-[#ff3b00]" />;
      case 'content':
        return <Camera className="w-5 h-5 text-[#ff3b00]" />;
      case 'commercial-production':
        return <Video className="w-5 h-5 text-[#ff3b00]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#ff3b00]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#ff3b00]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
              <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
                // Capabilities & Ecosystem
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
              WE SCALE ACROSS <br className="hidden sm:inline" />
              <span className="text-[#ff3b00]">EVERY TOUCHPOINT.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
              True scaling demands synchronicity. We eliminate fragmented agency handoffs by combining media, film production, digital algorithms, and on-ground spectacle under one unified roof.
            </p>
          </div>
        </div>

        {/* Large Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Service Cards Column */}
          <div className="lg:col-span-12 space-y-6">
            {SERVICES.map((service, index) => {
              const isExpanded = activeCard === service.id;
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onMouseEnter={() => setActiveCard(service.id)}
                  onClick={() => setActiveCard(service.id)}
                  className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                    isExpanded
                      ? 'bg-neutral-900/90 border-[#ff3b00]/80 shadow-2xl shadow-[#ff3b00]/10 ring-1 ring-[#ff3b00]/40'
                      : 'bg-[#121212] border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  {/* Subtle Background imagery on hover */}
                  <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500 overflow-hidden pointer-events-none">
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      className="w-full h-full object-cover filter contrast-125 brightness-50 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    {/* Top Row: Code, Title, Icon, Arrow */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-800/80 pb-6">
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-mono-tech text-sm text-[#ff3b00] font-bold">
                          // {service.code}
                        </span>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight group-hover:text-white">
                          {service.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 text-xs font-mono-tech text-neutral-400 bg-neutral-800/80 px-3 py-1.5 rounded-full">
                          {getServiceIcon(service.id)}
                          <span>{service.subtitle}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectServiceForEnquiry(service.title);
                          }}
                          className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-[#ff3b00] text-neutral-300 group-hover:text-white flex items-center justify-center transition-all duration-300"
                          title="Inquire about this capability"
                        >
                          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>

                    {/* Middle Copy: Distinctive statement */}
                    <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-5">
                        <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight italic">
                          “{service.copy}”
                        </p>
                        <p className="text-xs font-mono-tech text-neutral-400 mt-2">
                          {service.metrics}
                        </p>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="md:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 bg-black/40 px-3 py-2 rounded-lg border border-neutral-800/60"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] shrink-0"></span>
                              <span className="font-sans font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                      <span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-500">
                        Available in Kolkata Studio & Pan-India Deployment
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectServiceForEnquiry(service.title);
                        }}
                        className="text-xs font-mono-tech uppercase tracking-wider text-neutral-300 hover:text-[#ff3b00] flex items-center gap-1.5 font-bold transition-colors"
                      >
                        <span>SCALE WITH {service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
