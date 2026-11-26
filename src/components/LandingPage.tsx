import React from 'react';
import { Sparkles, Play, ShieldCheck, Trophy, ArrowLeft, Star, Smartphone, DollarSign, Zap, Gamepad2, Heart, Award } from 'lucide-react';

interface LandingPageProps {
  onStartStudio: () => void;
  onGoPricing: () => void;
  onGoMonetization: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartStudio, onGoPricing, onGoMonetization }) => {
  return (
    <div className="min-h-dvh bg-[#0A0F1D] text-white" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Background glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (Text) */}
            <div className="lg:col-span-7 space-y-6 text-start md:text-right">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121929] border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold shadow-inner">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#FF6B00]" />
                <span>اولین موتور بازی‌سازی هوش مصنوعی مخصوص نوجوانان ۱۲ تا ۱۸ سال</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                رویای ساخت بازی‌ات را به <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF6B00]">واقعیت تبدیل کن!</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                با <strong className="text-white">گیمرشو</strong> بدون نیاز به حتی یک خط کدنویسی، با هوش مصنوعی بازی اندرویدی خودت را بساز، فایل APK خروجی بگیر و مثل <span className="text-[#00F0FF]">محمد (۱۶ ساله)</span> از تماشای نصب بازی‌ات درآمد دلاری و تومانی کسب کن!
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onStartStudio}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00F0FF] to-[#00b3bc] text-[#0A0F1D] font-black text-sm shadow-xl shadow-[#00F0FF]/30 hover:shadow-[#00F0FF]/50 transition-all transform hover:-translate-y-0.5 flex items-center gap-3"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>شروع رایگان در استودیو</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={onGoMonetization}
                  className="px-8 py-4 rounded-2xl bg-[#121929] hover:bg-[#1a243a] text-white border border-[#FF6B00]/40 font-bold text-sm shadow-lg transition-all flex items-center gap-2.5"
                >
                  <DollarSign className="w-5 h-5 text-[#FF6B00]" />
                  <span>راهنمای کسب درآمد و تبلیغات</span>
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#00F0FF]">۱۲,۴۰۰+</div>
                  <div className="text-xs text-gray-400 mt-1">بازی ساخته شده</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#FF6B00]">۴۵ میلیون</div>
                  <div className="text-xs text-gray-400 mt-1">مجموع درآمد کاربران</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">۱۰۰٪</div>
                  <div className="text-xs text-gray-400 mt-1">بدون نیاز به کدنویسی</div>
                </div>
              </div>

            </div>

            {/* Right Media (Gamer Art Showcase) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glowing border card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF] to-[#FF6B00] rounded-3xl blur-md opacity-40 animate-pulse" />
                
                <div className="relative rounded-3xl overflow-hidden bg-[#121929] border border-white/10 shadow-2xl">
                  {/* Subject image: Esports player / gaming */}
                  <img
                    src="/__l5e/assets-v1/d020c4ee-6d67-45a9-9b78-5888ba632b03/prototype-gaming.jpg"
                    alt="نوجوان گیمر در حال ساخت بازی در استودیوی گیمرشو"
                    className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating card overlay */}
                  <div className="absolute bottom-4 inset-x-4 bg-[#0A0F1D]/90 backdrop-blur-md p-4 rounded-2xl border border-[#00F0FF]/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#00F0FF] flex items-center gap-1.5">
                        <Gamepad2 className="w-4 h-4" /> پروژه برتر هفته
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">اندروید APK</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-extrabold text-white text-sm">سایبر رانر (Cyber Runner)</h4>
                        <span className="text-xs text-gray-400">سازنده: محمد (۱۶ ساله از تهران)</span>
                      </div>
                      <div className="text-start">
                        <span className="text-xs text-gray-400 block">نصب: ۱,۴۲۰</span>
                        <span className="text-sm font-bold text-[#FF6B00]">۴.۵ میلیون تومان</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mohamed's Story Section */}
      <section className="py-16 bg-[#121929]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0F1D] rounded-3xl border border-[#00F0FF]/20 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-36 h-36 rounded-3xl bg-gradient-to-tr from-[#00F0FF] to-[#FF6B00] p-1 shadow-xl">
                  <div className="w-full h-full bg-[#121929] rounded-[22px] flex flex-col items-center justify-center text-center p-4">
                    <span className="text-4xl">🎮</span>
                    <span className="font-black text-white text-sm mt-2">محمد</span>
                    <span className="text-xs text-[#00F0FF]">برنامه‌نویس ۱۶ ساله</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold">
                  <Trophy className="w-3.5 h-3.5" /> داستان موفقیت کاربر نمونه
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  «فکر نمی‌کردم بتونم بازی خودم رو توی کافه بازار منتشر کنم!»
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  من محمد هستم، ۱۶ ساله از تهران. همیشه دوست داشتم مثل بازی‌های سایبرپانک یک بازی اکانت‌دو یا دونر بسازم اما اصلاً حوصله یادگیری کدهای سخت جاوا یا سی‌پلاس‌پلاس را نداشتم. با <strong className="text-white">گیمرشو</strong> فقط در ۳ روز بازی <em className="text-[#00F0FF]">سایبر رانر</em> را ساختم، خروجی APK گرفتم و الان بیش از ۱۴۰۰ دانلود و درآمد عالی دارم!
                </p>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>خروجی استاندارد اندروید</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Zap className="w-4 h-4 text-[#FF6B00]" />
                    <span>ساخت با هوش مصنوعی در ۲ دقیقه</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              چرا نوجوانان عاشق <span className="text-[#00F0FF]">گیمرشو</span> هستند؟
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              تمامی ابزارهایی که برای ساخت، تست و کسب درآمد از یک بازی حرفه‌ای موبایل نیاز دارید در یکجا جمع شده است.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-[#121929] p-8 rounded-3xl border border-white/5 hover:border-[#00F0FF]/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center mb-6 group-hover:bg-[#00F0FF] group-hover:text-[#0A0F1D] transition-colors">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">هوش مصنوعی گیمربات (AI GamerBot)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                کافیه ایده بازی‌ت رو به زبان فارسی تایپ کنی؛ هوش مصنوعی کاراکترها، موانع، پس‌زمینه و منطق بازی رو برات خلق میکنه.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#121929] p-8 rounded-3xl border border-white/5 hover:border-[#FF6B00]/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-6 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">دراگ و دراپ و خروجی APK</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                اجزای بازی را با ماوس جابجا کنید، قوانین حرکت را تنظیم کنید و در یک کلیک فایل نصب اندروید (APK) تحویل بگیرید.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#121929] p-8 rounded-3xl border border-white/5 hover:border-[#00F0FF]/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-[#0A0F1D] transition-colors">
                <DollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">درآمدزایی مستقیم (Adad / AdMob)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                کد تبلیغات بنری و ویدیویی پلتفرم‌های ایرانی مثل عدد یا ایوب را با چند کلیک درون بازی قرار دهید و درآمد کسب کنید.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#121929]/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white mb-3">نظرات سازندگان نوجوان</h2>
            <p className="text-gray-400 text-sm">صدها نوجوان مثل شما همین الان در حال ساخت بازی هستند</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0A0F1D] p-8 rounded-3xl border border-white/10 relative">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                «اولش فکر می‌کردم ساخت بازی اندروید خیلی سخته. اما با استودیوی گیمرشو تونستم بازی فضایی خودم رو بسازم و توی گروه مدرسه به دوستانم بفرستم که بازی کنند!»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center font-bold">
                  س
                </div>
                <div>
                  <span className="font-bold text-white text-sm block">سینا (۱۵ ساله)</span>
                  <span className="text-xs text-gray-400">سازنده بازی نبرد کهکشانی</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0F1D] p-8 rounded-3xl border border-white/10 relative">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                «راهنمای کسب درآمد از تبلیغات عدد خیلی کمکم کرد. تونستم روی بازی‌م تبلیغ بذارم و پول خرید اسکین‌های بازی مورد علاقه‌م رو خودم دربیارم!»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center font-bold">
                  ر
                </div>
                <div>
                  <span className="font-bold text-white text-sm block">رها (۱۷ ساله)</span>
                  <span className="text-xs text-gray-400">سازنده بازی فرار از زندان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-[#00F0FF]" />
            <span className="font-bold text-white">گیمرشو تینز (GamerShow)</span>
          </div>
          <div>تمامی حقوق محفوظ است. ساخته شده با عشق برای نوجوانان خلاق ایران ❤️</div>
          <div className="flex items-center gap-4">
            <button onClick={onGoPricing} className="hover:text-[#00F0FF]">پلن‌ها</button>
            <button onClick={onGoMonetization} className="hover:text-[#00F0FF]">درآمدزایی</button>
            <button onClick={onStartStudio} className="hover:text-[#00F0FF]">استودیو</button>
          </div>
        </div>
      </footer>

    </div>
  );
};
