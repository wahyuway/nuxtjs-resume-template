<template>
  <section>
    <Navigation />

    <div class="galleries">
      <Gallery
        v-for="gallery in galleries"
        :key="gallery.id"
        :thumbnail="gallery.thumbnail"
        :title="gallery.title"
        :id="gallery.id"
        :previewText="gallery.previewText"
      />
    </div>
  </section>
</template>

<script>
import Gallery from "@/components/Gallery";
import Navigation from "@/components/Navigation";

export default {
  components: {
    Gallery,
    Navigation
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          galleries: [
            {
              id: "1",
              title: "DHL Checker",
              previewText: "Dock Management System DHL",
              thumbnail:
                "https://drive.google.com/uc?id=1JpOR0j2Lap19U7DhOVQiFE55E3aQ-Lt0"
            },
            {
              id: "2",
              title: "PNM Portal",
              previewText: "Portal Pegawai",
              thumbnail:
                "https://drive.google.com/uc?id=1gRNcGDWMpxz0u1CoNed6_vtKrPVBNnMJ"
            },
            {
              id: "3",
              title: "LOL Chat",
              previewText: "League of Legend Chat",
              thumbnail:
                "https://drive.google.com/uc?id=1EdE9DpNSWjF0vVuBOzSmHW9NhZx6myev"
            },
            {
              id: "4",
              title: "Geo Energy Website",
              previewText: "Geo Energy Website",
              thumbnail:
                "https://drive.google.com/uc?id=161uXS9tAnJcJ-dOWz_n9-hnzvz2-QKhX"
            }
          ]
        });
      }, 1500);
    });
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
.galleries {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
