import React from 'react';
import { Gamepad2, Sparkles, Users, DollarSign, Crown, Menu, X, PlusCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenNewGameModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenNewGameModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'landing', label: 'صفحه اصلی', icon: Gamepad2 },
    { id: 'studio', label: 'استودیو بازی‌سازی', icon: Sparkles },
    { id: 'multiplayer', label: 'لابی چندنفره', icon: Users },
    { id: 'monetization', label: 'درآمدزایی (Adad)', icon: DollarSign },
    { id: 'pricing', label: 'پلن‌های اشتراک', icon: Crown },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0F1D]/90 backdrop-blur-md border-b border-[#00F0FF]/20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            role="button"
            tabIndex={0}
            onClick={() => setActiveTab('landing')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveTab('landing'); }}
            className="flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00F0FF] rounded-xl p-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#00F0FF] to-[#FF6B00] p-0.5 shadow-lg shadow-[#00F0FF]/30">
              <div className="w-full h-full bg-[#0A0F1D] rounded-[14px] flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-[#00F0FF]" />
              </div>
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                گیمرشو <span className="text-xs px-2 py-0.5 rounded-md bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 font-mono">تینز</span>
              </span>
              <span className="text-[11px] text-gray-300 block">AI Game Builder for Teens</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121929]/80 p-1.5 rounded-2xl border border-gray-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00F0FF]/20 to-[#FF6B00]/20 text-[#00F0FF] border border-[#00F0FF]/40 shadow-md shadow-[#00F0FF]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#00F0FF]' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenNewGameModal}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-[#0A0F1D] font-bold text-sm shadow-lg shadow-[#00F0FF]/30 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
            >
              <PlusCircle className="w-5 h-5" />
              <span>ساخت بازی جدید</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenNewGameModal}
              aria-label="ساخت بازی جدید"
              className="p-2.5 rounded-xl bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40"
            >
              <PlusCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="منوی ناوبری"
              className="p-2.5 rounded-xl bg-gray-800 text-gray-200 hover:bg-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F1D] border-b border-gray-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
