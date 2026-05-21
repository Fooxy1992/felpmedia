import { NextResponse } from 'next/server';
import { addLead, getLeads } from '../../../lib/crm';

export async function GET() {
  const all = getLeads();
  return NextResponse.json({ data: all });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const lead = addLead({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message,
      preferredDate: body.preferredDate,
      source: body.source || body.sourcePage || 'Website',
    });

    return NextResponse.json({ ok: true, data: lead });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }
}
