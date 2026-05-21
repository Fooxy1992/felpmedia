import { NextRequest, NextResponse } from 'next/server';
import { getLeadById } from '../../../../lib/crm';

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string | string[] | undefined }> }) {
  try {
    const body = await req.json();
    const params = await context.params;
    const id = params.id;
    const lead = getLeadById(String(id));
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
