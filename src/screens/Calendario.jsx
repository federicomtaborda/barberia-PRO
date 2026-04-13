import React from 'react';
import { Link } from 'react-router-dom';

const Calendario = () => {
  return (
    <>
      
<main className="pb-24">
{/* Hero Section */}
<section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-40" data-alt="Close-up of a master barber's hands precisely trimming hair in a moody, low-light studio with warm golden highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvviz-ddkvoOy0Pw9c0UbRc7Li3J6koGao-8E1mcVs5gM8_5SCnDLDOGXmqQt91p2n88WrZD1wbftuKSfY_Grn4KMLwCYv2UiUQdHULufOu2RA1BcR5mncrJHjVNZlzDf1TNcC7qghBWPDd0sF6YPqaOCJZ_AOxjHWFASazbMSGw5ay-zGH36rLx-IiTNDDpSmR14HJQa6qmup_TC28Fgjd43g4uNICYfyx8YyVY2Cz7080s9QRr8K44ICOF5Cs7GpiQhcSx-c8QIN"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl">
<h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter mb-6 text-on-surface">
                    PRECISION<br/>
<span className="text-primary italic">CRAFTED</span><br/>
                    STYLE.
                </h1>
<p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 font-body leading-relaxed">
                    More than a haircut. A ritual of excellence tailored for the modern gentleman who values the architectural precision of the master's touch.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="editorial-gradient text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-lg tracking-tight hover:brightness-110 transition-all duration-400 flex items-center justify-center gap-2">
                        BOOK NOW
                        <span className="material-symbols-outlined">calendar_today</span>
</button>
<button className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-xl font-headline font-bold text-lg tracking-tight hover:bg-surface-bright transition-all duration-400">
                        VIEW SERVICES
                    </button>
</div>
</div>
{/* Asymmetric Accent */}
<div className="hidden lg:block absolute right-[-5%] bottom-[10%] w-1/3 aspect-square bg-surface-container-low rounded-xl transform rotate-3 inner-shadow-outline-variant-15 overflow-hidden">
<img className="w-full h-full object-cover opacity-70" data-alt="Macro shot of professional barber tools, silver scissors and clippers arranged on a dark leather mat with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcg3MqcVRz4agxQ4WCI_Mcdm3OC0UaaO4dileahmzmPNHe0LFO5R9ypxAPVcpM1Orstr61lh9izqmSFWIgLiLUfwL3vziTchSR3SbcHvkk8svy4Rr5HRevQXYv4WtRBgVJMnhcFeGrXQV3r4c1gHdx9Gnvg_CCeiF04_yOAWRc1uao65ecnfUdOf9SzVxkPiX0umJgTb03VwlQa_0SarnaLpoz1ksm3RJgeFtmr1rTd94kssbI3d6GXPTwTC_k7k6GTeCr12iBkU_"/>
</div>
</section>
{/* Services Section: Bento Grid */}
<section className="px-6 py-24 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-sm font-label tracking-[0.3em] text-primary uppercase mb-4">The Selection</h2>
<h3 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight">CURATED<br/>EXPERIENCES</h3>
</div>
<div className="text-on-surface-variant max-w-sm text-right font-body italic">
                    Each service includes a consultation, signature wash, and artisanal finish.
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Service Card 1 */}
<div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between min-h-[400px] inner-shadow-outline-variant-15 relative overflow-hidden group">
<div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
<img className="w-full h-full object-cover" data-alt="A sophisticated man receiving a sharp fade haircut in a high-end luxury barber shop environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeDGH1MhY8IWXpPapq9bTFuDzq6fyKUyytRrUJsb-lv3Ip80VK2dY-m80qJIZbTT0t69YdSvy8ObZqBdb7TMg4PLQux2bHUo1v3YzPOyi9kxn9vBQqjULARxyg1N26NSsRTrEDV3QALtyti8yydukMFj9j72HhkRoV6XJvYM120pfvJ2Ca_bzhPhIEqpFkfLOPah14dZ2vTjuCRbkrZS2Vg-EQgWCej381COUDAW4sliCZgwVRT_4C_b46RCjs-D34qAhixhaBsCnh"/>
</div>
<div className="relative z-10">
<span className="px-4 py-1 rounded-full border border-outline-variant text-[10px] uppercase tracking-widest text-on-surface-variant font-label">Signature</span>
<h4 className="text-4xl font-headline font-bold mt-4">The Atelier Haircut</h4>
<p className="mt-4 text-on-surface-variant max-w-md font-body">Our flagship experience. A precision cut tailored to your head shape, hair type, and lifestyle.</p>
</div>
<div className="relative z-10 flex justify-between items-center">
<span className="text-2xl font-headline font-bold text-primary">$65</span>
<button className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-400">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/* Service Card 2 */}
<div className="md:col-span-4 bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between min-h-[400px] inner-shadow-outline-variant-15 group">
<div>
<div className="w-full h-48 rounded-lg overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close-up of a barber using a straight razor for a beard line-up with steam in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnHXnGSgodsbL3EzxEkXkbHU0b6B6_hu_FLtncooSaCzq-os6uPOZv2E3U_0JDu9UBDJ6JPDXpS-F76FZJmwi8QpxxjWTeN_O_4bJWUNcbCD2NpgjLB5AKS7rqxpsY1bOybms2r5ODWWazIRqJS4prRRgqu4gylcNQMNN_kAPEeMlFPIi_M1_N_ATveG2E75aMSJCbEwpDlNDREd5ekMnvaOgxv_SmMq5H2eY3oVBxxBKDhDEQa1C9DpVEUxqYt2pN2LbWmFVc6tBq"/>
</div>
<h4 className="text-2xl font-headline font-bold">Beard Sculpting</h4>
<p className="mt-2 text-on-surface-variant text-sm font-body">Strategic trimming and hot towel line-up for the perfect silhouette.</p>
</div>
<div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
<span className="text-xl font-headline font-bold text-primary">$45</span>
<span className="material-symbols-outlined text-on-surface-variant">content_cut</span>
</div>
</div>
{/* Service Card 3 */}
<div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between min-h-[300px] inner-shadow-outline-variant-15">
<div>
<h4 className="text-2xl font-headline font-bold">The Royal Shave</h4>
<p className="mt-2 text-on-surface-variant text-sm font-body">Multi-stage hot towel treatment and straight razor finish.</p>
</div>
<div className="flex justify-between items-center">
<span className="text-xl font-headline font-bold text-primary">$55</span>
<span className="material-symbols-outlined text-on-surface-variant">flare</span>
</div>
</div>
{/* Service Card 4 */}
<div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex items-center gap-8 inner-shadow-outline-variant-15">
<div className="flex-1">
<h4 className="text-2xl font-headline font-bold">Head &amp; Face Ritual</h4>
<p className="mt-2 text-on-surface-variant text-sm font-body">Combine our signature cut with a charcoal mask and facial massage for the ultimate rejuvenation.</p>
<div className="mt-6 flex items-center gap-4">
<span className="text-xl font-headline font-bold text-primary">$100</span>
<span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] rounded-full font-label tracking-tighter uppercase">Most Popular</span>
</div>
</div>
<div className="hidden sm:block w-32 h-32 rounded-full border-2 border-primary/20 p-2">
<div className="w-full h-full rounded-full bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-4xl">spa</span>
</div>
</div>
</div>
</div>
</section>
{/* Feature Section: The Artisans */}
<section className="py-24 bg-surface-container-low/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
<img className="w-full h-full object-cover" data-alt="Portrait of a professional barber with tattoos wearing a black apron in a high-end vintage shop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKzXbpI3ZAG_1qY2ZHAXqwepzsHS7EYM8jM_RL9eHTbD35OsL4aLGO7YULqMQ-BLw1e3SSqpRDad34tAkgVDNOnO4gJcfXhwLNEyAkcV43qPgspIv4kWOkKjU_0yRR2O5Ps4n4gRN-NN6qxbac8Z5-TH_CGiEXwt4xSH-42o_L_5nRpFWeiU7q7NmcoPFfgQ3ltEj6-vzm9i1gY2t6PZPDlsT1GqXoK6k6GzSp4HgBn-3bK9ewFJaBEuMwHRVzHEh-cTEYue01rbS"/>
</div>
<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-xl z-0 backdrop-blur-xl border border-primary/20 flex flex-col p-8 justify-center">
<span className="text-primary text-5xl font-headline font-bold">15+</span>
<span className="text-on-surface font-label uppercase tracking-widest text-xs mt-2">Years of Mastery</span>
</div>
</div>
<div>
<h2 className="text-sm font-label tracking-[0.3em] text-primary uppercase mb-4">The Master</h2>
<h3 className="text-5xl font-headline font-bold text-on-surface mb-8 leading-tight">JULIAN<br/>VANCE</h3>
<p className="text-on-surface-variant font-body text-lg leading-relaxed mb-8">
                            Founder of The Atelier, Julian has spent over a decade perfecting the intersection of classical barbering and modern architectural geometry. His philosophy centers on the unique "bone-structure" approach to every client.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">verified</span>
