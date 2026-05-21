import { NextResponse } from 'next/server';
import { onLeadCreated } from '../../../lib/crm';

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      const send = (data: any) => {
        const payload = `data: ${JSON.stringify(data)}\n\n`;
        controller.enqueue(new TextEncoder().encode(payload));
      };

      // send a ping to establish connection
      controller.enqueue(new TextEncoder().encode('data: connected\n\n'));

      const off = onLeadCreated((lead) => send({ type: 'lead_created', lead }));

      // keep the stream open
      // when the consumer cancels, cleanup
      controller.enqueue(new TextEncoder().encode('data: ready\n\n'));

      // store cancel handler
      (controller as any).onCancel = () => {
        off();
      };
    },
    cancel() {
      // noop
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
