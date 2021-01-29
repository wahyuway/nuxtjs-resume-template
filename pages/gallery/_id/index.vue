<template>
  <div>
    <Navigation />
    <section class="single-gallery">
      <h1>{{ gallery.title }}</h1>

      <div class="container-fluid">
        <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div v-if="gallery.thumbnail != null" class="swiper-slide">
              <img class="gallery-image" :src="gallery.thumbnail" />
            </div>
            <div v-if="gallery.thumbnail2 != null" class="swiper-slide">
              <img class="gallery-image" :src="gallery.thumbnail2" />
            </div>
            <div v-if="gallery.thumbnail3 != null" class="swiper-slide">
              <img class="gallery-image" :src="gallery.thumbnail3" />
            </div>
            <div v-if="gallery.thumbnail4 != null" class="swiper-slide">
              <img class="gallery-image" :src="gallery.thumbnail4" />
            </div>
            <div v-if="gallery.thumbnail5 != null" class="swiper-slide">
              <img class="gallery-image" :src="gallery.thumbnail5" />
            </div>
            <div v-if="gallery.thumbnail6 != null" class="swiper-slide">
              <img class="gallery-image" :src="gallery.thumbnail6" />
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
      <div class="mt-5">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <p class="card-text">{{ gallery.descriptionText }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          gallery: [
            {
              id: "1",
              title: "DHL Checker",
              previewText: "Dock Management System DHL",
              descriptionText:
                "This is a Dock Management System for DHL. Using RESTful API to access data. Stack: Native Java Android, PHP Laravel.",
              thumbnail:
                "https://drive.google.com/uc?id=1JpOR0j2Lap19U7DhOVQiFE55E3aQ-Lt0",
              thumbnail2:
                "https://drive.google.com/uc?id=1b2G6qNMCddYfJjf6lFyMA0nJvtSqlLAY",
              thumbnail3:
                "https://drive.google.com/uc?id=1uQ4PjCz6wVhwiQ26QgSqCXQkhYU3TBpc"
            },
            {
              id: "2",
              title: "PNM Portal",
              previewText: "Portal Pegawai",
              descriptionText:
                "This is a portal application for employee. Using RESTful API to access employee databases. Stack: Native Java Android",
              thumbnail:
                "https://drive.google.com/uc?id=1gRNcGDWMpxz0u1CoNed6_vtKrPVBNnMJ",
              thumbnail2:
                "https://drive.google.com/uc?id=1s9z5Qnq4e18VexYhZGf-zgPV0Dg6znSG",
              thumbnail3:
                "https://drive.google.com/uc?id=1QjmCwYbpi8R-aY-6Oz4mSyQyCba-OHcs",
              thumbnail4:
                "https://drive.google.com/uc?id=1zq0jWoFrh8TyVmyAM7yFB7JHHlfN-E8Q",
              thumbnail5:
                "https://drive.google.com/uc?id=1J_vcI4WBzPMbbiX5YqBuKzixGBikMih6"
            },
            {
              id: "3",
              title: "LOL Chat",
              previewText: "League of Legend Chat",
              descriptionText:
                "This is a chat portal using League of Legend API. Stack: Native Java Android",
              thumbnail:
                "https://drive.google.com/uc?id=1EdE9DpNSWjF0vVuBOzSmHW9NhZx6myev",
              thumbnail2:
                "https://drive.google.com/uc?id=180JD0cNqGz0fPpSuXRmry4k2TWPaAK8k",
              thumbnail3:
                "https://drive.google.com/uc?id=1tMgaDJyrXAp00FJOOoInjgBpV8hg3aiQ"
            },
            {
              id: "4",
              title: "Geo Energy Portal",
              previewText: "Geo Energy Portal using Wordpress",
              descriptionText: "Geo Energy Portal using Wordpress. Stack: VPS and WordPress",
              thumbnail:
                "https://drive.google.com/uc?id=161uXS9tAnJcJ-dOWz_n9-hnzvz2-QKhX"
            }
          ].find(el => el.id === context.params.id)
        });
      }, 1500);
    });
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        }
      }
    };
  }
};
</script>

<style scoped>
body {
  padding-top: 0;
}
p {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;
}
img {
  padding: 20px;
}
h1 {
  font-size: 3rem;
  line-height: 5.5rem;
}
.single-gallery {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}

.gallery-box {
  display: flex;
  flex-flow: row wrap;
}

.gallery-image {
  width: 100%;
  height: 100%;
}
</style>
