"use client";
import { useState } from 'react';

export default function ContactForm({ variant }: { variant?: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          email,
          phone,
          message,
          sourcePage: window.location.pathname,
          service: variant || 'General Inquiry',
        }),
      });
      const json = await res.json();
      if (json.ok) {
        setSuccess('Lead submitted — check CRM');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setSuccess('Error submitting lead');
      }
    } catch (err) {
      setSuccess('Network error');
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(null), 4000);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2 font-mono">Name</label>
        <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:border-[#a078ff] focus:ring-1 focus:ring-[#a078ff]/30 focus:outline-none transition-all text-[14px]" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2 font-mono">Email</label>
        <input required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:border-[#a078ff] focus:ring-1 focus:ring-[#a078ff]/30 focus:outline-none transition-all text-[14px]" type="email" placeholder="john@example.com" />
      </div>
      <div>
        <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2 font-mono">Phone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:border-[#a078ff] focus:ring-1 focus:ring-[#a078ff]/30 focus:outline-none transition-all text-[14px]" placeholder="(555) 123-4567" />
      </div>
      <div>
        <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2 font-mono">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:border-[#a078ff] focus:ring-1 focus:ring-[#a078ff]/30 focus:outline-none transition-all text-[14px] resize-none" rows={4} placeholder="Describe your needs..." />
      </div>
      <div className="pt-2">
        <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#8B5CF6] text-white rounded-lg text-[12px] font-bold tracking-wider hover:brightness-110 transition-colors uppercase">
          {loading ? 'Submitting…' : 'Submit Request'}
        </button>
      </div>
      {success && <div className="text-sm text-white/80">{success}</div>}
    </form>
  );
}
