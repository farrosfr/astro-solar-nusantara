---
layout: ../../../layouts/Layout.astro
title: "Segmen C & I"
---

<div class="slider-with-nav">
  <!-- Inputs -->
  <input type="radio" name="slider" id="s1" checked>
  <input type="radio" name="slider" id="s2">
  <input type="radio" name="slider" id="s3">
  <input type="radio" name="slider" id="s4">

  <!-- Slides -->
  <div class="slide" id="slide1">
    <img src="/images/layanan/image.png" alt="Solar Panel Image 1">
  </div>
  <div class="slide" id="slide2">
    <img src="/images/layanan/image-1.png" alt="Solar Panel Image 2">
  </div>
  <div class="slide" id="slide3">
    <img src="/images/layanan/image-2.png" alt="Solar Panel Image 3">
  </div>
  <div class="slide" id="slide4">
    <img src="/images/layanan/image-3.png" alt="Solar Panel Image 4">
  </div>

  <!-- Navigation -->
  <div class="nav" id="nav1">
    <label for="s4" class="prev">&lsaquo;</label>
    <label for="s2" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="nav2">
    <label for="s1" class="prev">&lsaquo;</label>
    <label for="s3" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="nav3">
    <label for="s2" class="prev">&lsaquo;</label>
    <label for="s4" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="nav4">
    <label for="s3" class="prev">&lsaquo;</label>
    <label for="s1" class="next">&rsaquo;</label>
  </div>
</div>

<style>
.slider-with-nav {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.slider-with-nav input { display: none; }

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity .5s ease-in-out;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: none;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 2;
}
.nav label {
  cursor: pointer;
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.6);
  background-color: rgba(0,0,0,0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 35px;
  text-align: center;
  user-select: none;
  transition: background-color .2s;
}
.nav label:hover {
  background-color: rgba(0,0,0,0.5);
}

/* Show the active slide and its nav */
#s1:checked ~ #slide1, #s1:checked ~ #nav1 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#s2:checked ~ #slide2, #s2:checked ~ #nav2 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#s3:checked ~ #slide3, #s3:checked ~ #nav3 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#s4:checked ~ #slide4, #s4:checked ~ #nav4 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
</style>

**Selamat datang di SONUS — penyedia solusi EPC Solar PV untuk segmen korporasi dan industri.**

SONUS menghadirkan layanan lengkap mulai dari desain, engineering, konstruksi, hingga maintenance sistem Solar PV. Tim kami bekerja langsung dengan klien untuk memahami kebutuhan khusus dan menghadirkan solusi yang efisien, hemat energi, dan sesuai tujuan bisnis.

Kami berpengalaman menyediakan **turnkey solution**: pengadaan, pembangunan, hingga commissioning. Dengan manajemen proyek yang kuat, kami memastikan setiap instalasi selesai tepat waktu, aman, dan memenuhi standar kualitas tertinggi.

Kami telah menyelesaikan berbagai proyek Solar PV di sektor manufaktur, kesehatan, hospitality, dan industri lainnya—dengan solusi yang disesuaikan untuk menghasilkan penghematan energi maksimal dan dampak lingkungan minimal.

Di SONUS, keberlanjutan adalah prioritas. Sistem Solar PV kami membantu menekan emisi karbon, mengurangi biaya energi, dan meningkatkan nilai aset.

**Percayakan kebutuhan Solar PV Anda pada SONUS dan rasakan komitmen kami terhadap kualitas, inovasi, dan kepuasan pelanggan.**
