import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  BrainCircuit, 
  Target, 
  Zap, 
  CheckCircle2, 
  ChevronDown,
  Quote,
  ShieldCheck,
  Cpu,
  TrendingUp
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Variants - More subtle for professional feel
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
    <div className="min-h-screen bg-[#050505] text-slate-200 antialiased selection:bg-blue-500/30 font-apple overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap');
        
        .font-apple {
          font-family: -apple-system, BlinkMacSystemFont, "Sukhumvit Set", "Sarabun", "IBM Plex Sans Thai", "Helvetica Neue", Arial, sans-serif;
          font-weight: 400;
        }
        
        h1, h2, h3, h4 {
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glass-card {
          background: rgba(20, 20, 25, 0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Refined Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        {/* Subtle Spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Strategy<span className="text-blue-500">AI</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8 text-[13px] font-medium text-slate-400">
            {['Vision', 'Curriculum', 'Expertise'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs hover:bg-slate-200 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - More Compact */}
      <section className="relative pt-32 pb-20 z-10 min-h-[85vh] flex flex-col justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300">Official MBA Strategy Framework</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Elevate Your <br />
            <span className="text-blue-500">Digital Authority</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ยกระดับตัวตนสู่ผู้นำทางความคิดระดับพรีเมียม ด้วยกลยุทธ์ธุรกิจขั้นสูง <br className="hidden md:block" />
            และระบบอัจฉริยะ AI Automation ที่ออกแบบมาเพื่อมืออาชีพ
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-blue-900/20 flex items-center">
              Start Transformation
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            
            <div className="flex items-center px-5 py-3 rounded-xl border border-white/5 bg-white/5">
              <span className="text-sm text-slate-300 font-medium">150+ Executives joined</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Cleaner */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Credential", val: "NIDA MBA" },
              { label: "Reach", val: "10M+ Views" },
              { label: "Clients", val: "50+ Brands" },
              { label: "Focus", val: "AI Expert" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - More Professional Grid */}
      <section id="vision" className="py-24 relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Driven by <br />
              <span className="text-blue-500">Trust & AI</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Personal Economy", desc: "ลูกค้าซื้อ 'คน' ก่อนซื้อ 'สินค้า' แบรนด์ที่ไร้ตัวตนจะถูกลืม" },
                { title: "AI Amplification", desc: "ขยายศักยภาพของคนที่มี 'กลยุทธ์' ให้เหนือกว่าคู่แข่ง 10 เท่า" },
                { title: "Efficiency Mastery", desc: "เปลี่ยนงาน Routine ให้เป็นระบบอัจฉริยะ เพื่อโฟกัสกับการตัดสินใจ" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 h-full min-h-[40px] bg-blue-900 rounded-full"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card rounded-[2rem] p-10 md:p-12 relative overflow-hidden">
              <Quote className="w-10 h-10 text-blue-500/30 mb-6" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-200 italic mb-8">
                "การบริหารธุรกิจยุคใหม่ ไม่ใช่การทำงานหนักขึ้น แต่คือการสร้างระบบที่ทำให้คุณมีอิทธิพลได้ในขณะที่คุณกำลังใช้ชีวิต"
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
                 <div>
                   <div className="text-xs font-bold text-white">Founder's Vision</div>
                   <div className="text-[10px] text-slate-400 uppercase tracking-wider">Strategic Insight</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section - Compact Cards */}
      <section id="curriculum" className="py-24 bg-white/[0.02] relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">The Master Program</h2>
              <p className="text-slate-400 text-base">Engineered logic for exponential influence</p>
            </div>
            <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-[10px] font-bold uppercase tracking-wide text-blue-400">4 Modules</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group"
              >
                <div className="text-xs font-bold text-blue-500 mb-4">{m.step}</div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {m.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-24 relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl max-w-sm mx-auto lg:mx-0">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="w-full h-full flex items-center justify-center text-slate-700 text-sm italic">
                 [ Premium Portrait ]
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-1">MBA Strategic Specialist</p>
                  <p className="text-white text-lg font-bold">NIDA Credential</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div>
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">The Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">เบื้องหลังกลยุทธ์เงินล้าน</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                ผสานองค์ความรู้ด้านการจัดการธุรกิจ (Business Administration) เข้ากับเทคโนโลยี AI อนาคต เพื่อสร้างความได้เปรียบที่ยั่งยืน
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Expertise", val: "กลยุทธ์การสร้างตัวตนด้วย Data & AI" },
                { label: "Proven Impact", val: "Top Reviewer ใน Lemon8 (10M+ Views)" },
                { label: "Portfolio", val: "ที่ปรึกษาธุรกิจ High-End Lifestyle" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">{item.label}</h5>
                    <p className="text-white text-base font-semibold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - Compact & Direct */}
      <section className="py-24 relative z-10 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card rounded-[2.5rem] p-10 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -z-10"></div>
            
            <span className="inline-block text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              Exclusive Beta Admission
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
              ลงทุนเพื่อ <span className="text-blue-500">อิสรภาพ</span> <br />
              ของเวลาและธุรกิจ
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
              <div className="text-center md:text-right">
                <div className="text-slate-500 line-through text-sm font-medium mb-1">Normal: 35,000 THB</div>
                <div className="text-5xl font-bold text-white tracking-tight">25,000 <span className="text-lg text-blue-500">THB</span></div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-white/10"></div>
              
              <div className="text-left text-sm text-slate-300 space-y-2">
                <div>✓ Intensive 4-Week Mastermind</div>
                <div>✓ Ready-to-use AI Templates</div>
                <div>✓ Private 1-on-1 Mentorship</div>
              </div>
            </div>

            <button className="bg-white hover:bg-slate-200 text-black px-10 py-4 rounded-full font-bold text-lg transition-colors w-full md:w-auto">
              Reserve Your Spot
            </button>
            <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest">
              Limited slots available for Batch 01
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 border-t border-white/5 relative z-10 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <BrainCircuit className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Strategy<span className="text-blue-500">AI</span></span>
          </div>
          
          <div className="text-[10px] uppercase tracking-widest text-slate-600">
            © 2026 StrategyAI. Built for Impact.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
