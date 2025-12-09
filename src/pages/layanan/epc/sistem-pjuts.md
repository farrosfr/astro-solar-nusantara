---
layout: ../../../layouts/Layout.astro
title: "Sistem PJUTS"
---

<div class="slider-with-nav">
  <!-- Inputs -->
  <input type="radio" name="slider-pjuts" id="pjuts-s1" checked>
  <input type="radio" name="slider-pjuts" id="pjuts-s2">
  <input type="radio" name="slider-pjuts" id="pjuts-s3">
  <input type="radio" name="slider-pjuts" id="pjuts-s4">

  <!-- Slides -->
  <div class="slide" id="pjuts-slide1">
    <img src="/images/layanan/pjuts-image.png" alt="PJUTS Image 1">
  </div>
  <div class="slide" id="pjuts-slide2">
    <img src="/images/layanan/pjuts-image-1.png" alt="PJUTS Image 2">
  </div>
  <div class="slide" id="pjuts-slide3">
    <img src="/images/layanan/pjuts-image-2.png" alt="PJUTS Image 3">
  </div>
  <div class="slide" id="pjuts-slide4">
    <img src="/images/layanan/pjuts-image-3.png" alt="PJUTS Image 4">
  </div>

  <!-- Navigation -->
  <div class="nav" id="pjuts-nav1">
    <label for="pjuts-s4" class="prev">&lsaquo;</label>
    <label for="pjuts-s2" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="pjuts-nav2">
    <label for="pjuts-s1" class="prev">&lsaquo;</label>
    <label for="pjuts-s3" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="pjuts-nav3">
    <label for="pjuts-s2" class="prev">&lsaquo;</label>
    <label for="pjuts-s4" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="pjuts-nav4">
    <label for="pjuts-s3" class="prev">&lsaquo;</label>
    <label for="pjuts-s1" class="next">&rsaquo;</label>
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
#pjuts-s1:checked ~ #pjuts-slide1, #pjuts-s1:checked ~ #pjuts-nav1 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#pjuts-s2:checked ~ #pjuts-slide2, #pjuts-s2:checked ~ #pjuts-nav2 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#pjuts-s3:checked ~ #pjuts-slide3, #pjuts-s3:checked ~ #pjuts-nav3 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#pjuts-s4:checked ~ #pjuts-slide4, #pjuts-s4:checked ~ #pjuts-nav4 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
</style>

**Selamat datang di SONUS — perusahaan energi terbarukan yang berfokus pada solusi berkelanjutan dan andal.**
Misi kami adalah menghadirkan energi bersih untuk bisnis dan komunitas melalui layanan EPC Solar PV, Smart Home Systems, dan Solar Public Street Lighting.

**EPC Solar PV Systems**
Kami menyediakan solusi lengkap: survei lokasi, desain sistem, pengadaan peralatan, instalasi, hingga commissioning. Setiap proyek dirancang sesuai kebutuhan klien untuk memberikan hasil optimal dan ROI maksimal. Tim berpengalaman kami memastikan pekerjaan selesai tepat waktu dan sesuai anggaran.

**Smart Home Systems**
Kami menawarkan sistem rumah pintar yang hemat energi dengan teknologi terbaru. Menggunakan sensor dan perangkat cerdas, sistem ini memantau serta mengontrol konsumsi listrik sehingga Anda bisa mengurangi jejak karbon sekaligus menghemat biaya.

**Solar Public Street Lighting**
Kami juga menyediakan lampu jalan tenaga surya yang efisien, ramah lingkungan, dan tahan lama. Setiap sistem dirancang sesuai kebutuhan area publik dengan standar kualitas tinggi.

Di SONUS, kami berkomitmen memberikan solusi yang **berkualitas**, **berkelanjutan**, dan **inovatif**. Dengan dukungan mitra dan teknologi terbaru, kami siap membantu Anda mencapai target energi terbarukan.

**Hubungi kami untuk konsultasi dan solusi terbaik bagi kebutuhan energi bersih Anda.**
