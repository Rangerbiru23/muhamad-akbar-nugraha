'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Package, 
  Star, 
  Truck, 
  Shield, 
  Filter, 
  Search,
  ChevronRight,
  Phone,
  MessageCircle,
  Scale,
  Clock,
  CheckCircle,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const products = [
    {
      id: 1,
      name: 'Beras Premium Super',
      category: 'premium',
      price: 15000,
      weight: 5,
      description: 'Beras kualitas terbaik dengan butiran pilihan, pulen dan wangi alami',
      features: ['Pulen', 'Wangi', 'Tidak Hancur', 'Tahan Lama', 'Non-Pestisida'],
      stock: 100,
      rating: 4.9,
      reviews: 245,
      image: '/api/placeholder/300/300',
      featured: true,
      minOrder: 5,
      deliveryTime: 'Same Day'
    },
    {
      id: 2,
      name: 'Beras Medium Royal',
      category: 'medium',
      price: 12000,
      weight: 5,
      description: 'Beras kualitas baik dengan harga terjangkau, cocok untuk sehari-hari',
      features: ['Pulen', 'Ekonomis', 'Kualitas Terjamin', 'Tahan Lama'],
      stock: 150,
      rating: 4.7,
      reviews: 189,
      image: '/api/placeholder/300/300',
      featured: false,
      minOrder: 5,
      deliveryTime: 'Same Day'
    },
    {
      id: 3,
      name: 'Beras Khusus Restauran',
      category: 'premium',
      price: 18000,
      weight: 10,
      description: 'Khusus untuk bisnis kuliner dan restauran dengan kualitas konsisten',
      features: ['Premium Grade', 'Konsistensi Kualitas', 'Bulk Order', 'Certified'],
      stock: 50,
      rating: 4.8,
      reviews: 67,
      image: '/api/placeholder/300/300',
      featured: true,
      minOrder: 50,
      deliveryTime: '1-2 Days'
    },
    {
      id: 4,
      name: 'Beras Organik Premium',
      category: 'organic',
      price: 22000,
      weight: 5,
      description: 'Beras organik tanpa pestisida, ramah lingkungan dan sehat',
      features: ['100% Organik', 'Sertifikasi Halal', 'Tanpa Pestisida', 'Nutrisi Tinggi'],
      stock: 30,
      rating: 4.9,
      reviews: 123,
      image: '/api/placeholder/300/300',
      featured: true,
      minOrder: 5,
      deliveryTime: '2-3 Days'
    },
    {
      id: 5,
      name: 'Beras Pandan Wangi',
      category: 'premium',
      price: 17000,
      weight: 5,
      description: 'Beras dengan aroma pandan alami yang khas dan cita rasa istimewa',
      features: ['Aroma Pandan', 'Pulen', 'Wangi Alami', 'Tahan Lama'],
      stock: 80,
      rating: 4.8,
      reviews: 156,
      image: '/api/placeholder/300/300',
      featured: false,
      minOrder: 5,
      deliveryTime: 'Same Day'
    },
    {
      id: 6,
      name: 'Beras IR 64 Quality',
      category: 'medium',
      price: 11000,
      weight: 10,
      description: 'Beras IR 64 kualitas terbaik, stok selalu tersedia',
      features: ['IR 64 Premium', 'Stabil', 'Ekonomis', 'Kualitas Terjamin'],
      stock: 200,
      rating: 4.6,
      reviews: 298,
      image: '/api/placeholder/300/300',
      featured: false,
      minOrder: 10,
      deliveryTime: 'Same Day'
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Produk', count: products.length },
    { id: 'premium', name: 'Premium', count: products.filter(p => p.category === 'premium').length },
    { id: 'medium', name: 'Medium', count: products.filter(p => p.category === 'medium').length },
    { id: 'organic', name: 'Organik', count: products.filter(p => p.category === 'organic').length }
  ]

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 text-sm font-semibold mb-6">
              <Package className="mr-2 h-4 w-4" />
              KATALOG PRODUK
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Produk Beras <span className="text-yellow-400">Berkualitas</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Pilih dari berbagai jenis beras berkualitas dengan harga kompetitif 
              dan kualitas terjamin dari MUHAMMAD AKBAR NUGRAHA
            </p>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Produk</span>
          </nav>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Cari produk beras..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="relative"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2 px-2 py-0 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Urutkan: Nama</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
                <option value="rating">Rating: Tertinggi</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {selectedCategory === 'all' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="bg-yellow-100 text-yellow-800 mb-4">
                <Award className="mr-2 h-4 w-4" />
                PRODUK UNGGULAN
              </Badge>
              <h2 className="text-2xl font-bold text-gray-900">Produk Terlaris Kami</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.featured).map(product => (
                <Card key={product.id} className="border-2 border-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="relative">
                    <Badge className="absolute top-4 right-4 bg-yellow-400 text-black">
                      <Star className="mr-1 h-3 w-3" />
                      Unggulan
                    </Badge>
                    <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                      <Package className="h-20 w-20 text-yellow-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">
                          Rp {product.price.toLocaleString('id-ID')}
                        </span>
                        <span className="text-sm text-gray-500">/{product.weight}kg</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} ulasan)</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Phone className="mr-2 h-4 w-4" />
                        Pesan Sekarang
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Semua Produk' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600 mt-2">
              Menampilkan {filteredProducts.length} produk
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="relative">
                  {product.stock < 50 && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      Stok Terbatas
                    </Badge>
                  )}
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <Package className="h-20 w-20 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        Rp {product.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-sm text-gray-500">/{product.weight}kg</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} ulasan)</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Scale className="h-4 w-4" />
                        <span>Min: {product.minOrder}kg</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{product.deliveryTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.features.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium">
                        {product.stock > 50 ? 'Stok Tersedia' : `Stok: ${product.stock}kg`}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Phone className="mr-1 h-3 w-3" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="mr-1 h-3 w-3" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Tidak ada produk ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah filter atau kata kunci pencarian Anda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Pengiriman Cepat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Pengiriman same day untuk area Bandung Barat dan 1-3 hari untuk luar kota
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Kualitas Terjamin</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Semua produk melalui quality control ketat sebelum dikirim ke pelanggan
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Harga Terbaik</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Harga kompetitif dengan kualitas premium untuk semua jenis kebutuhan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Butuh Bantuan Memilih Produk?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Tim kami siap membantu Anda menemukan produk yang sesuai dengan kebutuhan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8">
              <Phone className="mr-2 h-5 w-5" />
              Konsultasi Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                MUHAMMAD AKBAR NUGRAHA
              </h3>
              <p className="text-gray-400 text-sm">
                Perdagangan Besar Beras Terpercaya di Bandung Barat
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Beras Premium</li>
                <li>Beras Medium</li>
                <li>Supply Restauran</li>
                <li>Pengiriman Bulk</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-white">Beranda</a></li>
                <li><a href="/about" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <p className="text-gray-400 text-sm">
                0852-8570-3497<br />
                KP CICALENGKA RT 003 RW 004<br />
                Bandung Barat, Jawa Barat
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MUHAMMAD AKBAR NUGRAHA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}