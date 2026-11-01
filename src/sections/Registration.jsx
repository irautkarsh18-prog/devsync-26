import React, { useState, useEffect } from 'react';
import { UserCheck, AlertCircle, CheckCircle2, MapPin, Sparkles, Send, ShieldCheck, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DETAILS, TRACKS_DATA } from '../data/eventData';
import { LegoGoogleBrickBar, LegoStudRow, LegoStud, LegoRobotGraphic } from '../components/LegoElements';

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
          particleCount: 120,
          spread: 80,
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
    <section id="register" className="relative py-24 sm:py-32 bg-[#F5EBD2] text-[#252525] border-t-4 border-[#E8DCC4] lego-baseplate-sand">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with LEGO Robot 3 */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <LegoRobotGraphic pose="celebrating" size={80} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black bg-white text-[#E53935] border-2 border-[#E53935] mb-4 shadow-sm">
            <UserCheck className="w-4 h-4 text-[#E53935]" />
            <span>CONFIRM IN-PERSON ATTENDANCE • OFFLINE DELEGATE PASS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#252525] mb-4">
            Your Next Developer Connection Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-sans max-w-2xl mx-auto">
            150 seats. One incredible day. Open to both MMMUT students and outside university builders.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border-2 border-[#E8DCC4] text-xs font-mono text-[#252525] font-bold shadow-md">
            <span>November 28, 2026</span>
            <span>•</span>
            <span>MMMUT Campus, Gorakhpur</span>
            <span>•</span>
            <span className="font-black text-[#E53935]">Total Combined Cap: 150 Seats</span>
          </div>
        </div>

        {/* TWO SEPARATE REGISTRATION CARDS (Equal Visual Importance) styled as LEGO Brick Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Card 1: MMMUT Students */}
          <div 
            onClick={() => { setCategory('MMMUT Student'); setDuplicateWarning(''); }}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col justify-between overflow-hidden shadow-xl border-4 ${
              category === 'MMMUT Student'
                ? 'bg-white border-[#006CB7] border-b-8 border-b-[#004A80] ring-4 ring-[#006CB7]/20 scale-[1.02]'
                : 'bg-white/90 border-[#E8DCC4] border-b-6 border-b-[#D5C7AB] hover:border-[#006CB7]/60'
            }`}
          >
            {/* Top Studs */}
            <div className="absolute top-2 left-6">
              <LegoStudRow count={4} color="blue" size="xs" />
            </div>

            {category === 'MMMUT Student' && (
              <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-[#006CB7] text-white shadow-md border border-[#004A80]">
                Active Selection
              </span>
            )}

            <div className="pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#006CB7]/15 text-[#006CB7] border-2 border-[#006CB7]/30 flex items-center justify-center mb-5 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display text-[#252525] mb-2">
                MMMUT Student Registration
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-4">
                For currently enrolled undergraduate, postgraduate, and MCA students of <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>.
              </p>

              <div className="space-y-1.5 text-xs font-mono text-slate-700 mb-6 font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006CB7]" />
                  <span>Campus ID / Roll Number validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006CB7]" />
                  <span>Free delegate kit & high-tea access</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { setCategory('MMMUT Student'); setDuplicateWarning(''); }}
              className={`w-full py-3 px-4 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                category === 'MMMUT Student'
                  ? 'lego-btn-blue text-white shadow-lg'
                  : 'bg-[#FFF8E7] text-[#252525] border-2 border-[#E8DCC4] hover:bg-white'
              }`}
            >
              <span>{category === 'MMMUT Student' ? 'Editing MMMUT Application' : 'Register as MMMUT Student'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Outside College Students */}
          <div 
            onClick={() => { setCategory('Outside College Student'); setDuplicateWarning(''); }}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col justify-between overflow-hidden shadow-xl border-4 ${
              category === 'Outside College Student'
                ? 'bg-white border-[#00852B] border-b-8 border-b-[#00551B] ring-4 ring-[#00852B]/20 scale-[1.02]'
                : 'bg-white/90 border-[#E8DCC4] border-b-6 border-b-[#D5C7AB] hover:border-[#00852B]/60'
            }`}
          >
            {/* Top Studs */}
            <div className="absolute top-2 left-6">
              <LegoStudRow count={4} color="green" size="xs" />
            </div>

            {category === 'Outside College Student' && (
              <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-[#00852B] text-white shadow-md border border-[#00551B]">
                Active Selection
              </span>
            )}

            <div className="pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#00852B]/15 text-[#00852B] border-2 border-[#00852B]/30 flex items-center justify-center mb-5 shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display text-[#252525] mb-2">
                Outside College Student Registration
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-4">
                Warmly welcoming developers, builders, and competitive coders from <strong>other colleges, universities, and technical institutes</strong>.
              </p>

              <div className="space-y-1.5 text-xs font-mono text-slate-700 mb-6 font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00852B]" />
                  <span>Open to all external colleges & universities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00852B]" />
                  <span>Full delegate swag & networking perks included</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { setCategory('Outside College Student'); setDuplicateWarning(''); }}
              className={`w-full py-3 px-4 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                category === 'Outside College Student'
                  ? 'lego-btn-green text-white shadow-lg'
                  : 'bg-[#FFF8E7] text-[#252525] border-2 border-[#E8DCC4] hover:bg-white'
              }`}
            >
              <span>{category === 'Outside College Student' ? 'Editing Outside Application' : 'Register as Outside Student'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* UNIFIED REGISTRATION FORM CONTAINER styled as LEGO Baseplate Module */}
        <div className={`relative rounded-3xl bg-white border-4 p-6 sm:p-10 shadow-2xl overflow-hidden transition-all duration-300 ${
          category === 'MMMUT Student' ? 'border-[#006CB7] border-b-8 border-b-[#004A80]' : 'border-[#00852B] border-b-8 border-b-[#00551B]'
        }`}>
          
          {/* Top 4-Color LEGO Brick Interlocking Bar */}
          <div className="absolute top-0 inset-x-0">
            <LegoGoogleBrickBar />
          </div>

          {/* Active Category Indicator Banner */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-[#E8DCC4] pt-3">
            <div className="flex items-center gap-2.5">
              <span className={`w-3.5 h-3.5 rounded-full ${category === 'MMMUT Student' ? 'bg-[#006CB7]' : 'bg-[#00852B]'} shadow-sm`} />
              <span className="font-display font-black text-[#252525] text-base sm:text-lg">
                Registration Category: <span className={category === 'MMMUT Student' ? 'text-[#006CB7]' : 'text-[#00852B]'}>{category}</span>
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline">
              Step 2: Fill Details & Verify
            </span>
          </div>

          {/* Demonstration Notice Box */}
          <div className="mb-8 p-4 rounded-2xl bg-[#FFF8E7] border-2 border-[#FFD500] text-slate-800 text-xs flex items-start gap-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-[#FF8C00] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#252525]">Demonstration Mode:</span> Submissions are stored locally in browser <strong>LocalStorage</strong> and verified instantly with client validation. Your official DevSync '26 In-Person Pass will be generated with your selected category.
            </div>
          </div>

          {/* Duplicate or Capacity Warning */}
          {duplicateWarning && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border-2 border-[#E53935] text-[#E53935] text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
              <span className="font-bold">{duplicateWarning}</span>
            </div>
          )}

          {alreadyRegisteredAttendee && !submitSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border-2 border-[#00852B] text-[#00852B] text-sm flex items-center justify-between">
              <div>
                <span className="font-black">Notice:</span> You already have a confirmed seat reserved (
                <span className="font-mono font-black">{alreadyRegisteredAttendee.seatNumber}</span> - {alreadyRegisteredAttendee.category || 'Delegate'}). Submitting again will add another registration demo record.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Field 1: Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                Full Name <span className="text-[#E53935]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="e.g. Priyanshu Sharma"
                className={`w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 text-[#252525] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#006CB7] focus:bg-white transition-colors ${
                  errors.fullName ? 'border-[#E53935]' : 'border-[#E8DCC4] hover:border-slate-400'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.fullName}</p>
              )}
            </div>

            {/* CATEGORY SPECIFIC FIELDS */}
            {category === 'MMMUT Student' ? (
              /* MMMUT STUDENT FIELDS */
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* MMMUT Roll Number */}
                  <div>
                    <label htmlFor="mmmutRollNumber" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                      MMMUT Roll Number <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      id="mmmutRollNumber"
                      type="text"
                      value={formData.mmmutRollNumber}
                      onChange={(e) => handleChange('mmmutRollNumber', e.target.value)}
                      placeholder="e.g. 2023021045"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 font-mono text-[#252525] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#006CB7] focus:bg-white transition-colors ${
                        errors.mmmutRollNumber ? 'border-[#E53935]' : 'border-[#E8DCC4] hover:border-slate-400'
                      }`}
                    />
                    {errors.mmmutRollNumber && (
                      <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.mmmutRollNumber}</p>
                    )}
                  </div>

                  {/* Year of Study */}
                  <div>
                    <label htmlFor="yearOfStudy" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                      Year of Study <span className="text-[#E53935]">*</span>
                    </label>
                    <select
                      id="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={(e) => handleChange('yearOfStudy', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 border-[#E8DCC4] text-[#252525] text-sm focus:outline-none focus:ring-2 focus:ring-[#006CB7] font-semibold"
                    >
                      {yearOptions.map(y => (
                        <option key={y} value={y} className="bg-white text-[#252525]">{y}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* MMMUT Branch */}
                <div>
                  <label htmlFor="branch" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                    Department / Branch <span className="text-[#E53935]">*</span>
                  </label>
                  <select
                    id="branch"
                    value={formData.branch}
                    onChange={(e) => handleChange('branch', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 border-[#E8DCC4] text-[#252525] text-sm focus:outline-none focus:ring-2 focus:ring-[#006CB7] font-semibold"
                  >
                    {mmmutBranches.map(b => (
                      <option key={b} value={b} className="bg-white text-[#252525]">{b}</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              /* OUTSIDE COLLEGE STUDENT FIELDS */
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* College / University Name */}
                <div>
                  <label htmlFor="collegeName" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                    College / University Name <span className="text-[#E53935]">*</span>
                  </label>
                  <input
                    id="collegeName"
                    type="text"
                    value={formData.collegeName}
                    onChange={(e) => handleChange('collegeName', e.target.value)}
                    placeholder="e.g. Indian Institute of Technology, Kanpur / NIT Allahabad / IET Lucknow"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 text-[#252525] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00852B] focus:bg-white transition-colors ${
                      errors.collegeName ? 'border-[#E53935]' : 'border-[#E8DCC4] hover:border-slate-400'
                    }`}
                  />
                  {errors.collegeName && (
                    <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.collegeName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* University Roll Number / Student ID */}
                  <div>
                    <label htmlFor="universityRollNumber" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                      University Roll Number / Student ID <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      id="universityRollNumber"
                      type="text"
                      value={formData.universityRollNumber}
                      onChange={(e) => handleChange('universityRollNumber', e.target.value)}
                      placeholder="e.g. 2200520100089"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 font-mono text-[#252525] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00852B] focus:bg-white transition-colors ${
                        errors.universityRollNumber ? 'border-[#E53935]' : 'border-[#E8DCC4] hover:border-slate-400'
                      }`}
                    />
                    {errors.universityRollNumber && (
                      <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.universityRollNumber}</p>
                    )}
                  </div>

                  {/* Outside Year of Study */}
                  <div>
                    <label htmlFor="outsideYearOfStudy" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                      Year of Study <span className="text-[#E53935]">*</span>
                    </label>
                    <select
                      id="outsideYearOfStudy"
                      value={formData.outsideYearOfStudy}
                      onChange={(e) => handleChange('outsideYearOfStudy', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 border-[#E8DCC4] text-[#252525] text-sm focus:outline-none focus:ring-2 focus:ring-[#00852B] font-semibold"
                    >
                      {yearOptions.map(y => (
                        <option key={y} value={y} className="bg-white text-[#252525]">{y}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Outside Branch */}
                <div>
                  <label htmlFor="outsideBranch" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                    Branch / Department <span className="text-[#E53935]">*</span>
                  </label>
                  <input
                    id="outsideBranch"
                    type="text"
                    value={formData.outsideBranch}
                    onChange={(e) => handleChange('outsideBranch', e.target.value)}
                    placeholder="e.g. Computer Science / Electronics / Data Science"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 text-[#252525] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00852B] focus:bg-white transition-colors ${
                      errors.outsideBranch ? 'border-[#E53935]' : 'border-[#E8DCC4] hover:border-slate-400'
                    }`}
                  />
                  {errors.outsideBranch && (
                    <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.outsideBranch}</p>
                  )}
                </div>
              </div>
            )}

            {/* COMMON FIELDS: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                  Email Address <span className="text-[#E53935]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="e.g. coder@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 text-[#252525] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#006CB7] focus:bg-white transition-colors ${
                    errors.email ? 'border-[#E53935]' : 'border-[#E8DCC4] hover:border-slate-400'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                  Phone Number (WhatsApp / Calling) <span className="text-[#E53935]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 font-mono text-[#252525] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#006CB7] focus:bg-white transition-colors ${
                    errors.phone ? 'border-[#E53935]' : 'border-[#E8DCC4] hover:border-slate-400'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Field: GitHub or Portfolio URL (Optional) */}
            <div>
              <label htmlFor="portfolioUrl" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                GitHub / Portfolio URL <span className="text-slate-500 font-normal">(Optional)</span>
              </label>
              <input
                id="portfolioUrl"
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) => handleChange('portfolioUrl', e.target.value)}
                placeholder="https://github.com/yourhandle or https://portfolio.dev"
                className={`w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 font-mono text-[#252525] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#006CB7] focus:bg-white transition-colors ${
                  errors.portfolioUrl ? 'border-[#E53935]' : 'border-[#E8DCC4] hover:border-slate-400'
                }`}
              />
              {errors.portfolioUrl && (
                <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.portfolioUrl}</p>
              )}
            </div>

            {/* Field: Food Preference */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                Food Preference (High-Tea & Lunch) <span className="text-[#E53935]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Vegetarian', 'Jain'].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.foodPreference === option
                        ? 'bg-[#006CB7]/15 border-[#006CB7] text-[#006CB7] font-bold'
                        : 'bg-[#FFF8E7] border-[#E8DCC4] text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="foodPreference"
                      value={option}
                      checked={formData.foodPreference === option}
                      onChange={() => handleChange('foodPreference', option)}
                      className="w-4 h-4 text-[#006CB7] focus:ring-[#006CB7]"
                    />
                    <span className="text-sm font-bold">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Field: Preferred Technical Track */}
            <div>
              <label htmlFor="track" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-black mb-2">
                Preferred Technical Track <span className="text-[#E53935]">*</span>
              </label>
              <select
                id="track"
                value={formData.track}
                onChange={(e) => handleChange('track', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7] border-2 border-[#E8DCC4] text-[#252525] text-sm focus:outline-none focus:ring-2 focus:ring-[#006CB7] font-semibold"
              >
                {TRACKS_DATA.map((t) => (
                  <option key={t.id} value={t.title} className="bg-white text-[#252525]">
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
                  className="mt-1 w-5 h-5 rounded text-[#006CB7] focus:ring-[#006CB7] border-2 border-[#E8DCC4]"
                />
                <span className="text-xs sm:text-sm text-slate-700 leading-normal font-medium">
                  I confirm that I will attend in-person on campus on November 28, 2026 at the Seminar Hall Complex, Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur. I understand this event does not offer virtual streaming or remote attendance.
                </span>
              </label>
              {errors.inPersonConsent && (
                <p className="mt-1.5 text-xs text-[#E53935] font-bold">{errors.inPersonConsent}</p>
              )}
            </div>

            {/* Tactile 3D LEGO Brick Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-display font-black uppercase tracking-wider text-white shadow-xl transition-all duration-200 disabled:opacity-60 text-base ${
                  category === 'MMMUT Student'
                    ? 'lego-btn-blue'
                    : 'lego-btn-green'
                }`}
              >
                {isSubmitting ? (
                  <span>Generating {category} Pass...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
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
