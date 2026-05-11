import { FadeIn } from '@/components/animations/FadeIn';

export function CustomMeasurements() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        <FadeIn className="text-center">
          <span className="text-accent/80 font-semibold text-[10px] tracking-widest uppercase mb-4 inline-block">The Perfect Fit</span>
          <h2 className="text-3xl md:text-5xl text-white font-serif mb-6">Custom Mens Tailoring Measurements</h2>
          <p className="text-[#E8E0D0]/60 max-w-2xl mx-auto font-light" style={{ fontFamily: '"Spectral", serif' }}>
            A precise understanding of your frame ensures the garment drapes flawlessly. Below are the standard benchmarks used in our atelier.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start pt-10 border-t border-white/5">
          
          {/* Visual Guide Placeholder (Image of Suit Measurements) */}
          <FadeIn delay={100} className="space-y-6">
            <h3 className="text-accent text-sm tracking-widest uppercase font-serif border-b border-white/10 pb-4">Anatomy of a Suit</h3>
            <div className="relative aspect-square w-full border border-white/10 bg-[#0a0a0a] p-2 flex items-center justify-center group overflow-hidden">
               <img 
                 src="/images/suit-measurement-guide.png" 
                 alt="Suit Measurement Guide" 
                 className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
               />
            </div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono text-center">Reference Guide Only</p>
          </FadeIn>

          {/* Size Charts */}
          <FadeIn delay={200} className="space-y-12">
            <h3 className="text-accent text-sm tracking-widest uppercase font-serif border-b border-white/10 pb-4">Standard Size Charts</h3>
            
            <div className="space-y-8">
              {/* Indian Suit Size Chart */}
              <div className="overflow-x-auto">
                <table className="w-full text-center text-xs font-mono border-collapse border border-white/20">
                  <caption className="text-white/80 text-[10px] uppercase tracking-widest mb-3 text-left">Indian Suit Size Chart</caption>
                  <thead className="bg-accent/10">
                    <tr>
                      <th className="border border-white/20 py-3 text-accent font-normal">Size</th>
                      <th className="border border-white/20 py-3 text-accent font-normal">Chest</th>
                      <th className="border border-white/20 py-3 text-accent font-normal">Length</th>
                      <th className="border border-white/20 py-3 text-accent font-normal">Sleeve</th>
                      <th className="border border-white/20 py-3 text-accent font-normal">Shoulder</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/60">
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">36</td><td className="border border-white/20 py-2">38</td><td className="border border-white/20 py-2">28</td><td className="border border-white/20 py-2">25</td><td className="border border-white/20 py-2">17.5</td></tr>
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">38</td><td className="border border-white/20 py-2">40</td><td className="border border-white/20 py-2">28.5</td><td className="border border-white/20 py-2">25.5</td><td className="border border-white/20 py-2">18</td></tr>
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">40</td><td className="border border-white/20 py-2">42</td><td className="border border-white/20 py-2">29</td><td className="border border-white/20 py-2">26</td><td className="border border-white/20 py-2">18.5</td></tr>
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">42</td><td className="border border-white/20 py-2">44</td><td className="border border-white/20 py-2">29.5</td><td className="border border-white/20 py-2">26.5</td><td className="border border-white/20 py-2">19</td></tr>
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">44</td><td className="border border-white/20 py-2">46</td><td className="border border-white/20 py-2">30</td><td className="border border-white/20 py-2">26.5</td><td className="border border-white/20 py-2">19.5</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Indian Pant Size Chart */}
              <div className="overflow-x-auto">
                <table className="w-full text-center text-xs font-mono border-collapse border border-white/20">
                  <caption className="text-white/80 text-[10px] uppercase tracking-widest mb-3 text-left">Indian Pant Size Chart</caption>
                  <thead className="bg-accent/10">
                    <tr>
                      <th className="border border-white/20 py-3 text-accent font-normal">Size</th>
                      <th className="border border-white/20 py-3 text-accent font-normal">Waist</th>
                      <th className="border border-white/20 py-3 text-accent font-normal">Length</th>
                      <th className="border border-white/20 py-3 text-accent font-normal">Thigh</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/60">
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">32</td><td className="border border-white/20 py-2">33</td><td className="border border-white/20 py-2">42</td><td className="border border-white/20 py-2">24</td></tr>
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">34</td><td className="border border-white/20 py-2">35</td><td className="border border-white/20 py-2">42</td><td className="border border-white/20 py-2">25</td></tr>
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">36</td><td className="border border-white/20 py-2">37</td><td className="border border-white/20 py-2">42</td><td className="border border-white/20 py-2">26</td></tr>
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">38</td><td className="border border-white/20 py-2">39</td><td className="border border-white/20 py-2">42</td><td className="border border-white/20 py-2">27</td></tr>
                    <tr className="hover:bg-white/5 transition-colors"><td className="border border-white/20 py-2 text-white">40</td><td className="border border-white/20 py-2">41</td><td className="border border-white/20 py-2">42</td><td className="border border-white/20 py-2">28</td></tr>
                  </tbody>
                </table>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
