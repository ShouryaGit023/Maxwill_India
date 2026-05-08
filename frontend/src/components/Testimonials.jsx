import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    quote: "The Maxwill Victory Pro has completely transformed my tournament play. The balance between control and power is something I've never experienced with other paddles.",
    name: 'John Miller',
    role: 'Pro Tournament Player',
    img: 'https://i.pravatar.cc/150?u=john',
  },
  {
    quote: "Engineering excellence in every swing. The grip stays firm even in high-intensity matches. It truly feels like a precision instrument on the court.",
    name: 'Sophia Davis',
    role: 'Club Champion',
    img: 'https://i.pravatar.cc/150?u=sophia',
  },
  {
    quote: "The durability is what impressed me the most. After months of daily play, the surface texture still provides the same incredible spin as day one.",
    name: 'Michael Chen',
    role: 'Pickleball Instructor',
    img: 'https://i.pravatar.cc/150?u=michael',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden px-6 lg:px-16">
      {/* Soft background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a93800]/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#a93800] font-bold uppercase tracking-[0.3em] text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-[#0e1d25] mt-6 tracking-tighter"
          >
            The Pro's Choice
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, idx) => (
            <motion.div 
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#fcfdfe] p-12 rounded-[50px] border border-blue-50/50 shadow-sm hover:shadow-2xl hover:shadow-[#0e1d25]/10 transition-all duration-500 relative flex flex-col items-center text-center h-full min-h-[500px]"
            >
              <div className="flex text-[#a93800] gap-1 mb-10">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              
              <Quote className="text-blue-50 w-16 h-16 mb-8 opacity-50" />
              
              <p className="text-xl md:text-2xl text-[#0e1d25] font-semibold leading-relaxed mb-12 italic">
                "{r.quote}"
              </p>
              
              <div className="flex flex-col items-center gap-4 mt-auto">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-8 ring-white shadow-xl mb-2">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-black text-[#0e1d25] text-xl uppercase tracking-wider">{r.name}</p>
                  <p className="text-sm text-[#a93800] font-bold uppercase tracking-widest mt-1">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
