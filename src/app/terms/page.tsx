// File: src/app/terms/page.tsx

// Komponen untuk setiap section agar lebih rapi
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
    <div className="space-y-4 text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function TermsPage() {
  return (
    <main className="bg-white pt-32 pb-20">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl py-5 font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
            Syarat dan Ketentuan
          </h1>
          <p className="mt-4 text-lg text-gray-500">Terakhir diperbarui: 9 September 2025</p>
        </div>

        <div className="prose lg:prose-lg max-w-none">
          <Section title="1. Pendahuluan">
            <p>
              Selamat datang di Pasifixc. Syarat dan Ketentuan ini mengatur penggunaan Anda atas layanan kami, termasuk editing video, desain grafis, pengembangan web, dan produksi audio. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh ketentuan ini.
            </p>
          </Section>

          <Section title="2. Penggunaan Layanan">
            <p>
              Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda bertanggung jawab penuh atas semua materi (footage, gambar, musik) yang Anda berikan kepada kami dan menjamin bahwa Anda memiliki hak atau lisensi yang diperlukan untuk materi tersebut.
            </p>
            <p>
              Layanan yang kami sediakan adalah milik intelektual Pasifixc. Anda tidak diizinkan untuk mereproduksi atau mendistribusikan ulang hasil kerja tanpa izin tertulis dari kami, kecuali telah disepakati dalam kontrak proyek.
            </p>
          </Section>

          <Section title="3. Pembayaran dan Revisi">
            <p>
              Semua proyek memerlukan pembayaran di muka sebesar 50% sebelum pekerjaan dimulai. Sisa pembayaran harus dilunasi setelah proyek selesai dan disetujui, sebelum penyerahan file akhir. Ketentuan revisi akan dijelaskan dalam proposal proyek masing-masing.
            </p>
          </Section>
          
          <Section title="4. Batasan Tanggung Jawab">
            <p>
              Pasifixc tidak akan bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan layanan kami. Tanggung jawab maksimal kami atas setiap klaim terbatas pada jumlah total yang telah Anda bayarkan untuk layanan tersebut.
            </p>
          </Section>

          <Section title="5. Perubahan Ketentuan">
            <p>
              Kami berhak untuk mengubah atau mengganti Syarat dan Ketentuan ini kapan saja. Perubahan akan diinformasikan melalui website kami. Dengan terus menggunakan layanan setelah perubahan tersebut, Anda dianggap menyetujui ketentuan yang baru.
            </p>
          </Section>
        </div>

        <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
            <h3 className="font-bold text-red-800">Disclaimer Penting</h3>
            <p className="mt-2 text-red-700">
Dokumen ini disediakan untuk tujuan informasi semata dan tidak membentuk nasihat hukum. Pasifixc tidak memberikan jaminan apa pun, tersurat maupun tersirat, mengenai keakuratan, kelengkapan, atau kesesuaian informasi ini untuk tujuan tertentu. Penggunaan informasi dari halaman ini sepenuhnya menjadi risiko Anda sendiri. Untuk kepastian hukum, harap dapatkan bantuan dari penasihat hukum profesional. </p>        </div>

      </div>
    </main>
  );
}