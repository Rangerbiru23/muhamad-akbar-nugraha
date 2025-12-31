'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Shield, AlertCircle, CheckCircle, Gavel, Users } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 text-sm font-semibold mb-6">
              <Gavel className="mr-2 h-4 w-4" />
              LEGAL & TERMS
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Syarat dan Ketentuan
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
            <span className="text-gray-900 font-medium">Terms & Conditions</span>
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
                  Selamat datang di website MUHAMMAD AKBAR NUGRAHA. Syarat dan Ketentuan ini 
                  mengatur penggunaan website dan layanan yang kami sediakan. Dengan mengakses 
                  atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                </p>
                <p>
                  Website ini dimiliki dan dioperasikan oleh MUHAMMAD AKBAR NUGRAHA, 
                  penyedia layanan perdagangan besar beras terpercaya di Bandung Barat.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Definisi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">"Perusahaan"</h4>
                    <p className="text-sm text-blue-800">
                      Merujuk pada MUHAMMAD AKBAR NUGRAHA, pemilik dan operator website
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">"Pelanggan"</h4>
                    <p className="text-sm text-purple-800">
                      Individu atau entitas yang membeli produk dari Perusahaan
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">"Produk"</h4>
                    <p className="text-sm text-green-800">
                      Beras dan produk terkait yang ditawarkan oleh Perusahaan
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">"Website"</h4>
                    <p className="text-sm text-yellow-800">
                      Platform online di muhammadakbarnugraha.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Products and Services */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Produk dan Layanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-lg text-gray-900">Kualitas Produk</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Semua produk beras yang kami jual adalah produk berkualitas terbaik</li>
                  <li className="list-disc">Kami menjamin keaslian dan kualitas produk sesuai deskripsi</li>
                  <li className="list-disc">Stok produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
                  <li className="list-disc">Harga produk dapat berubah sesuai kondisi pasar</li>
                </ul>

                <h3 className="font-semibold text-lg text-gray-900 mt-6">Ketersediaan Produk</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Kami berusaha menjaga ketersediaan produk yang tercantum</li>
                  <li className="list-disc">Jika produk habis, kami akan memberikan alternatif atau pengembalian dana</li>
                  <li className="list-disc">Minimum order berlaku untuk beberapa jenis produk</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ordering and Payment */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Pemesanan dan Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-lg text-gray-900">Proses Pemesanan</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Pemesanan dapat dilakukan melalui website, telepon, atau WhatsApp</li>
                  <li className="list-disc">Pelanggan harus memberikan informasi yang akurat dan lengkap</li>
                  <li className="list-disc">Konfirmasi pemesanan akan dikirim melalui email atau WhatsApp</li>
                  <li className="list-disc">Perusahaan berhak menolak pesanan dengan alasan yang sah</li>
                </ul>

                <h3 className="font-semibold text-lg text-gray-900 mt-6">Metode Pembayaran</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Transfer bank ke rekening resmi Perusahaan</li>
                  <li className="list-disc">Pembayaran tunai untuk pengambilan langsung</li>
                  <li className="list-disc">Pembayaran harus dilunasi sebelum pengiriman produk</li>
                  <li className="list-disc">Bukti pembayaran harus disimpan sebagai referensi</li>
                </ul>

                <h3 className="font-semibold text-lg text-gray-900 mt-6">Harga dan Biaya</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Harga yang tercantum belum termasuk biaya pengiriman</li>
                  <li className="list-disc">Biaya pengiriman disesuaikan dengan jarak dan berat produk</li>
                  <li className="list-disc">Harga dapat berubah tanpa pemberitahuan sebelumnya</li>
                </ul>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-blue-600" />
                  Pengiriman
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-lg text-gray-900">Jadwal Pengiriman</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Pengiriman dilakukan pada hari kerja (Senin-Sabtu)</li>
                  <li className="list-disc">Estimasi waktu pengiriman: 1-3 hari kerja untuk area Bandung Barat</li>
                  <li className="list-disc">Pengiriman luar kota memerlukan waktu lebih lama</li>
                  <li className="list-disc">Pelanggan akan diinformasikan mengenai jadwal pengiriman</li>
                </ul>

                <h3 className="font-semibold text-lg text-gray-900 mt-6">Resiko Pengiriman</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Resiko produk selama pengiriman menjadi tanggung jawab Perusahaan</li>
                  <li className="list-disc">Pelanggan harus memeriksa kondisi produk saat diterima</li>
                  <li className="list-disc">Kerusakan produk saat pengiriman akan diganti atau direfund</li>
                </ul>
              </CardContent>
            </Card>

            {/* Returns and Refunds */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
              Retur dan Pengembalian Dana
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-lg text-gray-900">Kebijakan Retur</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Retur dapat dilakukan dalam waktu 24 jam setelah penerimaan produk</li>
                  <li className="list-disc">Produk yang dapat diretur harus dalam kondisi utuh</li>
                  <li className="list-disc">Alasan retur yang valid: produk rusak, salah kirim, atau tidak sesuai deskripsi</li>
                  <li className="list-disc">Biaya pengembalian produk ditanggung oleh Perusahaan</li>
                </ul>

                <h3 className="font-semibold text-lg text-gray-900 mt-6">Proses Pengembalian Dana</h3>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Pengembalian dana akan diproses dalam 3-5 hari kerja</li>
                  <li className="list-disc">Dana akan dikembalikan ke rekening asal pembayaran</li>
                  <li className="list-disc">Biaya transfer bank ditanggung oleh Perusahaan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, 
                  logo, dan desain, dilindungi oleh hak cipta dan merek dagang milik 
                  MUHAMMAD AKBAR NUGRAHA.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Dilarang menyalin, mendistribusikan, atau menggunakan konten tanpa izin</li>
                  <li className="list-disc">Nama "MUHAMMAD AKBAR NUGRAHA" adalah merek dagang terdaftar</li>
                  <li className="list-disc">Pelanggaran hak kekayaan intelektual akan ditindak sesuai hukum</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Perusahaan tidak bertanggung jawab atas:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li className="list-disc">Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                  <li className="list-disc">Kerusakan produk akibat penanganan yang salah oleh Pelanggan</li>
                  <li className="list-disc">Gangguan teknis pada website di luar kendali Perusahaan</li>
                  <li className="list-disc">Kesalahan informasi yang disediakan oleh Pelanggan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Force Majeure */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  Force Majeure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Perusahaan dibebaskan dari kewajiban jika terjadi kejadian di luar kendali 
                  yang wajar (force majeure), termasuk namun tidak terbatas pada:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Bencana alam (gempa bumi, banjir, tanah longsor)</li>
                  <li className="list-disc">Kondisi cuaca ekstrem</li>
                  <li className="list-disc">Kerusakan infrastruktur</li>
                  <li className="list-disc">Kebijakan pemerintah yang mempengaruhi operasional</li>
                  <li className="list-disc">Krisis ekonomi atau moneter</li>
                  <li className="list-disc">Pandemi atau wabah penyakit</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Gavel className="h-6 w-6 text-blue-600" />
                  Terminasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-lg text-gray-900">Hak Terminasi Perusahaan</h3>
                <p>
                  Perusahaan berhak menghentikan layanan atau membatasi akses Pelanggan jika:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Pelanggan melanggar syarat dan ketentuan ini</li>
                  <li className="list-disc">Pelanggan memberikan informasi palsu atau menyesatkan</li>
                  <li className="list-disc">Pelanggan terlibat dalam aktivitas ilegal atau penipuan</li>
                  <li className="list-disc">Pelanggan membahayakan operasional Perusahaan</li>
                </ul>

                <h3 className="font-semibold text-lg text-gray-900 mt-6">Hak Terminasi Pelanggan</h3>
                <p>
                  Pelanggan berhak menghentikan pemesanan sebelum proses pengiriman dimulai.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Gavel className="h-6 w-6 text-blue-600" />
                  Hukum yang Berlaku
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                  Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan 
                  syarat dan ketentuan ini akan diselesaikan melalui:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="list-disc">Musyawarah dan mufakat terlebih dahulu</li>
                  <li className="list-disc">Jika tidak tercapai kesepakatan, sengketa akan diselesaikan di pengadilan negeri Bandung</li>
                  <li className="list-disc">Pelanggan setuju pada yurisdiksi pengadilan Indonesia</li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Perubahan Syarat dan Ketentuan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Perusahaan berhak mengubah syarat dan ketentuan ini sewaktu-waktu. 
                  Perubahan akan berlaku efektif setelah dipublikasikan di website. 
                  Pelanggan disarankan untuk secara berkala meninjau syarat dan ketentuan ini.
                </p>
                <p>
                  Penggunaan website yang berkelanjutan setelah perubahan menunjukkan 
                  persetujuan Pelanggan terhadap syarat dan ketentuan yang diperbarui.
                </p>
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
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, 
                  silakan hubungi kami:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Kontak Utama</h4>
                    <p className="text-white">MUHAMMAD AKBAR NUGRAHA</p>
                    <p className="text-blue-100">Email: legal@muhammadakbarnugraha.com</p>
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
                Syarat dan Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
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