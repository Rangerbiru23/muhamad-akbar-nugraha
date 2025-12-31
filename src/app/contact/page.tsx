'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  Facebook,
  Instagram,
  Users,
  Building,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 text-sm font-semibold mb-6">
              <MessageCircle className="mr-2 h-4 w-4" />
              HUBUNGI KAMI
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Hubungi <span className="text-yellow-400">MUHAMMAD AKBAR NUGRAHA</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Siap melayani kebutuhan beras Anda dengan kualitas terbaik dan harga kompetitif
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
            <span className="text-gray-900 font-medium">Kontak</span>
          </nav>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                <p className="text-gray-700 font-medium">0852-8570-3497</p>
                <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-700 font-medium text-sm">info@muhammadakbarnugraha.com</p>
                <p className="text-sm text-gray-500 mt-1">Quick Response</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                <p className="text-gray-700 font-medium text-sm">Bandung Barat</p>
                <p className="text-sm text-gray-500 mt-1">Jawa Barat</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Jam Operasional</h3>
                <p className="text-gray-700 font-medium">Setiap Hari</p>
                <p className="text-sm text-gray-500 mt-1">06:00 - 22:00 WIB</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  Kirim Pesan
                </CardTitle>
                <p className="text-gray-600">
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-800">Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap Anda"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Contoh: Informasi Produk Beras"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Detailed Contact Info */}
            <div className="space-y-8">
              {/* Company Address */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Building className="h-5 w-5 text-blue-600" />
                    Alamat Lengkap
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">MUHAMMAD AKBAR NUGRAHA</p>
                      <p className="text-gray-600 text-sm mt-1">
                        KP CICALENGKA RT 003 RW 004<br />
                        Desa/Kelurahan Mekarmukti<br />
                        Kecamatan Cihampelas<br />
                        Kabupaten Bandung Barat<br />
                        Provinsi Jawa Barat<br />
                        Kode Pos: 40562
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      Buka di Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    Kontak Cepat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <span className="text-blue-100">WhatsApp</span>
                      <a href="https://wa.me/6285285703497" className="text-yellow-400 font-semibold hover:text-yellow-300">
                        0852-8570-3497
                      </a>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <span className="text-blue-100">Telepon</span>
                      <a href="tel:6285285703497" className="text-yellow-400 font-semibold hover:text-yellow-300">
                        0852-8570-3497
                      </a>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <span className="text-blue-100">Email</span>
                      <a href="mailto:info@muhammadakbarnugraha.com" className="text-yellow-400 font-semibold hover:text-yellow-300 text-sm">
                        info@muhammadakbarnugraha.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button size="lg" className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Sekarang
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Users className="h-5 w-5 text-blue-600" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ikuti kami di media sosial untuk update produk dan promo terbaru
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Instagram className="mr-2 h-4 w-4" />
                      Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">PERTANYAAN UMUM</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Apakah melayani pengiriman luar kota?",
                answer: "Ya, kami melayani pengiriman ke seluruh Indonesia dengan biaya dan estimasi waktu yang bervariasi."
              },
              {
                question: "Apakah ada minimum order?",
                answer: "Minimum order 5kg untuk pembelian eceran dan 50kg untuk pembelian grosir."
              },
              {
                question: "Bagaimana cara pembayaran?",
                answer: "Kami menerima transfer bank, tunai, dan pembayaran melalui e-wallet."
              },
              {
                question: "Apakah produk bergaransi?",
                answer: "Ya, kami memberikan garansi penggantian jika produk rusak saat pengiriman."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
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
            Hubungi kami sekarang untuk penawaran terbaik dan konsultasi gratis
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