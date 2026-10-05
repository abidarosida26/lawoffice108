import { useState, useEffect } from 'react';
import { 
  Scale, 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Award,
  Users,
  BookOpen,
  Shield,
  FileText,
  Building2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Send,
  Star,
  Heart
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const services = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Litigasi',
      description: 'Penanganan perkara hukum di pengadilan, termasuk perdata, pidana, dan tata usaha negara.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Non-Litigasi',
      description: 'Layanan hukum di luar pengadilan seperti mediasi, negosiasi, dan penyusunan dokumen hukum.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Sengketa PTUN',
      description: 'Penanganan sengketa peradilan tata usaha negara dengan pendekatan profesional dan berpengalaman.'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Pendidikan Profesi',
      description: 'Tempat pendidikan profesi hukum dan magang bagi mahasiswa hukum dari berbagai universitas.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Konsultasi Hukum',
      description: 'Layanan konsultasi hukum untuk individu maupun perusahaan dengan pendekatan yang solutif.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Legal Drafting',
      description: 'Penyusunan kontrak, perjanjian, dan dokumen hukum lainnya secara profesional.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Tahun Pengalaman' },
    { number: '500+', label: 'Kasus Ditangani' },
    { number: '95%', label: 'Tingkat Kepuasan' },
    { number: '50+', label: 'Mahasiswa Magang' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a2332]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-[#1a2332]" />
              </div>
              <div>
                <h1 className="text-white font-bold text-lg leading-tight">Law Office 108</h1>
                <p className="text-amber-400 text-xs">Keadilan & Kepercayaan</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-white/90 hover:text-amber-400 transition-colors text-sm font-medium">Beranda</a>
              <a href="#tentang" className="text-white/90 hover:text-amber-400 transition-colors text-sm font-medium">Tentang</a>
              <a href="#layanan" className="text-white/90 hover:text-amber-400 transition-colors text-sm font-medium">Layanan</a>
              <a href="#tim" className="text-white/90 hover:text-amber-400 transition-colors text-sm font-medium">Tim</a>
              <a href="#kontak" className="bg-amber-500 hover:bg-amber-600 text-[#1a2332] px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-amber-500/25">
                Konsultasi
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a2332]/98 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#beranda" className="block text-white/90 hover:text-amber-400 py-2 text-sm" onClick={() => setIsMenuOpen(false)}>Beranda</a>
              <a href="#tentang" className="block text-white/90 hover:text-amber-400 py-2 text-sm" onClick={() => setIsMenuOpen(false)}>Tentang</a>
              <a href="#layanan" className="block text-white/90 hover:text-amber-400 py-2 text-sm" onClick={() => setIsMenuOpen(false)}>Layanan</a>
              <a href="#tim" className="block text-white/90 hover:text-amber-400 py-2 text-sm" onClick={() => setIsMenuOpen(false)}>Tim</a>
              <a href="#kontak" className="block bg-amber-500 text-[#1a2332] px-4 py-2.5 rounded-lg text-sm font-semibold text-center" onClick={() => setIsMenuOpen(false)}>Konsultasi</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1923] via-[#1a2332] to-[#0d1520]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-white/80 text-sm">Kantor Hukum Terpercaya di Mataram, NTB</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Law Office <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">108</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Memberikan layanan hukum profesional dengan integritas dan dedikasi tinggi. 
            Kami hadir untuk melindungi hak-hak Anda dan memastikan keadilan ditegakkan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#kontak" className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-600 text-[#1a2332] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 flex items-center justify-center">
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#layanan" className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/50 flex items-center justify-center">
              Lihat Layanan
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white/40 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Tentang Kami</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">
                Kantor Hukum yang <span className="text-amber-600">Berintegritas</span> & Profesional
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong>Law Office 108</strong> adalah kantor hukum yang berlokasi di Kota Mataram, Nusa Tenggara Barat. 
                Kami didirikan dengan visi untuk memberikan pelayanan hukum yang berkualitas, transparan, dan dapat diandalkan 
                oleh masyarakat luas.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Dipimpin oleh <strong>Dr. Firzhal Arzhi Jiwantara, S.H., M.H.</strong>, kami menangani berbagai perkara hukum 
                baik litigasi maupun non-litigasi. Selain sebagai kantor hukum, Law Office 108 juga berperan sebagai tempat 
                pendidikan profesi dan magang bagi mahasiswa hukum.
              </p>

              <div className="space-y-4">
                {[
                  'Penanganan perkara litigasi dan non-litigasi',
                  'Sengketa peradilan tata usaha negara (PTUN)',
                  'Pendidikan profesi dan magang mahasiswa hukum',
                  'Konsultasi hukum profesional dan terjangkau'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1a2332] to-[#2d3748] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Scale className="w-8 h-8 text-[#1a2332]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Menjadi kantor hukum terdepan di NTB yang memberikan keadilan bagi setiap klien 
                    dengan mengedepankan profesionalisme, integritas, dan kepedulian sosial.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      Memberikan layanan hukum berkualitas tinggi
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      Melindungi hak-hak masyarakat yang membutuhkan
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      Mencetak advokat-advokat muda yang berintegritas
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      Berkontribusi pada perkembangan hukum di Indonesia
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Layanan Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4">
              Layanan Hukum <span className="text-amber-600">Profesional</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan hukum untuk memenuhi kebutuhan Anda dengan pendekatan yang profesional dan solutif.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="tim" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Tim Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4">
              Advokat <span className="text-amber-600">Berpengalaman</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dipimpin oleh advokat berpengalaman dengan dedikasi tinggi terhadap keadilan dan kebenaran.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a2332] to-[#2d3748] rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-gradient-to-br from-amber-400 to-amber-600 p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border-4 border-white/30">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-[#1a2332] font-bold text-xl">Pimpinan</h3>
                </div>
                <div className="md:col-span-3 p-8 lg:p-12 text-white">
                  <div className="inline-flex items-center bg-white/10 rounded-full px-3 py-1 mb-4">
                    <Award className="w-3 h-3 text-amber-400 mr-2" />
                    <span className="text-xs text-amber-400 font-medium">Advokat Utama</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">Dr. Firzhal Arzhi Jiwantara</h3>
                  <p className="text-amber-400 font-medium mb-6">S.H., M.H.</p>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    Seorang advokat berpengalaman yang memimpin Law Office 108 dengan visi untuk memberikan 
                    pelayanan hukum terbaik bagi masyarakat. Dengan latar belakang pendidikan doktoral di bidang hukum, 
                    beliau memiliki keahlian mendalam dalam menangani berbagai perkara hukum kompleks.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-amber-400 font-bold text-lg">Doktor Hukum</div>
                      <div className="text-white/50 text-sm">Pendidikan</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-amber-400 font-bold text-lg">15+ Tahun</div>
                      <div className="text-white/50 text-sm">Pengalaman</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0f1923] via-[#1a2332] to-[#0d1520] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Mengapa Memilih <span className="text-amber-400">Law Office 108</span>?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan hukum terbaik dengan standar profesional tertinggi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-7 h-7" />, title: 'Terpercaya', desc: 'Reputasi yang dibangun dari integritas dan hasil kerja nyata' },
              { icon: <Award className="w-7 h-7" />, title: 'Profesional', desc: 'Tim advokat berpengalaman dengan kualifikasi tinggi' },
              { icon: <Heart className="w-7 h-7" />, title: 'Peduli', desc: 'Kepentingan klien selalu menjadi prioritas utama kami' },
              { icon: <Clock className="w-7 h-7" />, title: 'Responsif', desc: 'Respon cepat dan komunikasi yang transparan' }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center text-amber-400 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-6">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Hubungi Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4">
              Jadwalkan <span className="text-amber-600">Konsultasi</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hubungi kami untuk konsultasi hukum. Tim kami siap membantu Anda dengan solusi terbaik.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2332] mb-1">Alamat Kantor</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Law Office 108<br />
                      Jl. Kesra Raya No.108<br />
                      Tj. Karang Permai, Kec. Sekarbela<br />
                      Kota Mataram, NTB 83115
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2332] mb-1">Telepon</h4>
                    <p className="text-gray-600 text-sm">+62 370 642506</p>
                    <p className="text-gray-400 text-xs mt-1">Senin - Jumat, 08:00 - 17:00 WITA</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2332] mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">info@lawoffice108.com</p>
                    <p className="text-gray-400 text-xs mt-1">Respon dalam 1x24 jam</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2332] mb-1">Jam Operasional</h4>
                    <p className="text-gray-600 text-sm">Senin - Jumat: 08:00 - 17:00 WITA</p>
                    <p className="text-gray-600 text-sm">Sabtu: 09:00 - 14:00 WITA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a2332] mb-2">Formulir Konsultasi</h3>
                <p className="text-gray-500 text-sm mb-6">Isi formulir di bawah ini dan tim kami akan menghubungi Anda.</p>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h4 className="text-green-800 font-bold text-lg mb-1">Pesan Terkirim!</h4>
                    <p className="text-green-600 text-sm">Terima kasih, tim kami akan segera menghubungi Anda.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                          placeholder="email@contoh.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Nomor Telepon *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
                          placeholder="+62 xxx xxxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Jenis Layanan</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Pilih layanan</option>
                          <option value="litigasi">Litigasi</option>
                          <option value="non-litigasi">Non-Litigasi</option>
                          <option value="ptun">Sengketa PTUN</option>
                          <option value="konsultasi">Konsultasi Hukum</option>
                          <option value="legal-drafting">Legal Drafting</option>
                          <option value="magang">Program Magang</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Pesan / Deskripsi Kasus *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm resize-none"
                        placeholder="Jelaskan secara singkat permasalahan hukum Anda..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-[#1a2332] py-4 rounded-xl font-bold text-base transition-all hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </button>

                    <p className="text-gray-400 text-xs text-center">
                      Dengan mengirim formulir ini, Anda menyetujui bahwa data Anda akan digunakan untuk keperluan konsultasi hukum.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.123456789!2d116.1!3d-8.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.+Kesra+Raya+No.108%2C+Mataram!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Law Office 108"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1923] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-[#1a2332]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Law Office 108</h3>
                  <p className="text-amber-400 text-xs">Keadilan & Kepercayaan</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Kantor hukum profesional yang memberikan layanan hukum berkualitas tinggi di Kota Mataram, NTB.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Layanan</h4>
              <ul className="space-y-2">
                {['Litigasi', 'Non-Litigasi', 'Sengketa PTUN', 'Konsultasi Hukum', 'Legal Drafting'].map((item, index) => (
                  <li key={index}>
                    <a href="#layanan" className="text-white/50 hover:text-amber-400 text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Navigasi</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Beranda', href: '#beranda' },
                  { label: 'Tentang Kami', href: '#tentang' },
                  { label: 'Layanan', href: '#layanan' },
                  { label: 'Tim', href: '#tim' },
                  { label: 'Kontak', href: '#kontak' }
                ].map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-white/50 hover:text-amber-400 text-sm transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Kontak</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <MapPin className="w-4 h-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/50">Jl. Kesra Raya No.108, Mataram, NTB 83115</span>
                </li>
                <li className="flex items-center text-sm">
                  <Phone className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                  <span className="text-white/50">+62 370 642506</span>
                </li>
                <li className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                  <span className="text-white/50">info@lawoffice108.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm">
                © 2024 Law Office 108. Seluruh hak cipta dilindungi.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-amber-500/20 rounded-lg flex items-center justify-center text-white/50 hover:text-amber-400 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-amber-500/20 rounded-lg flex items-center justify-center text-white/50 hover:text-amber-400 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-amber-500/20 rounded-lg flex items-center justify-center text-white/50 hover:text-amber-400 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.561l-.999 3.648 3.742-.908zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
