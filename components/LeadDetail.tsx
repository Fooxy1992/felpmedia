"use client";
import React from 'react';

export default function LeadDetail({ lead, onClose }: { lead: any; onClose: () => void }) {
  if (!lead) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end pointer-events-none">
      <div className="w-full max-w-md bg-[#060606] border-l border-white/5 h-full p-6 pointer-events-auto shadow-2xl overflow-y-auto">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{lead.fullName}</h3>
            <div className="text-sm text-white/70">{lead.email} • {lead.phone}</div>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white">Close</button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-[#0b0b0b] border border-white/5 rounded-lg">
            <div className="text-xs text-white/60">Status</div>
            <div className="mt-2 font-semibold">{lead.status}</div>
          </div>

          <div className="p-4 bg-[#0b0b0b] border border-white/5 rounded-lg">
            <div className="text-xs text-white/60">Message</div>
            <div className="mt-2 text-sm">{lead.message}</div>
          </div>

          <div className="p-4 bg-[#0b0b0b] border border-white/5 rounded-lg">
            <div className="text-xs text-white/60">Timeline</div>
            <ul className="mt-2 text-sm list-inside list-disc space-y-2">
              <li>Submitted: {new Date(lead.createdAt).toLocaleString()}</li>
              <li>Last interaction: {new Date(lead.lastInteraction).toLocaleString()}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
