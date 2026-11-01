import React, { useState, useEffect } from 'react';
import { UserCheck, AlertCircle, CheckCircle2, MapPin, Sparkles, Send, ShieldCheck, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DETAILS, TRACKS_DATA } from '../data/eventData';
import { LegoGoogleBrickBar, LegoStudRow, LegoStud } from '../components/LegoElements';

export default function Registration({ 
  registeredCount, 
  onSuccessRegister, 
  selectedTrackPref, 
  alreadyRegisteredAttendee 
}) {
  // Category can be 'MMMUT Student' or 'Outside College Student'
  const [category, setCategory] = useState('MMMUT Student');

  const [formData, setFormData] = useState({
    fullName: '',
    // MMMUT specific
    mmmutRollNumber: '',
    branch: 'Computer Science & Engineering (CSE)',
    yearOfStudy: '3rd Year',
    // Outside specific
    collegeName: '',
    universityRollNumber: '',
    outsideBranch: '',
    outsideYearOfStudy: '3rd Year',
    // Common
    email: '',
    phone: '',
    portfolioUrl: '',
    foodPreference: 'Vegetarian',
    track: selectedTrackPref || TRACKS_DATA[0].title,
    inPersonConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [duplicateWarning, setDuplicateWarning] = useState('');

  // Update track if user picked it from tracks section
  useEffect(() => {
    if (selectedTrackPref) {
      setFormData(prev => ({ ...prev, track: selectedTrackPref }));
    }
  }, [selectedTrackPref]);

  const mmmutBranches = [
    'Computer Science & Engineering (CSE)',
    'Information Technology (IT)',
    'Electronics & Communication (ECE)',
    'Electrical Engineering (EE)',
    'Mechanical Engineering (ME)',
    'Civil Engineering (CE)',
    'Chemical Engineering (CH)',
    'Master of Computer Applications (MCA)',
    'M.Tech / Postgraduate'
  ];

  const yearOptions = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    'Postgraduate / MCA'
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (category === 'MMMUT Student') {
      if (!formData.mmmutRollNumber.trim() || formData.mmmutRollNumber.trim().length < 4) {
        newErrors.mmmutRollNumber = 'Please enter your valid MMMUT Roll Number (e.g. 2023021045).';
      }
      if (!formData.branch) {
        newErrors.branch = 'Please select your branch.';
      }
      if (!formData.yearOfStudy) {
        newErrors.yearOfStudy = 'Please select your year of study.';
      }
    } else {
      // Outside College Student
      if (!formData.collegeName.trim() || formData.collegeName.trim().length < 3) {
        newErrors.collegeName = 'Please enter your complete College / University name.';
      }
      if (!formData.universityRollNumber.trim()) {
        newErrors.universityRollNumber = 'Please provide your University Roll Number or Student ID.';
      }
      if (!formData.outsideBranch.trim()) {
        newErrors.outsideBranch = 'Please enter your branch / department.';
      }
      if (!formData.outsideYearOfStudy) {
        newErrors.outsideYearOfStudy = 'Please select your year of study.';
      }
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    // Phone validation
    const phonePattern = /^[0-9+() -]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for event check-in coordination.';
    } else if (!phonePattern.test(formData.phone.trim().replace(/\s+/g, ''))) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }

    // Optional Portfolio / GitHub URL validation (if provided)
    if (formData.portfolioUrl.trim()) {
      const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/i;
      if (!urlPattern.test(formData.portfolioUrl.trim())) {
        newErrors.portfolioUrl = 'Please enter a valid URL (e.g. https://github.com/yourhandle).';
      }
    }

    if (!formData.foodPreference) {
      newErrors.foodPreference = 'Please select a food preference for high-tea and refreshments.';
    }

    if (!formData.track) {
      newErrors.track = 'Please select your primary track of interest.';
    }

    if (!formData.inPersonConsent) {
      newErrors.inPersonConsent = 'You must confirm in-person attendance at the MMMUT Gorakhpur campus.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDuplicateWarning('');

    if (!validate()) {
      return;
    }

    // Total Combined Capacity check across both categories
    if (registeredCount >= EVENT_DETAILS.capacity) {
      setDuplicateWarning('Registration is currently full! The 150 combined offline seat capacity has been reached.');
      return;
    }

    // Duplicate check in localStorage
    const stored = JSON.parse(localStorage.getItem('devsync_26_registrations') || '[]');
    const identifier = category === 'MMMUT Student' ? formData.mmmutRollNumber.trim().toLowerCase() : formData.universityRollNumber.trim().toLowerCase();
    const userEmail = formData.email.trim().toLowerCase();

    const isDuplicate = stored.some((reg) => {
      const regId = (reg.mmmutRollNumber || reg.universityRollNumber || reg.rollNumber || '').toLowerCase();
      const regMail = (reg.email || '').toLowerCase();
      return (identifier && regId === identifier) || (userEmail && regMail === userEmail);
    });

    if (isDuplicate) {
      setDuplicateWarning(`A registration with this Roll Number (${identifier.toUpperCase()}) or Email (${userEmail}) is already recorded in the system.`);
      return;
    }

    setIsSubmitting(true);

    // Simulate clean local processing with unified submission workflow
    setTimeout(() => {
      const seatNumber = `#DS-${String(registeredCount + 1).padStart(4, '0')}`;
      const newRecord = {
        ...formData,
        category, // "MMMUT Student" or "Outside College Student"
        rollNumber: category === 'MMMUT Student' ? formData.mmmutRollNumber : formData.universityRollNumber,
        branchYear: category === 'MMMUT Student' ? `${formData.branch} • ${formData.yearOfStudy}` : `${formData.outsideBranch} (${formData.collegeName}) • ${formData.outsideYearOfStudy}`,
        institution: category === 'MMMUT Student' ? 'MMMUT Gorakhpur' : formData.collegeName,
        id: 'reg_' + Date.now(),
        seatNumber,
        registeredAt: new Date().toISOString()
      };

      stored.push(newRecord);
      localStorage.setItem('devsync_26_registrations', JSON.stringify(stored));
      localStorage.setItem('devsync_26_my_ticket', JSON.stringify(newRecord));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }

      onSuccessRegister(newRecord);
    }, 700);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    if (duplicateWarning) {
      setDuplicateWarning('');
    }
  };

  return (
    <section id="register" className="relative py-24 sm:py-32 bg-[#0b0e14] border-t-2 border-[#1c2333] lego-baseplate-pattern">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-r from-blue-600/15 via-emerald-600/10 to-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#141924] text-[#ffd500] border border-[#2b3548] border-b-2 border-b-black mb-4 shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-[#ffd500]" />
            <span>CONFIRM IN-PERSON ATTENDANCE • OFFLINE DELEGATE PASS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Your Next Developer Connection Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto">
            150 seats. One incredible day. Open to both MMMUT students and outside university builders.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#151b29] border border-[#2b3548] border-b-2 border-b-black text-xs font-mono text-slate-200 font-semibold shadow-sm">
            <span>November 28, 2026</span>
            <span>•</span>
            <span>MMMUT Campus, Gorakhpur</span>
            <span>•</span>
            <span className="font-bold text-[#ffd500]">Total Combined Cap: 150 Seats</span>
          </div>
        </div>

        {/* TWO SEPARATE REGISTRATION CARDS (Equal Visual Importance) styled as LEGO Brick Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Card 1: MMMUT Students */}
          <div 
            onClick={() => { setCategory('MMMUT Student'); setDuplicateWarning(''); }}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col justify-between overflow-hidden shadow-2xl ${
              category === 'MMMUT Student'
                ? 'bg-[#111522] border-2 border-[#0055bf] border-b-4 border-b-[#003373] ring-2 ring-[#0055bf]/40'
                : 'bg-[#111520] border-2 border-[#2b3548] border-b-4 border-b-[#070910] hover:border-[#0055bf]/40'
            }`}
          >
            {/* Top Studs */}
            <div className="absolute top-2 left-6">
              <LegoStudRow count={4} color="blue" size="xs" />
            </div>

            {category === 'MMMUT Student' && (
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0055bf] text-white shadow-md border-b border-[#003373]">
                Active Selection
              </span>
            )}

            <div className="pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#0055bf]/15 text-[#3b8bff] border border-[#0055bf]/30 flex items-center justify-center mb-5 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                MMMUT Student Registration
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                For currently enrolled undergraduate, postgraduate, and MCA students of <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>.
              </p>

              <div className="space-y-1.5 text-xs font-mono text-slate-300 mb-6 font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0055bf]" />
                  <span>Campus ID / Roll Number validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0055bf]" />
                  <span>Free delegate kit & high-tea access</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { setCategory('MMMUT Student'); setDuplicateWarning(''); }}
              className={`w-full py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                category === 'MMMUT Student'
                  ? 'lego-btn-blue text-white shadow-lg'
                  : 'bg-[#151b29] text-slate-300 border border-[#2b3548] border-b-2 border-b-black hover:bg-[#1f283d]'
              }`}
            >
              <span>{category === 'MMMUT Student' ? 'Editing MMMUT Application' : 'Register as MMMUT Student'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Outside College Students */}
          <div 
            onClick={() => { setCategory('Outside College Student'); setDuplicateWarning(''); }}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col justify-between overflow-hidden shadow-2xl ${
              category === 'Outside College Student'
                ? 'bg-[#11171f] border-2 border-[#00852b] border-b-4 border-b-[#004d19] ring-2 ring-[#00852b]/40'
                : 'bg-[#111520] border-2 border-[#2b3548] border-b-4 border-b-[#070910] hover:border-[#00852b]/40'
            }`}
          >
            {/* Top Studs */}
            <div className="absolute top-2 left-6">
              <LegoStudRow count={4} color="green" size="xs" />
            </div>

            {category === 'Outside College Student' && (
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#00852b] text-white shadow-md border-b border-[#004d19]">
                Active Selection
              </span>
            )}

            <div className="pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#00852b]/15 text-[#22c55e] border border-[#00852b]/30 flex items-center justify-center mb-5 shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                Outside College Student Registration
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                Warmly welcoming developers, builders, and competitive coders from <strong>other colleges, universities, and technical institutes</strong>.
              </p>

              <div className="space-y-1.5 text-xs font-mono text-slate-300 mb-6 font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00852b]" />
                  <span>Open to all external colleges & universities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00852b]" />
                  <span>Full delegate swag & networking perks included</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { setCategory('Outside College Student'); setDuplicateWarning(''); }}
              className={`w-full py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                category === 'Outside College Student'
                  ? 'lego-btn-green text-white shadow-lg'
                  : 'bg-[#151b29] text-slate-300 border border-[#2b3548] border-b-2 border-b-black hover:bg-[#1f283d]'
              }`}
            >
              <span>{category === 'Outside College Student' ? 'Editing Outside Application' : 'Register as Outside Student'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* UNIFIED REGISTRATION FORM CONTAINER styled as LEGO Baseplate Module */}
        <div className="relative rounded-3xl bg-[#111520] border-2 border-[#2b3548] border-b-4 border-b-[#070910] p-6 sm:p-10 shadow-2xl overflow-hidden">
          
          {/* Top 4-Color LEGO Brick Interlocking Bar */}
          <div className="absolute top-0 inset-x-0">
            <LegoGoogleBrickBar />
          </div>

          {/* Active Category Indicator Banner */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 pt-3">
            <div className="flex items-center gap-2.5">
              <span className={`w-3 h-3 rounded-full ${category === 'MMMUT Student' ? 'bg-[#0055bf]' : 'bg-[#00852b]'} shadow-sm`} />
              <span className="font-display font-bold text-white text-base sm:text-lg">
                Registration Category: <span className={category === 'MMMUT Student' ? 'text-[#3b8bff]' : 'text-[#22c55e]'}>{category}</span>
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400 font-semibold hidden sm:inline">
              Step 2: Fill Details & Verify
            </span>
          </div>

          {/* Demonstration Notice Box */}
          <div className="mb-8 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-cyan-200">Demonstration Mode:</span> Submissions are stored locally in browser <strong>LocalStorage</strong> and verified instantly with client validation. Your official DevSync '26 In-Person Pass will be generated with your selected category.
            </div>
          </div>

          {/* Duplicate or Capacity Warning */}
          {duplicateWarning && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <span>{duplicateWarning}</span>
            </div>
          )}

          {alreadyRegisteredAttendee && !submitSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-between">
              <div>
                <span className="font-semibold">Notice:</span> You already have a confirmed seat reserved (
                <span className="font-mono">{alreadyRegisteredAttendee.seatNumber}</span> - {alreadyRegisteredAttendee.category || 'Delegate'}). Submitting again will add another registration demo record.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Field 1: Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="e.g. Priyanshu Sharma"
                className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                  errors.fullName ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* CATEGORY SPECIFIC FIELDS */}
            {category === 'MMMUT Student' ? (
              /* MMMUT STUDENT FIELDS */
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* MMMUT Roll Number */}
                  <div>
                    <label htmlFor="mmmutRollNumber" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      MMMUT Roll Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="mmmutRollNumber"
                      type="text"
                      value={formData.mmmutRollNumber}
                      onChange={(e) => handleChange('mmmutRollNumber', e.target.value)}
                      placeholder="e.g. 2023021045"
                      className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border font-mono text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                        errors.mmmutRollNumber ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.mmmutRollNumber && (
                      <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.mmmutRollNumber}</p>
                    )}
                  </div>

                  {/* Year of Study */}
                  <div>
                    <label htmlFor="yearOfStudy" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Year of Study <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={(e) => handleChange('yearOfStudy', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      {yearOptions.map(y => (
                        <option key={y} value={y} className="bg-[#090d16] text-white">{y}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* MMMUT Branch */}
                <div>
                  <label htmlFor="branch" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Department / Branch <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="branch"
                    value={formData.branch}
                    onChange={(e) => handleChange('branch', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    {mmmutBranches.map(b => (
                      <option key={b} value={b} className="bg-[#090d16] text-white">{b}</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              /* OUTSIDE COLLEGE STUDENT FIELDS */
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* College / University Name */}
                <div>
                  <label htmlFor="collegeName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    College / University Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="collegeName"
                    type="text"
                    value={formData.collegeName}
                    onChange={(e) => handleChange('collegeName', e.target.value)}
                    placeholder="e.g. Indian Institute of Technology, Kanpur / NIT Allahabad / IET Lucknow"
                    className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors ${
                      errors.collegeName ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.collegeName && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.collegeName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* University Roll Number / Student ID */}
                  <div>
                    <label htmlFor="universityRollNumber" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      University Roll Number / Student ID <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="universityRollNumber"
                      type="text"
                      value={formData.universityRollNumber}
                      onChange={(e) => handleChange('universityRollNumber', e.target.value)}
                      placeholder="e.g. 2200520100089"
                      className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border font-mono text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors ${
                        errors.universityRollNumber ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.universityRollNumber && (
                      <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.universityRollNumber}</p>
                    )}
                  </div>

                  {/* Outside Year of Study */}
                  <div>
                    <label htmlFor="outsideYearOfStudy" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Year of Study <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="outsideYearOfStudy"
                      value={formData.outsideYearOfStudy}
                      onChange={(e) => handleChange('outsideYearOfStudy', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    >
                      {yearOptions.map(y => (
                        <option key={y} value={y} className="bg-[#090d16] text-white">{y}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Outside Branch */}
                <div>
                  <label htmlFor="outsideBranch" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Branch / Department <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="outsideBranch"
                    type="text"
                    value={formData.outsideBranch}
                    onChange={(e) => handleChange('outsideBranch', e.target.value)}
                    placeholder="e.g. Computer Science / Electronics / Data Science"
                    className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors ${
                      errors.outsideBranch ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.outsideBranch && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.outsideBranch}</p>
                  )}
                </div>
              </div>
            )}

            {/* COMMON FIELDS: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="e.g. coder@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Phone Number (WhatsApp / Calling) <span className="text-rose-400">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border font-mono text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                    errors.phone ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Field: GitHub or Portfolio URL (Optional) */}
            <div>
              <label htmlFor="portfolioUrl" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                GitHub / Portfolio URL <span className="text-slate-500 font-normal">(Optional)</span>
              </label>
              <input
                id="portfolioUrl"
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) => handleChange('portfolioUrl', e.target.value)}
                placeholder="https://github.com/yourhandle or https://portfolio.dev"
                className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border font-mono text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                  errors.portfolioUrl ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                }`}
              />
              {errors.portfolioUrl && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.portfolioUrl}</p>
              )}
            </div>

            {/* Field: Food Preference */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Food Preference (High-Tea & Lunch) <span className="text-rose-400">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Vegetarian', 'Jain'].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.foodPreference === option
                        ? 'bg-blue-600/15 border-blue-500/50 text-white'
                        : 'bg-[#090d16] border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <input
                      type="radio"
                      name="foodPreference"
                      value={option}
                      checked={formData.foodPreference === option}
                      onChange={() => handleChange('foodPreference', option)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 bg-[#090d16] border-white/20"
                    />
                    <span className="text-sm font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Field: Preferred Technical Track */}
            <div>
              <label htmlFor="track" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Preferred Technical Track <span className="text-rose-400">*</span>
              </label>
              <select
                id="track"
                value={formData.track}
                onChange={(e) => handleChange('track', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {TRACKS_DATA.map((t) => (
                  <option key={t.id} value={t.title} className="bg-[#090d16] text-white">
                    {t.number}: {t.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Field: Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.inPersonConsent}
                  onChange={(e) => handleChange('inPersonConsent', e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-[#090d16] border-white/20"
                />
                <span className="text-xs sm:text-sm text-slate-300 group-hover:text-slate-200 leading-normal">
                  I confirm that I will attend in-person on campus on November 28, 2026 at the Seminar Hall Complex, Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur. I understand this event does not offer virtual streaming or remote attendance.
                </span>
              </label>
              {errors.inPersonConsent && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">{errors.inPersonConsent}</p>
              )}
            </div>

            {/* Tactile 3D LEGO Brick Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-display font-extrabold uppercase tracking-wider text-white shadow-xl transition-all duration-200 disabled:opacity-60 text-base ${
                  category === 'MMMUT Student'
                    ? 'lego-btn-blue'
                    : 'lego-btn-green'
                }`}
              >
                {isSubmitting ? (
                  <span>Generating {category} Pass...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit {category} Registration (Free)</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
