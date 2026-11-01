import React, { useState, useEffect } from 'react';
import { UserCheck, AlertCircle, CheckCircle2, MapPin, Sparkles, Send, ShieldCheck, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DETAILS, TRACKS_DATA } from '../data/eventData';

export default function Registration({ 
  registeredCount, 
  onSuccessRegister, 
  selectedTrackPref, 
  alreadyRegisteredAttendee 
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    branchYear: 'CSE / 3rd Year',
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

  const branches = [
    'CSE / 1st Year',
    'CSE / 2nd Year',
    'CSE / 3rd Year',
    'CSE / 4th Year',
    'IT / 2nd Year',
    'IT / 3rd Year',
    'ECE / 3rd Year',
    'Other Engineering Branch',
    'Alumni / Postgraduate'
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!formData.rollNumber.trim() || formData.rollNumber.trim().length < 3) {
      newErrors.rollNumber = 'Please provide a valid college roll / student ID number.';
    }

    if (!formData.branchYear) {
      newErrors.branchYear = 'Please select your branch and academic year.';
    }

    // URL validation
    const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/i;
    if (!formData.portfolioUrl.trim()) {
      newErrors.portfolioUrl = 'GitHub or Portfolio profile URL is required.';
    } else if (!urlPattern.test(formData.portfolioUrl.trim())) {
      newErrors.portfolioUrl = 'Please enter a valid URL (e.g. https://github.com/yourhandle).';
    }

    if (!formData.foodPreference) {
      newErrors.foodPreference = 'Please select a food preference for refreshments.';
    }

    if (!formData.track) {
      newErrors.track = 'Please select your primary track of interest.';
    }

    if (!formData.inPersonConsent) {
      newErrors.inPersonConsent = 'You must confirm in-person attendance on campus.';
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

    // Capacity check
    if (registeredCount >= EVENT_DETAILS.capacity) {
      setDuplicateWarning('Registration is currently full! The 150 offline seat limit has been reached.');
      return;
    }

    // Duplicate check in localStorage
    const stored = JSON.parse(localStorage.getItem('devsync_26_registrations') || '[]');
    const isDuplicate = stored.some(
      (reg) => 
        reg.rollNumber.trim().toLowerCase() === formData.rollNumber.trim().toLowerCase() ||
        reg.portfolioUrl.trim().toLowerCase() === formData.portfolioUrl.trim().toLowerCase()
    );

    if (isDuplicate) {
      setDuplicateWarning('A registration with this Roll Number or Portfolio URL has already been recorded.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean local processing with high fidelity
    setTimeout(() => {
      const seatNumber = `#DS-${String(registeredCount + 1).padStart(4, '0')}`;
      const newRecord = {
        ...formData,
        id: 'reg_' + Date.now(),
        seatNumber,
        registeredAt: new Date().toISOString()
      };

      stored.push(newRecord);
      localStorage.setItem('devsync_26_registrations', JSON.stringify(stored));
      localStorage.setItem('devsync_26_my_ticket', JSON.stringify(newRecord));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
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
    <section id="register" className="relative py-24 sm:py-32 bg-[#090b10] border-t border-white/5">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            <UserCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>CONFIRM ATTENDANCE • OFFLINE ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Your Next Developer Connection Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto">
            150 seats. One incredible day. Reserve your place at DevSync '26.
          </p>

          {/* Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <span>November 28, 2026 | In-Person Only | Limited to 150 Seats.</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative rounded-3xl bg-surface-lighter/80 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Demonstration Notice Box */}
          <div className="mb-8 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-cyan-200">Demonstration Mode:</span> This form simulates actual registration using client-side <strong>LocalStorage</strong> and client validation. No external server requests are made. Your digital pass will be generated locally.
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
                <span className="font-mono">{alreadyRegisteredAttendee.seatNumber}</span>). Submitting again will add another registration demo record.
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
                placeholder="e.g. Alex Rivera"
                className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                  errors.fullName ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                }`}
                aria-invalid={errors.fullName ? 'true' : 'false'}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-rose-400 font-medium">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Field 2 & 3: Roll Number + Branch/Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* College Roll Number */}
              <div>
                <label htmlFor="rollNumber" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  College Roll Number <span className="text-rose-400">*</span>
                </label>
                <input
                  id="rollNumber"
                  type="text"
                  value={formData.rollNumber}
                  onChange={(e) => handleChange('rollNumber', e.target.value)}
                  placeholder="e.g. 23BCE1042"
                  className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border font-mono text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                    errors.rollNumber ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                  }`}
                  aria-invalid={errors.rollNumber ? 'true' : 'false'}
                  aria-describedby={errors.rollNumber ? 'rollNumber-error' : undefined}
                />
                {errors.rollNumber && (
                  <p id="rollNumber-error" className="mt-1.5 text-xs text-rose-400 font-medium">
                    {errors.rollNumber}
                  </p>
                )}
              </div>

              {/* Branch / Year */}
              <div>
                <label htmlFor="branchYear" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Branch / Year <span className="text-rose-400">*</span>
                </label>
                <select
                  id="branchYear"
                  value={formData.branchYear}
                  onChange={(e) => handleChange('branchYear', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                    errors.branchYear ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {branches.map((b) => (
                    <option key={b} value={b} className="bg-[#090d16] text-white">
                      {b}
                    </option>
                  ))}
                </select>
                {errors.branchYear && (
                  <p className="mt-1.5 text-xs text-rose-400 font-medium">
                    {errors.branchYear}
                  </p>
                )}
              </div>

            </div>

            {/* Field 4: GitHub or Portfolio URL */}
            <div>
              <label htmlFor="portfolioUrl" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                GitHub or Portfolio URL <span className="text-rose-400">*</span>
              </label>
              <input
                id="portfolioUrl"
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) => handleChange('portfolioUrl', e.target.value)}
                placeholder="https://github.com/username or https://portfolio.dev"
                className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border font-mono text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                  errors.portfolioUrl ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                }`}
                aria-invalid={errors.portfolioUrl ? 'true' : 'false'}
                aria-describedby={errors.portfolioUrl ? 'portfolioUrl-error' : undefined}
              />
              {errors.portfolioUrl && (
                <p id="portfolioUrl-error" className="mt-1.5 text-xs text-rose-400 font-medium">
                  {errors.portfolioUrl}
                </p>
              )}
            </div>

            {/* Field 5: Food Preference (Radio) */}
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
              {errors.foodPreference && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">
                  {errors.foodPreference}
                </p>
              )}
            </div>

            {/* Field 6: Track of Interest */}
            <div>
              <label htmlFor="track" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Track of Interest <span className="text-rose-400">*</span>
              </label>
              <select
                id="track"
                value={formData.track}
                onChange={(e) => handleChange('track', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${
                  errors.track ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                }`}
              >
                {TRACKS_DATA.map((t) => (
                  <option key={t.id} value={t.title} className="bg-[#090d16] text-white">
                    {t.number}: {t.title}
                  </option>
                ))}
              </select>
              {errors.track && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">
                  {errors.track}
                </p>
              )}
            </div>

            {/* Field 7: Required Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.inPersonConsent}
                  onChange={(e) => handleChange('inPersonConsent', e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-[#090d16] border-white/20"
                />
                <span className="text-xs sm:text-sm text-slate-300 group-hover:text-slate-200 leading-normal">
                  I confirm that I will attend in-person on campus on November 28, 2026 at the Seminar Hall Complex. I understand this event does not offer virtual streaming or remote attendance.
                </span>
              </label>
              {errors.inPersonConsent && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">
                  {errors.inPersonConsent}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-display font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 border border-blue-400/30 transition-all duration-300 disabled:opacity-60 text-base"
              >
                {isSubmitting ? (
                  <span>Generating Delegate Pass...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Complete In-Person Registration (Free)</span>
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

