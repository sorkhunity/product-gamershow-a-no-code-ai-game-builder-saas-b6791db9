import React, { useState } from 'react';
import { Sparkles, Gamepad2, Layers, Download, Share2, Play, CheckCircle, RefreshCw, Smartphone } from 'lucide-react';

interface StudioPageProps {
  addToast: (msg: string) => void;
}

interface CanvasElement {
  id: string;
  type: 'player' | 'enemy' | 'coin' | 'platform' | 'background';
  name: string;
  x: number;
  y: number;
  color: string;
  imageUrl?: string;
}

export const StudioPage: React.FC<StudioPageProps> = ({ addToast }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [gameTitle, setGameTitle] = useState('سایبر رانر جوان');
  const [canvasElements, setCanvasElements] = useState<CanvasElement[]>([
    { id: '1', type: 'player', name: 'کاراکتر سایبر', x: 50, y: 150, color: '#00F0FF' },
    { id: '2', type: 'platform', name: 'زمین پلتفرم', x: 0, y: 280, color: '#131B2E' },
    { id: '3', type: 'coin', name: 'سکه امتیاز', x: 200, y: 180, color: '#FF6B00' },
    { id: '4', type: 'enemy', name: 'ربات دشمن', x: 300, y: 150, color: '#ff3366' },
  ]);
  const [selectedElementId, setSelectedElementId] = useState<string | null>('1');
  const [isPlayingTest, setIsPlayingTest] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportedApkUrl, setExportedApkUrl] = useState<string | null>(null);

  // Asset library items
  const assetLibrary = [
    { id: 'a1', name: 'قهرمان نئونی', type: 'player', color: '#00F0FF' },
    { id: 'a2', name: 'ربات گارد', type: 'enemy', color: '#FF6B00' },
    { id: 'a3', name: 'کریستال انرژی', type: 'coin', color: '#00e5ff' },
    { id: 'a4', name: 'سکو معلق', type: 'platform', color: '#1a243c' },
    { id: 'a5', name: 'مانع لیزری', type: 'enemy', color: '#ff0055' },
  ];

  const handleGenerateAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      const newElem: CanvasElement = {
        id: Date.now().toString(),
        type: prompt.includes('دشمن') ? 'enemy' : prompt.includes('سکه') ? 'coin' : 'platform',
        name: prompt.slice(0, 20),
        x: Math.floor(Math.random() * 250) + 20,
        y: Math.floor(Math.random() * 150) + 50,
        color: prompt.includes('دشمن') ? '#ff3366' : '#FF6B00'
      };
      setCanvasElements([...canvasElements, newElem]);
      setPrompt('');
      addToast('هوش مصنوعی گیمربات دارایی جدید را با موفقیت تولید کرد!');
    }, 1500);
  };

  const handleAddAssetToCanvas = (asset: typeof assetLibrary[0]) => {
    const newElem: CanvasElement = {
      id: Date.now().toString(),
      type: asset.type as any,
      name: asset.name,
      x: 100 + (canvasElements.length * 20) % 180,
      y: 120,
      color: asset.color
    };
    setCanvasElements([...canvasElements, newElem]);
    addToast(`${asset.name} به بوم بازی اضافه شد!`);
  };

  const handleExportApk = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportedApkUrl('cyber-runner-v1.0.apk');
      addToast('فایل APK اندروید با موفقیت ساخته شد و آماده دانلود است!');
    }, 2500);
  };

  return (
    <div className="min-h-dvh bg-[#0A0F1D] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-[#131B2E] p-6 rounded-3xl border border-[#00F0FF]/30">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-bold">استودیوی بازی‌سازی زنده</span>
              <span className="text-xs text-gray-400">شناسه پروژه: #GS-8842</span>
            </div>
            <input
              type="text"
              value={gameTitle}
              onChange={(e) => setGameTitle(e.target.value)}
              className="text-2xl font-black bg-transparent border-b border-dashed border-[#00F0FF]/40 focus:border-[#00F0FF] outline-none text-white py-1 w-full max-w-sm"
              placeholder="نام بازی خود را بنویسید..."
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingTest(!isPlayingTest)}
              className="flex items-center gap-2 px-5 py-3 bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 border border-[#00F0FF]/40 text-[#00F0FF] font-bold rounded-2xl transition-all"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{isPlayingTest ? 'توقف پیش‌نمایش' : 'تست زنده بازی'}</span>
            </button>

            <button
              onClick={handleExportApk}
              disabled={isExporting}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00F0FF] to-[#0088FF] text-black font-black rounded-2xl shadow-lg shadow-[#00F0FF]/30 hover:scale-105 transition-all disabled:opacity-50"
            >
              {isExporting ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>درحال ساخت APK...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>خروجی APK اندروید</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* APK Download Ready Banner */}
        {exportedApkUrl && (
          <div className="mb-8 p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">فایل اندروید ({exportedApkUrl}) با موفقیت آماده شد!</h4>
                <p className="text-xs text-gray-300">می‌توانید فایل را دانلود کرده و مستقیماً روی گوشی هوشمند نصب کنید.</p>
              </div>
            </div>
            <button
              onClick={() => addToast('دانلود فایل APK آغاز شد...')}
              className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-black font-black rounded-xl transition-all text-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>دانلود مستقیم APK</span>
            </button>
          </div>
        )}

        {/* Main Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left / Top Sidebar: AI GamerBot & Asset Library */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* AI GamerBot Box */}
            <div className="bg-[#131B2E] p-6 rounded-3xl border border-[#00F0FF]/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-black text-white text-lg">هوش مصنوعی گیمر بات</h3>
              </div>

              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                هر چه می‌خواهی توصیف کن؛ مثلاً: «یک ربات پرنده با اسلحه لیزری و رنگ صورتی بساز».
              </p>

              <form onSubmit={handleGenerateAI} className="space-y-3">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="ایده خود را اینجا بنویسید..."
                  rows={3}
                  className="w-full bg-[#0A0F1D] border border-[#00F0FF]/30 rounded-2xl p-3 text-white text-sm focus:outline-none focus:border-[#00F0FF] resize-none"
                />
                <button
                  type="submit"
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full py-3 bg-[#FF6B00] hover:bg-[#FF8822] text-black font-black rounded-xl transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>هوش مصنوعی در حال خلق...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>تولید با هوش مصنوعی</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Asset Library */}
            <div className="bg-[#131B2E] p-6 rounded-3xl border border-[#00F0FF]/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#FF6B00]" />
                  <h3 className="font-black text-white text-lg">کتابخانه دارایی‌ها</h3>
                </div>
                <span className="text-xs text-gray-400">آماده کلیک</span>
              </div>

              <div className="space-y-2">
                {assetLibrary.map((asset) => (
                  <div
                    key={asset.id}
                    onClick={() => handleAddAssetToCanvas(asset)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#0A0F1D] border border-white/5 hover:border-[#00F0FF]/40 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: asset.color }} />
                      <span className="text-sm font-bold text-gray-200 group-hover:text-[#00F0FF] transition-colors">{asset.name}</span>
                    </div>
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-lg">+ افزودن</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Center/Right: Drag & Drop Game Canvas */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="bg-[#131B2E] p-6 rounded-3xl border border-[#00F0FF]/30 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-[#00F0FF]" />
                  <h3 className="font-black text-white text-lg">بوم بازی (Canvas) - موتور دو بعدی</h3>
                </div>
                <div className="text-xs text-gray-400">
                  اشیاء: {canvasElements.length} | وضعیت: {isPlayingTest ? 'در حال اجرا ▶️' : 'آماده ویرایش 🛠️'}
                </div>
              </div>

              {/* Game Screen Simulation Box */}
              <div className="relative flex-1 min-h-[420px] bg-[#0A0F1D] rounded-2xl border-2 border-[#00F0FF]/20 overflow-hidden flex items-center justify-center p-4">
                
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Simulated Game Elements Render */}
                {canvasElements.map((elem) => (
                  <div
                    key={elem.id}
                    onClick={() => setSelectedElementId(elem.id)}
                    style={{ left: `${elem.x}px`, top: `${elem.y}px` }}
                    className={`absolute cursor-pointer p-3 rounded-xl border transition-all select-none flex items-center gap-2 shadow-lg ${
                      selectedElementId === elem.id ? 'border-[#00F0FF] bg-[#131B2E] scale-110 z-20 ring-2 ring-[#00F0FF]/50' : 'border-white/10 bg-[#131B2E]/80'
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: elem.color }} />
                    <span className="text-xs font-bold text-white">{elem.name}</span>
                  </div>
                ))}

                {/* Play Test Overlay Action */}
                {isPlayingTest && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center pointer-events-none">
                    <div className="px-6 py-3 bg-[#00F0FF] text-black font-black text-lg rounded-2xl shadow-2xl animate-bounce">
                      بازی در حال اجرا است! با کلیدهای جهتی کنترل کنید 🎮
                    </div>
                  </div>
                )}
              </div>

              {/* Canvas Controls Footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10 text-xs text-gray-400">
                <span>روی هر عنصر کلیک کنید تا انتخاب شود.</span>
                <button
                  onClick={() => {
                    if (selectedElementId) {
                      setCanvasElements(canvasElements.filter(e => e.id !== selectedElementId));
                      setSelectedElementId(null);
                      addToast('عنصر انتخاب شده از بوم حذف شد.');
                    }
                  }}
                  className="text-red-400 hover:text-red-300 font-bold transition-colors"
                >
                  حذف عنصر انتخاب شده
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
