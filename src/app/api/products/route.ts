import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const search = searchParams.get('search')
    
    let whereClause = {}
    
    if (category && category !== 'all') {
      whereClause = { ...whereClause, type: category }
    }
    
    if (featured === 'true') {
      whereClause = { ...whereClause, featured: true }
    }
    
    const products = await db.product.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    // Filter by search term if provided
    let filteredProducts = products
    if (search) {
      const searchLower = search.toLowerCase()
      filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.type.toLowerCase().includes(searchLower)
      )
    }
    
    return NextResponse.json({
      success: true,
      data: filteredProducts,
      total: filteredProducts.length
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, type, weight, price, stock, image, featured } = body
    
    // Validation
    if (!name || !type || !weight || !price || !stock) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const product = await db.product.create({
      data: {
        name,
        description,
        type,
        weight: parseFloat(weight),
        price: parseFloat(price),
        stock: parseInt(stock),
        image,
        featured: featured || false
      }
    })
    
    return NextResponse.json({
      success: true,
      data: product
    })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    )
  }
}