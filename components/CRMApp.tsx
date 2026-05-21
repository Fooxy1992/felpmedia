"use client";
import { useEffect, useState } from 'react';
import LeadDetail from './LeadDetail';

type Lead = any;

export default function CRMApp() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selected, setSelected] = useState<Lead | null>(null);

  useEffect(() => {
    fetch('/api/leads').then((r) => r.json()).then((j) => setLeads(j.data || []));

    const es = new EventSource('/api/realtime');
    es.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.type === 'lead_created') {
          setLeads((s) => [data.lead, ...s]);
        }
      } catch (err) {
        // ignore pings
      }
    };
    return () => es.close();
  }, []);

  function open(lead: Lead) {
    setSelected(lead);
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/leads/${id}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ status }) });
    setLeads((s) => s.map((l) => (l.id === id ? { ...l, status } : l)));
  }

  const columns = [
    { key: 'New', label: 'New Leads' },
    { key: 'Contacted', label: 'Contacted' },
    { key: 'Qualified', label: 'Qualified' },
    { key: 'Consultation Scheduled', label: 'Appointment Scheduled' },
    { key: 'Converted', label: 'Closed Won' },
    { key: 'Lost', label: 'Closed Lost' },
  ];

  function onDrop(e: React.DragEvent, status: string) {
    const id = e.dataTransfer.getData('text/plain');
    updateStatus(id, status);
  }

  function onDragStart(e: React.DragEvent, id: string) {
    e.dataTransfer.setData('text/plain', id);
  }

  const stats = {
    total: leads.length,
    newToday: leads.filter((l) => new Date(l.createdAt) > new Date(Date.now() - 1000 * 60 * 60 * 24)).length,
    followUps: leads.filter((l) => l.priority === 'High').length,
  };

  return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="col-span-1 p-4 bg-[#060606] border border-white/5 rounded-lg">
          <div className="text-xs text-white/60">Total Leads</div>
          <div className="text-2xl font-bold">{stats.total}</div>
        </div>
        <div className="col-span-1 p-4 bg-[#060606] border border-white/5 rounded-lg">
          <div className="text-xs text-white/60">New Today</div>
          <div className="text-2xl font-bold">{stats.newToday}</div>
        </div>
        <div className="col-span-1 p-4 bg-[#060606] border border-white/5 rounded-lg">
          <div className="text-xs text-white/60">Follow-ups</div>
          <div className="text-2xl font-bold">{stats.followUps}</div>
        </div>
        <div className="col-span-1 p-4 bg-[#060606] border border-white/5 rounded-lg">
          <div className="text-xs text-white/60">Opportunities</div>
          <div className="text-2xl font-bold">{leads.filter(l=>l.service).length}</div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">Active Leads</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {columns.map((col) => (
          <div key={col.key} className="min-w-[260px] bg-[#070707] p-3 rounded-lg border border-white/5" onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>onDrop(e,col.key)}>
            <div className="font-semibold mb-3">{col.label} <span className="text-xs text-white/50">{leads.filter(l=>l.status===col.key).length}</span></div>
            <div className="space-y-3">
              {leads.filter(l=>l.status===col.key).map((lead)=> (
                <div key={lead.id} draggable onDragStart={(e)=>onDragStart(e, lead.id)} className="p-3 bg-[#0b0b0b] rounded-md border border-white/3 hover:card-hover cursor-grab" onClick={()=>open(lead)}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{lead.fullName}</div>
                      <div className="text-xs text-white/60">{lead.service || lead.source}</div>
                    </div>
                    <div className="text-sm text-white/60">{new Date(lead.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && <LeadDetail lead={selected} onClose={()=>setSelected(null)} />}
    </div>
  );
}
