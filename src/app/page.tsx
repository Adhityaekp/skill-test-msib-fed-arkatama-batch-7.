import Image from "next/image";
import BlogComponent from "../components/Blog/BlogComponent";
import PortfolioComponent from "../components/Portfolio/PortfolioComponent";
import NewsComponent from "../components/News/NewsComponent";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="w-full bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Programs</a>
              <a href="#" className="hover:underline">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-full">Login</button>
            <button className="px-4 py-2 bg-blue-800 rounded-full">Daftar Sekarang</button>
          </div>
        </div>
      </header>

      <section className="w-full bg-blue-600 text-white text-center p-12">
        <h1 className="text-4xl font-bold">Pondok Pesantren Technopreneur</h1>
        <p className="mt-4 text-lg">Mencetak generasi unggul yang mahir di bidang teknologi dan tetap teguh dalam pendidikan agama.</p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full mr-4">Join Us</button>
          <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-full">Learn More</button>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center px-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Programming Berkualitas</h3>
          <p className="mt-2 text-gray-700">Diajarkan oleh pengajar yang kompeten di bidangnya.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Pendampingan Bisnis</h3>
          <p className="mt-2 text-gray-700">Dibimbing untuk menjadi technopreneur yang sukses.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Kajian Agama</h3>
          <p className="mt-2 text-gray-700">Memperdalam ilmu agama untuk kehidupan yang lebih baik.</p>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Quick Launch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">SIAM</h3>
              <p className="mt-2 text-gray-700">Sistem Informasi Akademik Mahasantri</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">SIRIN</h3>
              <p className="mt-2 text-gray-700">Sistem Informasi Reservasi Inovasi</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Cloud Storage</h3>
              <p className="mt-2 text-gray-700">Penyimpanan Awan Terintegrasi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Beberapa Proyek Pilihan Kami</h2>
          <PortfolioComponent />
        </div>
      </section>

      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Berita Terbaru dan Event</h2>
          <NewsComponent />
        </div>
      </section>

      <footer className="w-full bg-blue-600 text-white text-center py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2024 Pondok Pesantren Technopreneur. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
