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
                                <img class="gallery-image" :src="gallery.thumbnail">
                            </div>
                            <div v-if="gallery.thumbnail2 != null" class="swiper-slide">
                                <img class="gallery-image" :src="gallery.thumbnail2">
                            </div>
                            <div v-if="gallery.thumbnail3 != null" class="swiper-slide">
                                <img class="gallery-image" :src="gallery.thumbnail3">
                            </div>
                            <div v-if="gallery.thumbnail4 != null" class="swiper-slide">
                                <img class="gallery-image" :src="gallery.thumbnail4">
                            </div>
                            <div v-if="gallery.thumbnail5 != null" class="swiper-slide">
                                <img class="gallery-image" :src="gallery.thumbnail5">
                            </div>
                            <div v-if="gallery.thumbnail6 != null" class="swiper-slide">
                                <img class="gallery-image" :src="gallery.thumbnail6">
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


import Navigation from '@/components/Navigation'

export default {
    components: {
        Navigation,
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
                                descriptionText: "This is a Dock Management System for DHL. Using RESTful API to access data",
                                thumbnail: "https://drive.google.com/uc?id=13oQa0vPlq9JquVbsuhy7SYuW9ORStr-2",
                                thumbnail2: "https://drive.google.com/uc?id=1HdfhqB2nAVuqFB2BoRs0NCUbR00xhLxC",
                                thumbnail3: "https://drive.google.com/uc?id=1mSsvb7iNOweRQ7CEzK8C9908ldYO_qCg"
                            },
                            {
                                id: "2",
                                title: "PNM Portal",
                                previewText: "Portal Pegawai",
                                descriptionText: "This is a portal application for employee. Using RESTful API to access employee databases.",
                                thumbnail: "https://drive.google.com/uc?id=1Ljt2B4rEgjR_wPKrBMn6E-cNWG8RSW_n",
                                thumbnail2: "https://drive.google.com/uc?id=1C5hEDPBAci2y9dNBaFoXQiqBE1nuYP_9",
                                thumbnail3: "https://drive.google.com/uc?id=1UFbg6uh5LHyeq82mRiiqxc8UaPJeTz8f",
                                thumbnail4: "https://drive.google.com/uc?id=1ixSGAFLTIsTyLGIWX-r1Pmkxev79q4Dq",
                                thumbnail5: "https://drive.google.com/uc?id=1xkKLxSHhfBdo6JWo_jVGDHN4Gu9REa72"
                            },
                            {
                                id: "3",
                                title: "LOL Chat",
                                previewText: "League of Legend Chat",
                                descriptionText: "This is a chat portal using League of Legend API",
                                thumbnail: "https://drive.google.com/uc?id=0BxU8nQHWvGugM19MZUMzVGlTWkk",
                                thumbnail2: "https://drive.google.com/uc?id=0BxU8nQHWvGugRGlwNGNuMW45WDA",
                                thumbnail3: "https://drive.google.com/uc?id=0BxU8nQHWvGugbkZyNjlWUzV0VUU"
                            },
                            {
                                id: "4",
                                title: "Geo Energy Portal",
                                previewText: "Geo Energy Portal using Wordpress",
                                descriptionText: "Geo Energy Portal using Wordpress",
                                thumbnail: "https://drive.google.com/uc?id=18lC3hoenG1p2MrpIB7RwXhWAkoOtLo3E"
                            }
                        ].find(el => el.id === context.params.id)
                    })
                }, 1500)
            }
        )
    },
    data () {
        return {
            swiperOption: {
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                on: {
                    slideChange() {
                    console.log('onSlideChangeEnd', this);
                    },
                    tap() {
                    console.log('onTap', this);
                    }
                } 
            }
        }
    }
}


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
