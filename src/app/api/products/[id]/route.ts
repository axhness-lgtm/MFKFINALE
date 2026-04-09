import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'products.json');

const getProducts = () => {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data).products || [];
  } catch (error) {
    return [];
  }
};

const saveProducts = (products: any) => {
  fs.writeFileSync(dataFile, JSON.stringify({ products }, null, 2));
};

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
    const body = await request.json();
    const products = getProducts();
    
    const index = products.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    products[index] = { ...products[index], ...body, updatedAt: new Date().toISOString() };
    saveProducts(products);
    
    return NextResponse.json(products[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
    const products = getProducts();
    
    const newProducts = products.filter((p: any) => p.id !== id);
    saveProducts(newProducts);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
