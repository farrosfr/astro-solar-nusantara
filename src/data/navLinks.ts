export interface NavLink {
  href?: string;
  text: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { href: "/", text: "Beranda" },
  { 
    href: "/tentang", 
    text: "Tentang",
    children: [
      { 
        href: "/tentang/tentang-solar-nusantara", 
        text: "Tentang Solar Nusantara",
        children: [
          { href: "/tentang/tentang-solar-nusantara/kebijakan-k3l-dan-sosial", text: "Kebijakan K3L dan Sosial" },
          { href: "/tentang/tentang-solar-nusantara/kebijakan-larangan-penggunaan-obat-obatan-terlarang-dan-alkohol", text: "Kebijakan Larangan Penggunaan Obat-obatan Terlarang dan Alkohol" },
          { href: "/tentang/tentang-solar-nusantara/kebijakan-pencegahan-terjatuh", text: "Kebijakan Pencegahan Terjatuh" },
        ]
      },
      {
        href: "/tentang/sonushub",
        text: "Tentang SonusHUB"
      },
      { href: "/tentang/visi-dan-misi", text: "Visi dan Misi" },
      { href: "/tentang/nilai-sonusian", text: "Nilai Sonusian" },
      { href: "/tentang/tim-kita", text: "Tim Kita" },
      {
        href: "/tentang/berkolaborasi-dengan",
        text: "Berkolaborasi dengan",
        children: [
          { href: "/tentang/kolaborasi/mitra-suplier", text: "Mitra Suplier" },
          { href: "/tentang/kolaborasi/mitra-bisnis", text: "Mitra Bisnis" },
        ]
      },
      { href: "/tentang/karir", text: "Karir" },
    ]
  },
  { 
    href: "/layanan", 
    text: "Layanan",
    children: [
        {
            href: "/layanan/sistem-tenaga-surya-epc",
            text: "Sistem Tenaga Surya EPC",
            children: [
                { href: "/layanan/epc/segmen-ci", text: "Segmen C & I" },
                { href: "/layanan/epc/segmen-shs", text: "Segmen SHS" },
                { href: "/layanan/epc/sistem-pjuts", text: "Sistem PJUTS" },
            ]
        },
        {
            href: "/layanan/manajemen-energi",
            text: "Manajemen Energi",
            children: [
                { href: "/layanan/manajemen-energi/sistem-pemantauan-energi-ci", text: "Sistem Pemantauan Energi untuk C&I" },
                { href: "/layanan/manajemen-energi/sistem-otomasi-bangunan", text: "Sistem Otomasi Bangunan" },
                { href: "/layanan/manajemen-energi/sistem-manajemen-armada", text: "Sistem Manajemen Armada" },
                { href: "/layanan/manajemen-energi/sistem-rumah-pintar", text: "Sistem Rumah Pintar" },
                { href: "/layanan/manajemen-energi/carbon-capture-system", text: "Carbon Capture System" },
            ]
        }
    ]
  },
  { 
    href: "/produk", 
    text: "Produk",
    children: [
        {
            href: "/produk/sistem-panel-surya",
            text: "Sistem Panel Surya",
            children: [
                {
                    href: "/produk/sistem-panel-surya/panel-surya",
                    text: "Panel Surya",
                    children: [
                        { href: "/produk/panel-surya/panel-impor", text: "Panel Impor" },
                        { href: "/produk/panel-surya/panel-tkdn", text: "Panel TKDN" },
                    ]
                },
                {
                    href: "/produk/sistem-panel-surya/inverter",
                    text: "Inverter",
                    children: [
                        { href: "/produk/inverter/on-grid", text: "Inverter On Grid" },
                        { href: "/produk/inverter/off-grid", text: "Inverter Off Grid" },
                    ]
                },
                { href: "/produk/sistem-panel-surya/sistem-pemasangan", text: "Sistem Pemasangan" },
                { href: "/produk/sistem-panel-surya/sistem-pengkabelan", text: "Sistem Pengkabelan" },
                { href: "/produk/sistem-panel-surya/sistem-baterai", text: "Sistem Baterai" },
            ]
        },
        {
            href: "/produk/ekosistem-ev",
            text: "Ekosistem EV",
            children: [
                { href: "/produk/ekosistem-ev/spkl", text: "SPKL | Pengisian Daya Kendaraan Listrik" },
            ]
        },
        {
            href: "/produk/energi-biomassa",
            text: "Energi Biomassa",
            children: [
                { href: "/produk/energi-biomassa/pelet-kayu", text: "Pelet Kayu" },
                { href: "/produk/energi-biomassa/rdf-srf", text: "RDF SRF" },
                { href: "/produk/energi-biomassa/seri-50100-fg", text: "Seri 50100 FG" },
            ]
        }
    ]
  },
  { href: "/pintar", text: "Pintar" },
  { href: "/kontak", text: "Kontak" },
  { href: "/berita", text: "Berita" },
];
