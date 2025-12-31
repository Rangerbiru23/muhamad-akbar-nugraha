'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Target, 
  Heart, 
  TrendingUp,
  Package,
  Truck,
  Star,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 text-sm font-semibold mb-6">
              <Building className="mr-2 h-4 w-4" />
              TENTANG KAMI
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tentang <span className="text-yellow-400">MUHAMMAD AKBAR NUGRAHA</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Perdagangan Besar Beras Terpercaya di Bandung Barat
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
            <span className="text-gray-900 font-medium">Tentang Kami</span>
          </nav>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                <Building className="mr-2 h-4 w-4" />
                PROFIL PERUSAHAAN
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Mitra Terpercaya untuk Kebutuhan Beras Anda
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                MUHAMMAD AKBAR NUGRAHA adalah penyedia layanan perdagangan besar beras 
                yang telah berpengalaman dalam melayani kebutuhan beras untuk rumah tangga, 
                restauran, hotel, dan bisnis lainnya di wilayah Bandung Barat dan sekitarnya.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan komitmen terhadap kualitas dan pelayanan terbaik, kami menyediakan 
                berbagai jenis beras pilihan dengan harga kompetitif dan kualitas terjamin.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline">
                  <Package className="mr-2 h-5 w-5" />
                  Lihat Produk
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                  <Building className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Berdiri Sejak</h3>
                <p className="text-2xl font-bold text-blue-600">2020</p>
                <p className="text-sm text-gray-600 mt-1">Lebih dari 4 tahun pengalaman</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Produk</h3>
                <p className="text-2xl font-bold text-green-600">10+</p>
                <p className="text-sm text-gray-600 mt-1">Jenis beras berkualitas</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Pengiriman</h3>
                <p className="text-2xl font-bold text-purple-600">Same Day</p>
                <p className="text-sm text-gray-600 mt-1">Untuk area Bandung Barat</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Kepuasan</h3>
                <p className="text-2xl font-bold text-yellow-600">98%</p>
                <p className="text-sm text-gray-600 mt-1">Tingkat kepuasan pelanggan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">VISI & MISI</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tujuan Kami untuk Melayani Anda
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                  <Target className="h-6 w-6 text-blue-600" />
                  Visi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Menjadi penyedia beras terkemuka dan terpercaya di Indonesia yang 
                  memberikan solusi lengkap untuk kebutuhan beras berkualitas tinggi 
                  dengan harga yang kompetitif.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Kualitas produk yang konsisten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pelayanan pelanggan yang prima</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Inovasi dalam distribusi beras</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-purple-900">
                  <Heart className="h-6 w-6 text-purple-600" />
                  Misi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Memberikan pelayanan terbaik dengan menyediakan beras berkualitas 
                  tinggi, harga terjangkau, dan pengiriman tepat waktu untuk memenuhi 
                  kebutuhan pelanggan.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Menjaga kualitas produk terbaik</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Memberikan harga yang kompetitif</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Membangun hubungan jangka panjang</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 mb-4">NILAI-NILAI KAMI</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prinsip yang Membimbing Kami
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Kualitas",
                description: "Kami hanya menyediakan beras berkualitas terbaik dengan proses quality control yang ketat",
                color: "blue"
              },
              {
                icon: Users,
                title: "Integritas",
                description: "Berbisnis dengan jujur, transparan, dan bertanggung jawab dalam setiap transaksi",
                color: "green"
              },
              {
                icon: Heart,
                title: "Pelanggan",
                description: "Kepuasan pelanggan adalah prioritas utama kami dalam setiap pelayanan",
                color: "purple"
              },
              {
                icon: TrendingUp,
                title: "Inovasi",
                description: "Terus berinovasi dalam sistem distribusi dan pelayanan untuk kemudahan pelanggan",
                color: "yellow"
              },
              {
                icon: Truck,
                title: "Kecepatan",
                description: "Pengiriman cepat dan tepat waktu untuk memenuhi kebutuhan pelanggan",
                color: "red"
              },
              {
                icon: Package,
                title: "Profesionalisme",
                description: "Pelayanan profesional dengan standar tertinggi dalam industri perdagangan beras",
                color: "indigo"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className={`h-8 w-8 text-${value.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">PRODUK UNGGULAN</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kualitas Beras Terbaik Pilihan Kami
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Beras Premium Super",
                type: "Premium Grade",
                features: ["Pulen", "Wangi", "Tidak Hancur", "Tahan Lama"],
                price: "Rp 15.000/kg"
              },
              {
                name: "Beras Medium Royal",
                type: "Medium Grade",
                features: ["Pulen", "Ekonomis", "Kualitas Terjamin"],
                price: "Rp 12.000/kg"
              },
              {
                name: "Beras Khusus Restauran",
                type: "Commercial Grade",
                features: ["Premium Grade", "Konsistensi", "Bulk Order"],
                price: "Rp 18.000/kg"
              }
            ].map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <Package className="h-16 w-16 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{product.name}</CardTitle>
                  <Badge variant="secondary">{product.type}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-lg font-bold text-blue-600">{product.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hubungi Kami Sekarang
            </h2>
            <p className="text-xl text-blue-100">
              Siap melayani kebutuhan beras Anda dengan kualitas terbaik
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="font-semibold text-lg mb-3 text-white">Alamat</h3>
                <p className="text-blue-100 text-sm">
                  KP CICALENGKA RT 003 RW 004<br />
                  Desa Mekarmukti, Kec. Cihampelas<br />
                  Kab. Bandung Barat<br />
                  Provinsi Jawa Barat
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="font-semibold text-lg mb-3 text-white">Telepon</h3>
                <p className="text-blue-100 text-sm">
                  0852-8570-3497<br />
                  <span className="text-xs">Available 24/7</span>
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="font-semibold text-lg mb-3 text-white">Email</h3>
                <p className="text-blue-100 text-sm">
                  info@muhammadakbarnugraha.com<br />
                  <span className="text-xs">Quick Response</span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8">
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Kami Sekarang
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