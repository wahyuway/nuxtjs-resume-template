module.exports = {
  /*
   ** Build for static site i.e.: netlify
   */
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Wahyu Widago Resume",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Hi I&apos;m Wahyu. I am a Presales Engineer, Fullstack Web and Mobile (Android and iOS) Developer."
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.js",
        type: "text/javascript",
        body: true
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript",
        integrity:
          "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
        crossorigin: "anonymous",
        body: true
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
        type: "text/javascript",
        integrity:
          "sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T",
        crossorigin: "anonymous",
        body: true
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js",
        type: "text/javascript",
        body: true
      },
      { src: "/js/resume.min.js", type: "text/javascript", body: true }
    ],
    __dangerouslyDisableSanitizers: ["script"],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        integrity:
          "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity:
          "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossorigin: "anonymous"
      }
    ]
  },

  css: ["@/assets/css/resume.min.css", "swiper/dist/css/swiper.css"],
  modules: [
    [
      "nuxt-sass-resources-loader",
      [
        "@/assets/scss/navigation.scss",
        "@/assets/scss/_bootstrap-overrides.scss",
        "@/assets/scss/_global.scss",
        "@/assets/scss/_mixins.scss",
        "@/assets/scss/_nav.scss",
        "@/assets/scss/_resume-item.scss",
        "@/assets/scss/_variables.scss",
        "@/assets/scss/resume.scss"
      ]
    ]
  ],
  // custom plugins
  plugins: [{ src: "~plugins/swiper.js", ssr: false }],

  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        const options = {
          exclude: ['node_modules']
        }
        const EslintPlugin = require('eslint-webpack-plugin')
        config.plugins.push(new EslintPlugin(options))

        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === "vue-loader"
        );
        const {
          options: { loaders }
        } = vueLoader || { options: {} };
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader]);
          }
        }
        config.module.rules.forEach(rule => changeLoaderOptions(rule.use));
        // console.log(util.inspect(config.module.rules, { depth: 6 }))
      }
    }
  }
};

function changeLoaderOptions(loaders) {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === "sass-loader") {
        Object.assign(loader.options, {
          includePaths: ["./assets"]
          // data: '@import "_imports";'
        });
      }
    }
  }
}
