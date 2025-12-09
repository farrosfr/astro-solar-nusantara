---
layout: ../../../layouts/Layout.astro
title: "Segmen SHS"
---

<div class="slider-with-nav">
  <!-- Inputs -->
  <input type="radio" name="slider-shs" id="shs-s1" checked>
  <input type="radio" name="slider-shs" id="shs-s2">
  <input type="radio" name="slider-shs" id="shs-s3">
  <input type="radio" name="slider-shs" id="shs-s4">
  <input type="radio" name="slider-shs" id="shs-s5">
  <input type="radio" name="slider-shs" id="shs-s6">

  <!-- Slides -->
  <div class="slide" id="shs-slide1">
    <img src="/images/layanan/shs-image.png" alt="SHS Image 1">
  </div>
  <div class="slide" id="shs-slide2">
    <img src="/images/layanan/shs-image-1.png" alt="SHS Image 2">
  </div>
  <div class="slide" id="shs-slide3">
    <img src="/images/layanan/shs-image-2.png" alt="SHS Image 3">
  </div>
  <div class="slide" id="shs-slide4">
    <img src="/images/layanan/shs-image-3.png" alt="SHS Image 4">
  </div>
  <div class="slide" id="shs-slide5">
    <img src="/images/layanan/shs-image-4.png" alt="SHS Image 5">
  </div>
  <div class="slide" id="shs-slide6">
    <img src="/images/layanan/shs-image-5.png" alt="SHS Image 6">
  </div>

  <!-- Navigation -->
  <div class="nav" id="shs-nav1">
    <label for="shs-s6" class="prev">&lsaquo;</label>
    <label for="shs-s2" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="shs-nav2">
    <label for="shs-s1" class="prev">&lsaquo;</label>
    <label for="shs-s3" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="shs-nav3">
    <label for="shs-s2" class="prev">&lsaquo;</label>
    <label for="shs-s4" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="shs-nav4">
    <label for="shs-s3" class="prev">&lsaquo;</label>
    <label for="shs-s5" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="shs-nav5">
    <label for="shs-s4" class="prev">&lsaquo;</label>
    <label for="shs-s6" class="next">&rsaquo;</label>
  </div>
  <div class="nav" id="shs-nav6">
    <label for="shs-s5" class="prev">&lsaquo;</label>
    <label for="shs-s1" class="next">&rsaquo;</label>
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
#shs-s1:checked ~ #shs-slide1, #shs-s1:checked ~ #shs-nav1 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#shs-s2:checked ~ #shs-slide2, #shs-s2:checked ~ #shs-nav2 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#shs-s3:checked ~ #shs-slide3, #shs-s3:checked ~ #shs-nav3 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#shs-s4:checked ~ #shs-slide4, #shs-s4:checked ~ #shs-nav4 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#shs-s5:checked ~ #shs-slide5, #shs-s5:checked ~ #shs-nav5 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
#shs-s6:checked ~ #shs-slide6, #shs-s6:checked ~ #shs-nav6 { opacity: 1; display: flex; pointer-events: auto; z-index: 1; }
</style>

**Ingin mengurangi konsumsi listrik rumah dan menekan biaya bulanan? Saatnya beralih ke Smart Home System berbasis energi surya.**

Dengan meningkatnya kebutuhan listrik rumah tangga, solar panel menjadi solusi yang lebih **hemat**, **bersih**, dan **berkelanjutan**. Instalasi PLTS atap dapat mengurangi ketergantungan pada listrik konvensional dan menurunkan tagihan secara signifikan.

Smart Home System kami membawa energi surya ke level berikutnya dengan fitur manajemen energi cerdas: memantau penggunaan listrik, mengoptimalkan konsumsi, dan membantu Anda menghemat lebih banyak.

Didukung instalasi profesional dan layanan purna jual yang siap membantu, Anda bisa menikmati manfaat energi surya secara maksimal—lebih efisien, ramah lingkungan, dan menguntungkan.

**Mulai beralih ke energi surya hari ini. Hubungi kami untuk informasi lebih lanjut.**
