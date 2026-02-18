import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  BrainCircuit, 
  Target, 
  Zap, 
  CheckCircle2, 
  ShieldCheck,
  Cpu,
  TrendingUp,
  Quote
} from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    {
      step: "01",
      title: "Strategic Foundation",
      description: "วิเคราะห์โมเดลธุรกิจและหาจุดตัดระหว่างความเชี่ยวชาญของคุณกับความต้องการของตลาดระดับบน (NIDA MBA Framework)",
      icon: <Target className="w-5 h-5" />
    },
    {
      step: "02",
      title: "AI Visual Identity",
      description: "สร้างภาพลักษณ์แบรนด์ผ่าน AI Gen ระดับภาพยนตร์ เพื่อสร้างความแตกต่างที่คู่แข่งไม่สามารถลอกเลียนแบบได้",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      step: "03",
      title: "Operations Automation",
      description: "เซตระบบ Workflow ให้ AI ทำงานแทนคุณ ตั้งแต่การวิเคราะห์เทรนด์ไปจนถึงการกระจาย Content 5 แพลตฟอร์ม",
      icon: <Zap className="w-5 h-5" />
    },
    {
      step: "04",
      title: "Monetization Mastery",
      description: "เปลี่ยนอิทธิพลให้เป็นรายได้ผ่านระบบ High-Ticket Funnel ที่ออกแบบมาเพื่อปิดการขายลูกค้าระดับองค์กร",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-200 antialiased selection:bg-blue-500/30 font-apple">
      {/* Font Styling for Apple-style Thai with increased weights */}
      <style>{`
        .font-apple {
          font-family: -apple-system, BlinkMacSystemFont, "Sukhumvit Set", "Sarabun", "IBM Plex Sans Thai", "Helvetica Neue", Arial, sans-serif;
          font-weight: 450; /* Slightly heavier base weight for Thai readability */
        }
        
        h1, h2, h3, h4 {
          letter-spacing: -0.01em;
          font-weight: 700;
        }

        p, span, li {
            line-height: 1.6;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#02040a]/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              STRATEGY<span className="text-blue-500">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#instructor" className="hover:text-white transition-colors">Expertise</a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full mb-10 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">Official MBA Strategy Framework</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Master the Art of <br />
              <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent font-bold">Executive Branding</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
              ยกระดับตัวตนสู่ผู้นำทางความคิดระดับพรีเมียม ด้วยการผสานกลยุทธ์ธุรกิจขั้นสูง <br className="hidden md:block" />
              และระบบอัจฉริยะ AI Automation ที่ออกแบบมาเพื่อมืออาชีพโดยเฉพาะ
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-blue-500/20 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Your Transformation
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              <div className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-[#02040a]"></div>)}
                </div>
                <span className="text-xs text-slate-400 font-bold tracking-tight">Joined by 150+ Executives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Academic Excellence", val: "NIDA MBA" },
              { label: "Digital Influence", val: "10M+ Reach" },
              { label: "Systems Built", val: "50+ Brands" },
              { label: "Design Quality", val: "High-End UX" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors tracking-tight">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
              ทำไมโลกธุรกิจปี 2026 <br />
              จึงขับเคลื่อนด้วย <span className="text-blue-500 italic font-bold">Trust & AI</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "Personal Economy", desc: "ลูกค้าซื้อ 'คน' ก่อนซื้อ 'สินค้า' แบรนด์ที่ไร้ตัวตนจะถูกลืม" },
                { title: "AI Amplification", desc: "AI ไม่ได้มาแทนคน แต่มาขยายศักยภาพของคนที่มี 'กลยุทธ์' ให้เหนือกว่าคู่แข่ง 10 เท่า" },
                { title: "Efficiency First", desc: "เปลี่ยนงาน Routine ให้เป็นระบบอัตโนมัติ เพื่อให้คุณโฟกัสกับการตัดสินใจที่สำคัญ" },
                { title: "Authentic Power", desc: "การใช้ AI ไม่ใช่การปลอมแปลง แต่คือการนำเสนอตัวตนที่ดีที่สุดในสเกลที่ใหญ่ขึ้น" }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-8 h-px bg-blue-500"></div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-slate-900 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-center shadow-2xl">
                <Quote className="w-12 h-12 text-blue-500/30 mb-6" />
                <p className="text-2xl font-medium leading-relaxed text-white italic">
                  "การบริหารธุรกิจในยุคใหม่ ไม่ใช่การทำงานหนักขึ้น แต่คือการสร้างระบบที่ทำให้คุณมีอิทธิพลได้ในขณะที่คุณกำลังใช้ชีวิต"
                </p>
                <div className="mt-8 flex items-center space-x-4">
                   <div className="h-0.5 w-10 bg-slate-700"></div>
                   <span className="text-sm font-bold uppercase tracking-widest text-slate-400">MBA Strategic Insight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-32 bg-[#050811]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Executive Program</h2>
              <p className="text-slate-300 text-lg font-medium">โครงสร้างบทเรียนที่เน้นผลลัพธ์เชิงธุรกิจและประสิทธิภาพในการทำงาน</p>
            </div>
            <div className="flex space-x-2">
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">4 Modules</div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">30+ Lessons</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m, idx) => (
              <div key={idx} className="group bg-slate-900/40 border border-white/5 p-10 rounded-[2rem] hover:bg-slate-800/50 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-5xl font-black text-white/[0.03] group-hover:text-blue-500/5 transition-colors leading-none">
                  {m.step}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  {m.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors font-medium">{m.description}</p>
                <div className="mt-8 flex items-center text-[10px] font-bold uppercase tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                  Read more <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent"></div>
               <div className="w-full h-full flex items-center justify-center text-slate-700 text-sm italic font-medium">
                 [ Premium Professional Portrait ]
               </div>
               <div className="absolute bottom-10 left-10">
                 <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl inline-block">
                    <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-1">MBA Credential</p>
                    <p className="text-white font-bold tracking-tight">NIDA Strategic Management</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">เบื้องหลังกลยุทธ์เงินล้าน</h2>
              <p className="text-lg text-slate-300 font-medium leading-relaxed">
                การผสานองค์ความรู้ด้านการจัดการธุรกิจ (Business Administration) เข้ากับเทคโนโลยีแห่งอนาคต เพื่อสร้างความได้เปรียบในการแข่งขันที่ยั่งยืน
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { label: "Expertise", val: "กลยุทธ์การสร้างตัวตนด้วย Data & AI" },
                { label: "Experience", val: "Reviewer & Influencer ระดับแนวหน้าใน Lemon8" },
                { label: "Background", val: "ประสบการณ์บริหารธุรกิจ Co-working & Lifestyle Space" }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="mt-1 w-5 h-5 rounded-full border border-blue-500/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-1">{item.label}</h5>
                    <p className="text-white font-bold tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-white font-bold flex items-center group border-b border-white/10 pb-2 hover:border-blue-500 transition-all text-sm tracking-tight">
              Learn more about the founder
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gradient-to-b from-[#02040a] to-[#050811]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-slate-900/30 border border-white/10 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10"></div>
            
            <span className="inline-block text-blue-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Investment in yourself</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">เข้าร่วมเครือข่าย <br /> ผู้นำยุคใหม่</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
              <div className="text-left space-y-4">
                <div className="flex items-center text-slate-400 line-through text-lg font-bold">
                  <span className="mr-3 text-sm font-bold uppercase tracking-wider">Standard:</span> 35,000 THB
                </div>
                <div className="flex items-baseline space-x-4">
                  <span className="text-6xl font-black text-white tracking-tighter">25,000</span>
                  <span className="text-xl text-blue-400 font-bold">THB</span>
                </div>
                <p className="text-xs text-slate-500 font-bold tracking-wide">*One-time payment for lifetime value</p>
              </div>
              
              <div className="w-px h-24 bg-white/10 hidden md:block"></div>
              
              <div className="text-left space-y-4">
                {[
                  "Intensive 4-Week Mastermind",
                  "AI Implementation Templates",
                  "Private Strategic Session (1:1)",
                  "Executive Alumni Network"
                ].map((perk, i) => (
                  <div key={i} className="flex items-center text-sm text-slate-200 tracking-tight font-bold">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mr-3" />
                    {perk}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full md:w-auto bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-blue-500 hover:text-white transition-all transform hover:scale-[1.02] shadow-2xl tracking-tight">
              Apply to Join รุ่นที่ 1
            </button>
            <p className="mt-8 text-xs text-slate-400 font-black uppercase tracking-[0.3em]">
              Only 15 slots available for quality control
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
              <BrainCircuit className="w-3.5 h-3.5 text-blue-500" />
            </div>
            <span className="text-lg font-bold tracking-tighter text-white">STRATEGY<span className="text-blue-500">AI</span></span>
          </div>
          
          <div className="flex space-x-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">
            © 2026 Designed for high achievers.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;