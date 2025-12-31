import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body
    
    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Create contact record
    const contact = await db.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message
      }
    })
    
    // Here you would typically send an email notification
    // For now, we'll just log it
    console.log('New contact form submission:', {
      id: contact.id,
      name,
      email,
      subject,
      timestamp: contact.createdAt
    })
    
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        createdAt: contact.createdAt
      }
    })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const contacts = await db.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 50 // Limit to last 50 submissions
    })
    
    return NextResponse.json({
      success: true,
      data: contacts,
      total: contacts.length
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}