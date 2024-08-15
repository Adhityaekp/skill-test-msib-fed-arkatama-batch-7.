import Image from "next/image";
import BlogComponent from "../components/Blog/BlogComponent";
import PortfolioComponent from "../components/Portfolio/PortfolioComponent";
import NewsComponent from "../components/News/NewsComponent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white">
      <section className="w-full bg-blue-600 text-white text-center p-12">
        <h1 className="text-4xl font-bold">Pondok Pesantren Technopreneur</h1>
        <p className="mt-4 text-lg">Mencetak generasi unggul yang mahir di bidang teknologi dan tetap teguh dalam pendidikan agama.</p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full">Daftar Sekarang</button>
      </section>

      <section className="w-full max-w-5xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Teknologi dan Agama</h3>
          <p className="mt-2 text-gray-700">Mengintegrasikan ilmu teknologi dengan nilai-nilai agama.</p>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Portofolio Kami</h2>
          <PortfolioComponent />
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Berita dan Event</h2>
          <BlogComponent />
        </div>
      </section>

      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Berita Terbaru</h2>
          <NewsComponent />
        </div>
      </section>

      <footer className="w-full bg-blue-600 text-white text-center py-8">
        <p>&copy; 2024 Pondok Pesantren Technopreneur. All rights reserved.</p>
      </footer>
    </main>
  );
}
