import React from 'react';
import { Link } from 'react-router-dom';

const SeleccionServicio = () => {
    return (
        <>

                        <main className="pt-24 pb-32 px-6 max-w-4xl mx-auto">
                {/* Header Section */}
                <section className="mb-12">
                    <span className="text-primary font-label text-xs tracking-[0.3em] uppercase mb-2 block">Step 01</span>
                    <h1 className="font-headline text-5xl font-bold tracking-tighter text-on-surface leading-none mb-4">
                        Select Your <span className="text-gradient-gold">Craft</span>
                    </h1>
                    <p className="text-on-surface-variant max-w-md font-body text-lg leading-relaxed">
                        Precision meets artistry. Choose the treatment that defines your character.
                    </p>
                </section>
                {/* Services Bento/List Layout */}
                <div className="space-y-6">
                    {/* Service Card 1: Selected State */}
                    <div className="group relative bg-surface-container-high rounded-xl p-6 transition-all duration-400 ease-out inner-shadow-outline-variant-15 hover:bg-surface-variant border-2 border-primary">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden shrink-0">
                                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="close-up of a sharp classic haircut with clean fade and textured top in a moody luxury barbershop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9e0FAwbINTPTgrRDO-Wo-_YPxJnFd9FIOfNrmZxvKYuY0QEUQClRr8fOB2uHoc8nH-3qjj1HBMn5y0VUGpaK-41tmpNhUVzl1VnxOB2iVhERfY9HSWf6-E9rzfRm4FZzi_007zDFCTWcjgAIZPFU_pcS8mDtNh49xCslEtDjLNnYT4cx2CMdyOxw-AI7kTfLx6L9YSDgXSWJgE1QlWXTIZ-waZe1pZfLqL2LKL8-Ho3W9PaQgkk7FljJwf7NdMf4P3qQS5C0bVS29" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline text-2xl font-semibold tracking-tight text-on-surface">Classic Cut</h3>
                                    <span className="font-headline text-xl font-bold text-primary">$45</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed max-w-prose">
                                    A precision-based haircut tailored to your head shape. Includes a refreshing wash, artisanal scalp massage, and expert styling with our signature products.
                                </p>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] tracking-widest uppercase text-primary font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        Selected
                                    </span>
                                    <span className="text-[10px] tracking-widest uppercase text-on-surface-variant/60 font-medium">45 Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service Card 2 */}
                    <div className="group relative bg-surface-container-low rounded-xl p-6 transition-all duration-400 ease-out inner-shadow-outline-variant-15 hover:bg-surface-container-highest">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden shrink-0 bg-surface-container-lowest">
                                <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-400" data-alt="close-up of a professional beard trim using a straight razor with steam and luxury shaving cream" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdGokrtG6loFpj7C5YlDmcttnTIfJQGaZyHDKX0njHIXXRcRK0D8jCUGTe6Ngrc6a2SREouiDNcmfEh3vBgcbgnDezGOwT2LzdVY7GJUQMjP3VpOQznN3ncmJCdY-hp4eqxek8YQnw08cfLrzsy6tkfi9hhoi7mcXtGU9_y1w4CWw8rEqeo3I0_rnjFXf6SDAljm7rqWJKF-pSVuQ-Cx-D7vsMCPy9Sqp33_CmLsk45hvVnKuI8Il-Jk8rVO8pYxyMU_DcZJxdhu6U" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline text-2xl font-semibold tracking-tight text-on-surface">Royal Beard Trim</h3>
                                    <span className="font-headline text-xl font-bold text-on-surface-variant">$35</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed max-w-prose">
                                    The ultimate grooming experience for your beard. Sculpting, hot towel treatment, and straight-razor detailing finished with premium oils.
                                </p>
                                <div className="flex items-center gap-4">
                                    <button className="text-[10px] tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs" data-icon="add_circle">add_circle</span>
                                        Select Service
                                    </button>
                                    <span className="text-[10px] tracking-widest uppercase text-on-surface-variant/40 font-medium">30 Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service Card 3 */}
                    <div className="group relative bg-surface-container-low rounded-xl p-6 transition-all duration-400 ease-out inner-shadow-outline-variant-15 hover:bg-surface-container-highest">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden shrink-0 bg-surface-container-lowest">
                                <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-400" data-alt="top view of a customer receiving a luxury facial treatment with warm towels and high-end skincare products" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW5r-QWSLFV3SecTAIXzz_vNH2rkQxUV0scysJ_4xT7guItJyUiauYJapeJB2pdAF_zotYi4imE7k6P5oTXt98WI6D63-4RTvluQgXVRyneGCm0qNt3smXsRQ2FX_nPqLHg8P3Q2KyjgL_SkU41O65gdINrkJJWv43pWSzYzPE5Gx5eE13BLlmR_84iVSZR_8p_u3-mmgG8K14Hv_xV5SPJ2StKpZ6e_0oSGyfM2bMXf3lX9AUvn8bOD3erzW4wGWTn6G2rQgnpXK1" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline text-2xl font-semibold tracking-tight text-on-surface">Facial Treatment</h3>
                                    <span className="font-headline text-xl font-bold text-on-surface-variant">$55</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed max-w-prose">
                                    Deep pore cleansing, exfoliation, and hydration mask designed specifically for men's skin. Includes a neck and shoulder tension release.
                                </p>
                                <div className="flex items-center gap-4">
                                    <button className="text-[10px] tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs" data-icon="add_circle">add_circle</span>
                                        Select Service
                                    </button>
                                    <span className="text-[10px] tracking-widest uppercase text-on-surface-variant/40 font-medium">50 Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sticky Summary Bar (Pseudo-Footer for Context) */}
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-xl bg-surface-container-highest/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl flex items-center justify-between border border-outline-variant/20">
                    <div>
                        <p className="text-[10px] tracking-widest text-on-surface-variant uppercase mb-1">Estimated Total</p>
                        <p className="font-headline text-2xl font-bold text-primary">$45.00</p>
                    </div>
                    <button className="bg-gradient-gold px-8 py-3 rounded-xl text-on-primary font-bold font-label uppercase tracking-widest text-xs transition-all duration-400 active:scale-95 shadow-lg shadow-primary/20">
                        Reservar Turno
                    </button>
                </div>
            </main>
            {/* Bottom Navigation Shell */}
            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 bg-neutral-950/80 backdrop-blur-lg rounded-t-2xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400 cursor-pointer">
                    <span className="material-symbols-outlined mb-1" data-icon="home_max">home_max</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Home</span>
                </div>
                <div className="flex flex-col items-center justify-center text-[#F2CA50] scale-110 cursor-pointer">
                    <span className="material-symbols-outlined mb-1" data-icon="content_cut" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Services</span>
                </div>
                <div className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400 cursor-pointer">
                    <span className="material-symbols-outlined mb-1" data-icon="calendar_today">calendar_today</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Schedule</span>
                </div>
                <div className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400 cursor-pointer">
                    <span className="material-symbols-outlined mb-1" data-icon="person">person</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Account</span>
                </div>
            </nav>

        </>
    );
};

export default SeleccionServicio;
