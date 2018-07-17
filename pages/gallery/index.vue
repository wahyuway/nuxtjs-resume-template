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
                :previewText="gallery.previewText" />
            
        </div>
    </section>
</template>

<script>
import Gallery from "@/components/Gallery"
import Navigation from "@/components/Navigation"

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
                                thumbnail: "https://drive.google.com/uc?id=13oQa0vPlq9JquVbsuhy7SYuW9ORStr-2"
                            },
                            {
                                id: "2",
                                title: "PNM Portal",
                                previewText: "Portal Pegawai",
                                thumbnail: "https://drive.google.com/uc?id=1Ljt2B4rEgjR_wPKrBMn6E-cNWG8RSW_n"
                            },
                            {
                                id: "3",
                                title: "LOL Chat",
                                previewText: "League of Legend Chat",
                                thumbnail: "https://drive.google.com/uc?id=0BxU8nQHWvGugM19MZUMzVGlTWkk"
                            },
                            {
                                id: "4",
                                title: "Geo Energy Website",
                                previewText: "Geo Energy Website",
                                thumbnail: "https://drive.google.com/uc?id=18lC3hoenG1p2MrpIB7RwXhWAkoOtLo3E"
                            }
                        ]
                    })
                }, 1500)
            }
        )
    }
}
</script>

<style scoped>
.center {
     text-align: center;
}
.galleries{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    
}

</style>

