import { db } from '@/lib/db'

async function seedProducts() {
  try {
    // Check if products already exist
    const existingProducts = await db.product.count()
    if (existingProducts > 0) {
      console.log('Products already exist, skipping seed')
      return
    }

    const products = [
      {
        name: 'Beras Premium Super',
        description: 'Beras kualitas terbaik dengan butiran pilihan, pulen dan wangi alami',
        type: 'premium',
        weight: 5,
        price: 15000,
        stock: 100,
        featured: true,
        image: '/images/beras-premium.jpg'
      },
      {
        name: 'Beras Medium Royal',
        description: 'Beras kualitas baik dengan harga terjangkau, cocok untuk sehari-hari',
        type: 'medium',
        weight: 5,
        price: 12000,
        stock: 150,
        featured: false,
        image: '/images/beras-medium.jpg'
      },
      {
        name: 'Beras Khusus Restauran',
        description: 'Khusus untuk bisnis kuliner dan restauran dengan kualitas konsisten',
        type: 'premium',
        weight: 10,
        price: 18000,
        stock: 50,
        featured: true,
        image: '/images/beras-restauran.jpg'
      },
      {
        name: 'Beras Organik Premium',
        description: 'Beras organik tanpa pestisida, ramah lingkungan dan sehat',
        type: 'organic',
        weight: 5,
        price: 22000,
        stock: 30,
        featured: true,
        image: '/images/beras-organic.jpg'
      },
      {
        name: 'Beras Pandan Wangi',
        description: 'Beras dengan aroma pandan alami yang khas dan cita rasa istimewa',
        type: 'premium',
        weight: 5,
        price: 17000,
        stock: 80,
        featured: false,
        image: '/images/beras-pandan.jpg'
      },
      {
        name: 'Beras IR 64 Quality',
        description: 'Beras IR 64 kualitas terbaik, stok selalu tersedia',
        type: 'medium',
        weight: 10,
        price: 11000,
        stock: 200,
        featured: false,
        image: '/images/beras-ir64.jpg'
      }
    ]

    for (const product of products) {
      await db.product.create({
        data: product
      })
    }

    console.log('✅ Products seeded successfully')
  } catch (error) {
    console.error('❌ Error seeding products:', error)
  }
}

export default seedProducts