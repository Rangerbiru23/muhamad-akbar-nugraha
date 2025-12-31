import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const email = searchParams.get('email')
    
    let whereClause = {}
    
    if (status) {
      whereClause = { ...whereClause, status }
    }
    
    if (email) {
      whereClause = { ...whereClause, customerEmail: email }
    }
    
    const orders = await db.order.findMany({
      where: whereClause,
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return NextResponse.json({
      success: true,
      data: orders,
      total: orders.length
    })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      customerName, 
      customerEmail, 
      customerPhone, 
      address, 
      items 
    } = body
    
    // Validation
    if (!customerName || !customerEmail || !customerPhone || !address || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Calculate total amount
    let totalAmount = 0
    const orderItems = []
    
    for (const item of items) {
      const product = await db.product.findUnique({
        where: { id: item.productId }
      })
      
      if (!product) {
        return NextResponse.json(
          { success: false, error: `Product with ID ${item.productId} not found` },
          { status: 404 }
        )
      }
      
      if (product.stock < item.quantity) {
        return NextResponse.json(
          { success: false, error: `Insufficient stock for product ${product.name}` },
          { status: 400 }
        )
      }
      
      const itemTotal = product.price * item.quantity
      totalAmount += itemTotal
      
      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: product.price
      })
      
      // Update product stock
      await db.product.update({
        where: { id: item.productId },
        data: {
          stock: product.stock - item.quantity
        }
      })
    }
    
    // Create order
    const order = await db.order.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        address,
        totalAmount,
        status: 'PENDING',
        items: {
          create: orderItems
        }
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    })
    
    return NextResponse.json({
      success: true,
      data: order
    })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}