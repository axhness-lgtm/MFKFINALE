import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'src/data/inquiries.json');

// Helper to ensure database file exists
function ensureDb() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Server-side validation
    if (!data.email || !data.firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    ensureDb();
    
    const currentData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    
    const newInquiry = {
      id: Date.now().toString(),
      ...data,
      timestamp: new Date().toISOString(),
    };

    currentData.push(newInquiry);
    fs.writeFileSync(DB_PATH, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true, id: newInquiry.id });
  } catch (error) {
    console.error('Error in inquiries API:', error);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}

export async function GET() {
  try {
    ensureDb();
    const currentData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    return NextResponse.json(currentData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}
