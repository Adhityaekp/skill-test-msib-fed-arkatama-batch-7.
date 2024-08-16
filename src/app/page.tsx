import Image from "next/image";
// import BlogComponent from "../components/Blog/BlogComponent";
// import PortfolioComponent from "../components/Portfolio/PortfolioComponent";
// import NewsComponent from "../components/News/NewsComponent";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="w-full bg-white text-[#333333]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="text-sm text-[#A6A6A6] flex items-center space-x-6">
            <div className=" w-8 h-5 shadow-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12" className="w-8 h-5">
                <rect width="24" height="6" fill="#FF0000" />
                <rect y="6" width="24" height="6" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="group relative">
              <a href="#" className="hover:underline flex items-center">
                Indonesia
                <svg className="ml-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Jepang</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">English</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#">Arab</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#A6A6A6" className="mr-4">
                <path d="M520-520v-240h80v104l200-200 56 56-200 200h104v80H520Zm278 400q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              <span>(+62) 851 6993 3122</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#A6A6A6" className="mr-4">
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <span>hello@alkautsar.id</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="bg-[#A6A6A6] text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>{" "}
                </svg>
              </div>
              <div className="bg-[#A6A6A6] text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>{" "}
                </svg>
              </div>
              <div className="bg-[#A6A6A6] text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>{" "}
                </svg>
              </div>
              <div className="bg-[#A6A6A6] text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"></path>
                </svg>
              </div>
            </div>
            <div className="relative flex items-center">
              <input type="text" placeholder="Cari di sini..." className="px-4 py-2 border border-gray-300 rounded-full placeholder:text-[#A6A6A6] focus:outline-none focus:border-blue-500 pr-12" />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white bg-blue-600 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <header className="w-full bg-white text-[#333333] shadow-header relative mt-4">
        <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6 ml-auto">
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Produk
              </a>
              <a href="#" className="hover:underline">
                Pendaftaran
              </a>
              <a href="#" className="hover:underline">
                Donasi
              </a>
              <div className="group relative">
                <a href="#" className="hover:underline flex items-center">
                  Blog
                  <svg className="ml-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Artikel Terbaru</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Kategori</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">Arsip</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#" className="hover:underline">
                Kontak
              </a>
            </nav>
            <button className="px-4 py-2 bg-white text-[#002EC1] rounded-full">Masuk</button>
            <button className="px-4 py-2 bg-[#002EC1] text-white rounded-full">Daftar Sekarang</button>
          </div>
        </div>
      </header>

      <section className="w-full max-w-7xl bg-cover mx-auto items-center text-[#333333] item-center p-12">
        <div className="mx-auto px-4 py-8 text-start rounded-[10px]" style={{ backgroundImage: "url(/bg.png)" }}>
          <p className="mt-4 text-lg text-[#002EC1]">
            Mau Jadi Generasi Mahir Teknologi, Kuat <br></br>Iman?
          </p>
          <h1 className="text-6xl font-bold">Pondok Pesantren</h1>
          <h1 className="text-6xl font-bold text-[#002EC1]">{"{Technopreneur}"}</h1>
          <p className="mt-4 text-lg">
            Mencetak generasi unggul yang mahir di bidang teknologi digital <br></br> dan teguh dalam pemahaman Islam Ahlu Sunnah Wal Jama’ah
          </p>
          <div className="mt-8 p-1 border-2 border-[#002EC1] shadow-lg shadow-[#002EC1]/20 rounded-full inline-flex">
            <button className="px-6 py-2 text-sm bg-white text-[#333333] rounded-full mr-2">Jago IT Rajin Ngaji bersama Al Kautsar</button>
            <button className="px-6 py-2 bg-[#002EC1] text-white rounded-full flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="mr-2">
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              Download Profile Kami
            </button>
          </div>
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
          {/* <PortfolioComponent /> */}
        </div>
      </section>

      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Berita Terbaru dan Event</h2>
          {/* <NewsComponent /> */}
        </div>
      </section>

      <footer className="w-full bg-blue-600 text-white text-center py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2024 Pondok Pesantren Technopreneur. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
