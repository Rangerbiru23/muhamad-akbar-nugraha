'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Package, Truck, Star, ChevronRight, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('premium')

  const products = [
    {
      id: 1,
      name: 'Beras Premium Super',
      type: 'premium',
      price: 15000,
      weight: 5,
      description: 'Beras kualitas terbaik dengan butiran pilihan',
      features: ['Pulen', 'Wangi', 'Tidak Hancur', 'Tahan Lama']
    },
    {
      id: 2,
      name: 'Beras Medium Royal',
      type: 'medium',
      price: 12000,
      weight: 5,
      description: 'Beras kualitas baik dengan harga terjangkau',
      features: ['Pulen', 'Ekonomis', 'Kualitas Terjamin']
    },
    {
      id: 3,
      name: 'Beras Khusus Restauran',
      type: 'premium',
      price: 18000,
      weight: 10,
      description: 'Khusus untuk bisnis kuliner dan restauran',
      features: ['Premium Grade', 'Konsistensi Kualitas', 'Bulk Order']
    }
  ]

  const filteredProducts = products.filter(p => p.type === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Meta Ads Style Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 text-sm font-semibold">
                🎯 META ADS OPTIMIZED
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                MUHAMMAD AKBAR
                <span className="block text-yellow-400">NUGRAHA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                Perdagangan Besar Beras Terpercaya
              </p>
              <p className="text-lg text-blue-200">
                Supplier beras berkualitas untuk kebutuhan rumah tangga, restauran, dan bisnis Anda. 
                Harga kompetitif dengan kualitas terjamin.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  0852-8570-3497
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Order
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                  <Package className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, label: 'Produk Unggulan', value: '10+' },
              { icon: Truck, label: 'Pengiriman', value: 'Same Day' },
              { icon: Star, label: 'Kualitas', value: 'Premium' },
              { icon: Phone, label: 'Layanan 24/7', value: 'Available' }
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">PRODUK KAMI</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kualitas Beras Terbaik untuk Anda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih dari berbagai jenis beras berkualitas dengan harga kompetitif
            </p>
          </div>

          {/* Product Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              {['premium', 'medium'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'premium' ? 'Premium' : 'Medium'}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <Package className="h-16 w-16 text-blue-600" />
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
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Pesan Sekarang
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Melayani Kebutuhan Beras Anda
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Hubungi kami sekarang untuk penawaran terbaik dan pengiriman cepat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call Us: 0852-8570-3497
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                <p className="text-gray-600 text-sm">
                  KP CICALENGKA RT 003 RW 004, Desa Mekarmukti<br />
                  Kec. Cihampelas, Kab. Bandung Barat<br />
                  Provinsi Jawa Barat
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                <p className="text-gray-600 text-sm">
                  0852-8570-3497<br />
                  <span className="text-xs">Available 24/7</span>
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  info@muhammadakbarnugraha.com<br />
                  <span className="text-xs">Quick Response</span>
                </p>
              </CardContent>
            </Card>
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
                <li><a href="/about" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="/contact" className="hover:text-white">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MUHAMMAD AKBAR NUGRAHA. All rights reserved. | Powered by Meta Ads Technology</p>
          </div>
        </div>
      </footer>
    </div>
  )
}