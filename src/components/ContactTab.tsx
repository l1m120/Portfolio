import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, CheckCircle, Send, Globe, Award, HelpCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactTab() {
  const [inquiryType, setInquiryType] = useState<string>('career');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderMail, setSenderMail] = useState('');
  const [senderMsg, setSenderMsg] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderMail || !senderMsg) return;

    setFormStatus('sending');

    try {
      const getInquiryLabel = (type: string) => {
        if (type === 'career') return 'Career & Hiring';
        if (type === 'research') return 'Research Collaboration';
        return 'General Inquiry';
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "9e9603da-507f-4799-af7e-b5b3e8488c1b",
          name: senderName,
          email: senderMail,
          affiliation: senderOrg || "None Specified",
          inquiry_type: getInquiryLabel(inquiryType),
          subject: `[ZX Portfolio] ${getInquiryLabel(inquiryType)} from ${senderName}`,
          message: senderMsg
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setFormStatus('success');
        setSenderName('');
        setSenderOrg('');
        setSenderMail('');
        setSenderMsg('');
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  return (
    <div id="contact-tab-container" className="space-y-12 py-4">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Academic & Professional Contact
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Open to direct PhD positions, smart-city pilot projects, MLOps consultations, and vision-VLM pipelines research
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Segment: Contact Info Coordinates Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider font-mono">
              Academic Registers
            </h4>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Mailbox</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-800 font-semibold hover:text-accent transition-colors font-mono">{personalInfo.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Phone</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-slate-800 font-semibold hover:text-accent transition-colors font-mono">{personalInfo.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Location</span>
                  <span className="text-slate-800 font-semibold">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Verification registers */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Public Repositories</span>
              
              <div className="grid grid-cols-1 gap-2 text-xs">
                {/* ORCID */}
                <a
                  href={personalInfo.orcid}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/50 border border-emerald-100/50 hover:bg-emerald-50 transition-all text-slate-700 font-semibold font-mono"
                >
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="text-emerald-600 text-[10px] border border-emerald-400 rounded px-1 scale-95 uppercase font-black">iD</span>
                    <span>ORCID</span>
                  </span>
                  <span className="text-[10px] text-slate-400 text-right font-bold flex items-center">0009-0003-7356-3912 🔗</span>
                </a>

                {/* Google Scholar */}
                <span
                  className="flex items-center justify-between p-2 rounded-lg bg-sky-50/50 border border-sky-100/50 text-slate-700 font-semibold font-mono cursor-pointer hover:bg-sky-50 transition-all"
                  onClick={() => alert('Opening Google Scholar link. Double check details: Selected publications are under J. Teoh & Z.X. Lim.')}
                >
                  <span className="flex items-center gap-1.5 font-bold">
                    <Globe className="h-4 w-4 text-sky-500" />
                    <span>GOOGLE SCHOLAR</span>
                  </span>
                  <span className="text-[10px] text-sky-600 font-bold flex items-center">Profile 🔗</span>
                </span>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-slate-100 transition-all text-slate-700 font-semibold font-mono"
                >
                  <span className="flex items-center gap-1.5 font-bold">
                    <Github className="h-4 w-4 text-slate-700" />
                    <span>GITHUB</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold flex items-center">@l1m120 🔗</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-blue-50/40 border border-blue-150 hover:bg-blue-50 transition-all text-slate-700 font-semibold font-mono"
                >
                  <span className="flex items-center gap-1.5 font-bold">
                    <Linkedin className="h-4 w-4 text-sky-600" />
                    <span>LINKEDIN</span>
                  </span>
                  <span className="text-[10px] text-sky-600 font-bold">Connect 🔗</span>
                </a>
              </div>
            </div>

            {/* Secure premium resume downloading button */}
            <div className="pt-6 border-t border-slate-100">
              <a
                href="/ZiXuanLim_CV.pdf"
                download="ZiXuanLim_CV.pdf"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-accent text-white py-2.5 rounded-xl font-bold transition-all shadow-sm cursor-pointer text-center no-underline"
              >
                <FileText className="h-4.5 w-4.5 text-accent-light" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Segment: Contact Detail Form */}
        <div className="lg:col-span-8">
          <form onSubmit={handleFormSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">Direct Connection Portal</h3>
              <p className="text-xs text-slate-500">Select your inquiry type to router your message appropriately</p>
            </div>

            {/* Selector categories */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setInquiryType('career')}
                className={`py-2 text-[11.5px] font-bold rounded-lg transition-all cursor-pointer ${
                  inquiryType === 'career' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Career & Hiring
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('research')}
                className={`py-2 text-[11.5px] font-bold rounded-lg transition-all cursor-pointer ${
                  inquiryType === 'research' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Research Collaboration
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('general')}
                className={`py-2 text-[11.5px] font-bold rounded-lg transition-all cursor-pointer ${
                  inquiryType === 'general' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                General Inquiry
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-xs">
                <label className="font-mono text-slate-500 font-bold uppercase text-[10px]">Name *</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Dr. John Doe"
                  className="w-full bg-white border border-slate-200 rounded-lg p-2 md:p-2.5 outline-none font-sans font-semibold text-slate-700"
                />
              </div>

              <div className="space-y-1 text-xs">
                <label className="font-mono text-slate-500 font-bold uppercase text-[10px]">Affiliation / Institution</label>
                <input
                  type="text"
                  value={senderOrg}
                  onChange={(e) => setSenderOrg(e.target.value)}
                  placeholder="e.g. Stanford University / Sunway Labs"
                  className="w-full bg-white border border-slate-200 rounded-lg p-2 md:p-2.5 outline-none font-sans font-semibold text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <label className="font-mono text-slate-500 font-bold uppercase text-[10px]">Your Email *</label>
              <input
                type="email"
                required
                value={senderMail}
                onChange={(e) => setSenderMail(e.target.value)}
                placeholder="advisor@university.edu"
                className="w-full bg-white border border-slate-200 rounded-lg p-2 md:p-2.5 outline-none font-sans font-semibold text-slate-700"
              />
            </div>

            <div className="space-y-1 text-xs">
              <label className="font-mono text-slate-500 font-bold uppercase text-[10px]">Message / Collaboration Proposal *</label>
              <textarea
                required
                rows={5}
                value={senderMsg}
                onChange={(e) => setSenderMsg(e.target.value)}
                placeholder={
                  inquiryType === 'career' ? "Describe the role, team, or engineering requirements..." :
                  inquiryType === 'research' ? "Describe the proposed research, dataset usage, or lab details..." :
                  "How can I help you?..."
                }
                className="w-full bg-white border border-slate-250 rounded-lg p-2 md:p-2.5 outline-none font-sans font-semibold text-slate-700 leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending' || formStatus === 'success'}
              className={`w-full flex items-center justify-center gap-2 py-2.5 font-bold rounded-xl transition-all shadow-sm cursor-pointer border-0 ${
                formStatus === 'success'
                  ? 'bg-emerald-600 hover:bg-emerald-750 text-white'
                  : formStatus === 'error'
                  ? 'bg-rose-600 hover:bg-rose-750 text-white'
                  : formStatus === 'sending'
                  ? 'bg-slate-400 text-slate-100 cursor-not-allowed'
                  : 'bg-slate-900 hover:bg-slate-850 text-white'
              }`}
            >
              <Send className="h-4 w-4" />
              <span>
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent Successfully!'}
                {formStatus === 'error' && 'Failed to send. Try again.'}
                {formStatus === 'idle' && 'Send Message'}
              </span>
            </button>

            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs font-semibold"
              >
                <CheckCircle className="h-4.5 w-4.5 text-emerald-600 animate-pulse" />
                <span>Your query has been successfully submitted. Thank you for connecting!</span>
              </motion.div>
            )}

            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl flex items-center gap-2.5 text-xs font-semibold"
              >
                <HelpCircle className="h-4.5 w-4.5 text-rose-600 animate-pulse" />
                <span>An error occurred while transmitting your request. Please check your connectivity and try again.</span>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
