import { EventEmitter } from 'events';

type Lead = {
  id: string;
  fullName: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  preferredDate?: string;
  source?: string;
  status?: string;
  priority?: string;
  assignedTo?: string | null;
  createdAt: string;
  lastInteraction?: string;
};

const leads: Lead[] = [];
const emitter = new EventEmitter();

export function addLead(payload: Partial<Lead>) {
  const lead: Lead = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2,9)}`,
    fullName: payload.fullName || 'Unknown',
    email: payload.email,
    phone: payload.phone,
    service: payload.service,
    message: payload.message,
    preferredDate: payload.preferredDate,
    source: payload.source || 'Website',
    status: payload.status || 'New',
    priority: payload.priority || 'Medium',
    assignedTo: payload.assignedTo || null,
    createdAt: new Date().toISOString(),
    lastInteraction: payload.lastInteraction || new Date().toISOString(),
  };
  leads.unshift(lead);
  // emit event for realtime subscribers
  emitter.emit('lead_created', lead);
  return lead;
}

export function getLeads() {
  return leads;
}

export function getLeadById(id: string) {
  return leads.find((l) => l.id === id) || null;
}

export function onLeadCreated(cb: (lead: Lead) => void) {
  emitter.on('lead_created', cb);
  return () => emitter.off('lead_created', cb);
}

export type { Lead };