<div>
<h5 className="font-headline font-bold text-on-surface">Precision Focus</h5>
<p className="text-sm text-on-surface-variant">Expertise in textured fades and structured beard shaping.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">content_cut</span>
<div>
<h5 className="font-headline font-bold text-on-surface">Artisanal Tools</h5>
<p className="text-sm text-on-surface-variant">Using only custom-honed Japanese steel for every cut.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Newsletter / CTA */}
<section className="px-6 py-24">
<div className="max-w-4xl mx-auto bg-surface-container-highest rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
<h2 className="text-4xl font-headline font-bold mb-4">JOIN THE INNER CIRCLE</h2>
<p className="text-on-surface-variant mb-10 max-w-md mx-auto">Receive priority booking access and exclusive styling insights from our master barbers.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 bg-surface-container-lowest border-none rounded-xl px-6 py-4 text-on-surface focus:ring-1 focus:ring-primary placeholder:text-neutral-600 font-body" placeholder="Email Address" type="email"/>
<button className="editorial-gradient text-on-primary font-headline font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all">SUBSCRIBE</button>
</form>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 bg-neutral-950/80 backdrop-blur-lg rounded-t-2xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] md:hidden">
<Link className="flex flex-col items-center justify-center text-[#F2CA50] scale-110 group" to="/">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home_max</span>
<span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Home</span>
</Link>
<Link className="flex flex-col items-center justify-center text-neutral-500 group" to="/">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Services</span>
</Link>
<Link className="flex flex-col items-center justify-center text-neutral-500 group" to="/">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Schedule</span>
</Link>
<Link className="flex flex-col items-center justify-center text-neutral-500 group" to="/">
<span className="material-symbols-outlined">person</span>
<span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Account</span>
</Link>
</nav>
{/* Floating Booking FAB */}
<button className="fixed bottom-24 right-6 w-16 h-16 rounded-full editorial-gradient text-on-primary shadow-2xl z-40 flex items-center justify-center md:hidden active:scale-90 transition-transform">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
</button>

    </>
  );
};

export default Calendario;
