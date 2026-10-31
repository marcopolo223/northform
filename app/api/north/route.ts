let visits = 142;

export async function GET() {
  return Response.json({ count: visits });
}

export async function POST() {
  visits += 1;
  return Response.json({ count: visits });
}
