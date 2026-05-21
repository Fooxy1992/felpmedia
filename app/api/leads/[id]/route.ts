import { NextResponse } from 'next/server';
import { getLeadById } from '../../../../lib/crm';
import { getLeads } from '../../../../lib/crm';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const id = params.id;
    const lead = getLeadById(id);
    if (!lead) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });

    // Minimal patch: update status, priority, assignedTo
    if (body.status) (lead as any).status = body.status;
    if (body.priority) (lead as any).priority = body.priority;
    if (body.assignedTo !== undefined) (lead as any).assignedTo = body.assignedTo;
    (lead as any).lastInteraction = new Date().toISOString();

    return NextResponse.json({ ok: true, data: lead });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }
}
