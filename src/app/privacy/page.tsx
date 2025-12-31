'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, Lock, User, Database, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 text-sm font-semibold mb-6">
              <Shield className="mr-2 h-4 w-4" />
              PRIVACY & SECURITY
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              MUHAMMAD AKBAR NUGRAHA - Perdagangan Besar Beras
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
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Selamat datang di website MUHAMMAD AKBAR NUGRAHA. Kami sangat memahami pentingnya 
                  privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana 
                  kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda 
                  ketika Anda menggunakan website dan layanan kami.
                </p>
                <p>
                  Dengan menggunakan website kami, Anda setuju dengan praktik-praktik yang dijelaskan 
                  dalam kebijakan privasi ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Database className="h-6 w-6 text-blue-600" />
                  Informasi yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Informasi Pribadi</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <User className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>Nama lengkap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <User className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>Alamat email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <User className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>Nomor telepon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <User className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>Alamat pengiriman</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Informasi Teknis</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Eye className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>Alamat IP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>Data browser dan perangkat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>Cookies dan data tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>Riwayat interaksi website</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Eye className="h-6 w-6 text-blue-600" />
                  Penggunaan Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami menggunakan informasi yang dikumpulkan untuk tujuan-tujuan berikut:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Layanan Pelanggan</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• Memproses pesanan beras</li>
                      <li>• Menghubungi Anda tentang pesanan</li>
                      <li>• Memberikan dukungan pelanggan</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Peningkatan Layanan</h4>
                    <ul className="space-y-1 text-sm text-purple-800">
                      <li>• Analisis penggunaan website</li>
                      <li>• Pengembangan produk baru</li>
                      <li>• Personalisasi pengalaman</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Komunikasi</h4>
                    <ul className="space-y-1 text-sm text-green-800">
                      <li>• Newsletter dan promo</li>
                      <li>• Update produk</li>
                      <li>• Informasi penting</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Keamanan</h4>
                    <ul className="space-y-1 text-sm text-yellow-800">
                      <li>• Deteksi fraud</li>
                      <li>• Keamanan transaksi</li>
                      <li>• Kepatuhan hukum</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lock className="h-6 w-6 text-blue-600" />
                  Keamanan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami berkomitmen untuk melindungi keamanan data pribadi Anda dengan:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Enkripsi Data</h4>
                      <p className="text-sm text-gray-600">Semua data sensitif dienkripsi dengan teknologi SSL/TLS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Akses Terbatas</h4>
                      <p className="text-sm text-gray-600">Hanya personel berwenang yang dapat mengakses data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Update Keamanan</h4>
                      <p className="text-sm text-gray-600">Sistem kami selalu diperbarui dengan patch keamanan terbaru</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <User className="h-6 w-6 text-blue-600" />
                  Berbagi dengan Pihak Ketiga
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                  untuk tujuan pemasaran tanpa persetujuan Anda. Kami hanya akan membagikan informasi dalam 
                  kondisi berikut:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">• Dengan persetujuan eksplisit dari Anda</li>
                  <li className="list-disc">• Untuk memproses transaksi (payment gateway, jasa pengiriman)</li>
                  <li className="list-disc">• Jika diwajibkan oleh hukum atau peraturan</li>
                  <li className="list-disc">• Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <User className="h-6 w-6 text-blue-600" />
                  Hak Anda sebagai Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Anda memiliki hak-hak berikut terkait data pribadi Anda:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Akses Data</h4>
                    <p className="text-sm text-gray-600">Meminta salinan data pribadi yang kami simpan</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Koreksi Data</h4>
                    <p className="text-sm text-gray-600">Memperbaiki data yang tidak akurat</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Hapus Data</h4>
                    <p className="text-sm text-gray-600">Meminta penghapusan data pribadi</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Opt-out</h4>
                    <p className="text-sm text-gray-600">Berhenti berlangganan komunikasi marketing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="h-6 w-6 text-yellow-400" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-100">
                  Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
                  silakan hubungi kami:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Kontak Utama</h4>
                    <p className="text-white">MUHAMMAD AKBAR NUGRAHA</p>
                    <p className="text-blue-100">Email: privacy@muhammadakbarnugraha.com</p>
                    <p className="text-blue-100">Telepon: 0852-8570-3497</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Alamat</h4>
                    <p className="text-blue-100">
                      KP CICALENGKA RT 003 RW 004<br />
                      Desa Mekarmukti, Kec. Cihampelas<br />
                      Kab. Bandung Barat, Jawa Barat
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center py-8">
              <p className="text-gray-600 text-sm">
                Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                MUHAMMAD AKBAR NUGRAHA - Perdagangan Besar Beras Terpercaya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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