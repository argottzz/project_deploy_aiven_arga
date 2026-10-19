import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export const dynamic = 'force-dynamic';

// GET /api/categories -> list categories available for products
export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.query(
      'SELECT id, name FROM categories ORDER BY name ASC'
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
