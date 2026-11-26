import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { StudioPage } from './components/StudioPage';
import { Gamepad2, Users, DollarSign, Crown, Sparkles, Play, Plus, X, Check, Star, Download, Smartphone, Trophy, ArrowLeft, Send } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('landing');
  const [newGameModalOpen, setNewGameModalOpen] = useState<boolean>(false);
  const [gameTitle, setGameTitle] = useState('');
  const [gameGenre, setGameGenre] = useState('runner');
  const [gameIdea, setGameIdea] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  // Sync hash with activeTab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (['landing', 'studio', 'multiplayer', 'monetization', 'pricing'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = `#/${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreateGameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameTitle.trim()) return;
    setNewGameModalOpen(false);
    setNotification(`بازی «${gameTitle}» با موفقیت در استودیو ایجاد شد! در حال انتقال به محیط ساخت...`);
    setTimeout(() => {
      setNotification(null);
      handleTabChange('studio');
    }, 2000);
    setGameTitle('');
    setGameIdea('');
  };

  return (
    <div className="min-h-dvh bg-[#0A0F1D] text-white flex flex-col font-sans selection:bg-[#00F0FF] selection:text-[#0A0F1D]" dir="rtl">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#121929] border border-[#00F0FF] text-white px-6 py-3 rounded-2xl shadow-2xl shadow-[#00F0FF]/30 flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-[#00F0FF]" />
          <span className="text-sm font-bold">{notification}</span>
        </div>
      )}

      {/* Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        onOpenNewGameModal={() => setNewGameModalOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'landing' && (
          <LandingPage 
            onStartStudio={() => handleTabChange('studio')} 
            onGoPricing={() => handleTabChange('pricing')} 
            onGoMonetization={() => handleTabChange('monetization')} 
          />
        )}

        {activeTab === 'studio' && (
          <StudioPage />
        )}

        {activeTab === 'multiplayer' && (
          <div className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121929] border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold">
                <Users className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>لابی مسابقات زنده نوجوانان</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black">تورنمنت‌های آنلاین و چندنفره</h1>
              <p className="text-gray-400 text-sm">بازی خود را به لابی چندنفره متصل کنید، رکورد ثبت کنید و با دوستانتان رقابت کنید!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'تورنمنت کاپ سایبر رانر', players: '۱,۴۲۰ بازیکن آنلاین', prize: '۵ میلیون تومان جایزه نقدی', status: 'در حال برگزاری', host: 'محمد (۱۶ ساله)' },
                { title: 'مسابقه سریع فضایی', players: '۸۵۰ بازیکن آنلاین', prize: '۳ میلیون تومان جایزه نقدی', status: 'شروع تا ۱۰ دقیقه دیگر', host: 'سارا (۱۵ ساله)' },
                { title: 'چالش رکوردزنی زامبی‌ها', players: '۲,۱۰۰ بازیکن آنلاین', prize: '۱۰ میلیون تومان جایزه نقدی', status: 'ثبت‌نام فعال', host: 'آریا (۱۷ ساله)' },
              ].map((tourney, idx) => (
                <div key={idx} className="bg-[#121929]/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#00F0FF]/50 transition-all shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] font-bold">{tourney.status}</span>
                      <span className="text-xs text-gray-400 font-mono">سازنده: {tourney.host}</span>
                    </div>
                    <h3 className="text-lg font-black text-white mb-2">{tourney.title}</h3>
                    <p className="text-xs text-gray-400 mb-6">{tourney.players}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-[#0A0F1D] border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-gray-400">جایزه نفر اول:</span>
                      <span className="text-xs font-bold text-[#FF6B00]">{tourney.prize}</span>
                    </div>
                    <button 
                      onClick={() => alert(`ثبت‌نام شما در ${tourney.title} با موفقیت انجام شد! آماده رقابت باشید.`)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#00b3bc] text-[#0A0F1D] font-extrabold text-xs shadow-lg hover:shadow-[#00F0FF]/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>ورود به مسابقه و ثبت رکورد</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'monetization' && (
          <div className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121929] border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold">
                <DollarSign className="w-3.5 h-3.5" />
                <span>درآمدزایی واقعی با سرویس تبلیغات عدد (Adad)</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black">تبدیل بازی به منبع درآمد دلاری و تومانی</h1>
              <p className="text-gray-400 text-sm">به ساده‌ترین شکل ممکن تبلیغات بنری و ویدیویی را در بازی اندرویدی خود فعال کنید و درآمد کسب کنید.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div className="bg-[#121929] border border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-black text-white">داستان موفقیت درآمدزایی محمد</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  «من بازی «سایبر رانر» را طی ۴۰ دقیقه در استودیو گیمرشو ساختم. با اتصال به شبکه تبلیغات عدد، در ماه اول بیش از <strong className="text-[#00F0FF]">۴.۵ میلیون تومان</strong> درآمد داشتم که مستقیم به حسابم واریز شد!»
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-xs text-gray-400 block">نصب فعال بازی</span>
                    <span className="text-xl font-black text-white">۱۲,۸۰۰+</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">مجموع درآمد ماهانه</span>
                    <span className="text-xl font-black text-[#FF6B00]">۴,۵۰۰,۰۰۰ تومان</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'اتصال ۱‌کلیکه به پنل تبلیغات', desc: 'بدون نیاز به تنظیمات پیچیده SDK، تبلیغات را با یک کلیک فعال کنید.' },
                  { title: 'تسویه حساب آنی', desc: 'درآمد خود را هر هفته بدون دردسر به حساب بانکی ایران خود منتقل کنید.' },
                  { title: 'آمار زنده و شفاف', desc: 'تعداد کلیک‌ها، نمایش‌ها و درآمد لحظه‌ای را در داشبورد خود ببینید.' },
                ].map((feat, idx) => (
                  <div key={idx} className="bg-[#121929]/60 border border-white/5 p-6 rounded-2xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF] font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{feat.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121929] border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold">
                <Crown className="w-3.5 h-3.5" />
                <span>تعرفه‌ها و اشتراک‌های ویژه نوجوانان</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black">شروع رایگان، ارتقا برای حرفه‌ای‌ها</h1>
              <p className="text-gray-400 text-sm">پلنی را انتخاب کنید که مناسب سرعت بازی‌سازی شماست.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'رایگان (کودکانه)', price: '۰ تومان', desc: 'مناسب شروع یادگیری و ساخت اولین بازی ساده', features: ['ساخت ۳ بازی ساده', 'خروجی وب', 'بدون امکان درآمدزایی', 'پشتیبانی انجمن'], cta: 'شروع رایگان', popular: false },
                { name: 'حرفه‌ای تینز (توصیه شده)', price: '۹۹,۰۰۰ تومان / ماه', desc: 'مناسب نوجوانانی که می‌خواهند درآمد کسب کنند', features: ['بازی نامحدود', 'خروجی APK اندروید', 'اتصال به تبلیغات عدد (درآمدزایی)', 'لابی چندنفره', 'پشتیبانی اختصاصی AI'], cta: 'انتخاب پلن حرفه‌ای', popular: true },
                { name: 'استودیو مستقل', price: '۲۹۹,۰۰۰ تومان / ماه', desc: 'برای تیم‌های کوچک دانش‌آموزی و استودیوهای مستقل', features: ['همه امکانات حرفه‌ای', 'خروجی iOS و اندروید', 'اشتراک‌گذاری تیمی', 'معرفی به ناشران بازی', 'مشاوره درآمدزایی'], cta: 'انتخاب پلن استودیو', popular: false },
              ].map((plan, idx) => (
                <div key={idx} className={`relative bg-[#121929] border rounded-3xl p-8 flex flex-col justify-between transition-all ${plan.popular ? 'border-[#00F0FF] shadow-2xl shadow-[#00F0FF]/20 scale-105' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#FF6B00] text-[#0A0F1D] text-xs font-black shadow-md">
                      محبوب‌ترین پلن سازندگان
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-black text-white mb-2">{plan.name}</h3>
                    <p className="text-xs text-gray-400 mb-6">{plan.desc}</p>
                    <div className="text-3xl font-black text-[#00F0FF] mb-6">{plan.price}</div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-[#00F0FF] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => alert(`شما پلن «${plan.name}» را انتخاب کردید. به درگاه پرداخت امن منتقل می‌شوید.`)}
                    className={`w-full py-3.5 rounded-2xl font-black text-xs transition-all shadow-lg ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-[#00F0FF] to-[#00b3bc] text-[#0A0F1D] hover:shadow-[#00F0FF]/40' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* New Game Modal */}
      {newGameModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="bg-[#121929] border border-[#00F0FF]/30 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setNewGameModalOpen(false)}
              className="absolute top-6 left-6 text-gray-400 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10"
              aria-label="بستن پنجبه"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00F0FF] to-[#FF6B00] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0A0F1D] rounded-[14px] flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-[#00F0FF]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">ساخت پروژه بازی جدید</h3>
                <span className="text-xs text-gray-400">نام بازی و ایده خود را وارد کنید تا هوش مصنوعی استودیو را آماده کند</span>
              </div>
            </div>

            <form onSubmit={handleCreateGameSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">نام بازی اندرویدی</label>
                <input 
                  type="text" 
                  value={gameTitle} 
                  onChange={(e) => setGameTitle(e.target.value)}
                  placeholder="مثال: سایبر نینجا، فرار از کهکشان..." 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0F1D] border border-white/10 text-white text-sm focus:border-[#00F0FF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">سبک بازی (Genre)</label>
                <select 
                  value={gameGenre}
                  onChange={(e) => setGameGenre(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0F1D] border border-white/10 text-white text-sm focus:border-[#00F0FF] focus:outline-none"
                >
                  <option value="runner">دوندگی بی‌پایان (Runner)</option>
                  <option value="platformer">پلتفرمر دو‌بعدی (Platformer)</option>
                  <option value="puzzle">پازل و فکری (Puzzle)</option>
                  <option value="shooter">اکشن و تیراندازی (Shooter)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">توضیح کوتاه ایده (اختیاری)</label>
                <textarea 
                  value={gameIdea}
                  onChange={(e) => setGameIdea(e.target.value)}
                  placeholder="مثال: قهرمان بازی یک روبات است که از موانع لیزری می‌پرد..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0F1D] border border-white/10 text-white text-sm focus:border-[#00F0FF] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setNewGameModalOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#00b3bc] text-[#0A0F1D] text-xs font-black shadow-lg shadow-[#00F0FF]/20 hover:shadow-[#00F0FF]/40 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>ساخت با هوش مصنوعی</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#050811] border-t border-white/5 py-12 mt-20" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00F0FF]/20 border border-[#00F0FF] flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <span className="text-base font-black text-white">گیمرشو تینز</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              اولین پلتفرم ساخت بازی با هوش مصنوعی ویژه نوجوانان مستعد ایرانی. ایده‌هایت را به بازی اندرویدی تبدیل کن و درآمد کسب کن.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">بخش‌های اصلی</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><button onClick={() => handleTabChange('landing')} className="hover:text-[#00F0FF] transition-colors">صفحه اصلی</button></li>
              <li><button onClick={() => handleTabChange('studio')} className="hover:text-[#00F0FF] transition-colors">استودیو بازی‌سازی</button></li>
              <li><button onClick={() => handleTabChange('multiplayer')} className="hover:text-[#00F0FF] transition-colors">لابی مسابقات</button></li>
              <li><button onClick={() => handleTabChange('monetization')} className="hover:text-[#00F0FF] transition-colors">درآمدزایی (عدد)</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">پشتیبانی و راهنمایی</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#/pricing" onClick={(e) => { e.preventDefault(); handleTabChange('pricing'); }} className="hover:text-[#00F0FF] transition-colors">پلن‌های اشتراک</a></li>
              <li><span className="hover:text-[#00F0FF] cursor-pointer" onClick={() => alert('مرکز آموزش: ویدیوهای آموزشی ساخت بازی با هوش مصنوعی در دسترس است.')}>آموزش‌های ویدیویی</span></li>
              <li><span className="hover:text-[#00F0FF] cursor-pointer" onClick={() => alert('انجمن نوجوانان سازنده: به زودی در دسترس قرار می‌گیرد.')}>انجمن سازندگان</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">خبرنامه نوجوانان</h4>
            <p className="text-xs text-gray-400 mb-3">از تورنمنت‌ها و جوایز نقدی مطلع شوید.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="ایمیل شما..." 
                className="bg-[#121929] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00F0FF] flex-1"
              />
              <button 
                onClick={() => alert('با موفقیت در خبرنامه ثبت‌نام کردید!')}
                className="bg-[#FF6B00] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#e65c00] transition-all"
              >
                عضویت
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <span>تمامی حقوق برای پلتفرم گیمرشو تینز محفوظ است © ۱۴۰۳</span>
          <span>طراحی شده با عشق برای نوجوانان خلاق ایران 🇮🇷</span>
        </div>
      </footer>
    </div>
  );
}
