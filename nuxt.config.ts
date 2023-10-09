// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: false },
  runtimeConfig: {
    apiKey: process.env.NUXT_APP_ENV,
    public: {
      baseURL: process.env.NUXT_APP_API_ROOT,
    },
  },
  app: {
    head: {
      titleTemplate: '%s - Nuxt3 | QYC',
      title: 'nuxt3',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh-CN',
      },
      meta: [
        { name: 'keywords', content: 'vue3,nuxt3,ssr,QYC' },
        { name: 'description', content: '基于vue3的nuxt框架demo' },
      ],
      link: [
        {
          rel: 'icon',
          href: 'https://upload.jianshu.io/users/upload_avatars/5764383/6d4e318b-7271-4bdd-9609-1e05b4d82c93.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        },
      ],
    },
  },
  build: {
    // publicPath: '', // 将.nuxt/dist/client目录的内容上传到CDN
    postcss: {
      plugins: {
        // Disable `postcss-url`
        'postcss-url': false,
        // Add some plugins
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
    vite: {
      optimizeDeps: {
        include: [
          'vue',
          'vue-router',
          'less',
          'vant/es',
          'vant/es/list/style/index',
          'vant/es/swipe/style/index',
          'vant/es/tabs/style/index',
          'vant/es/tag/style/index',
          'vant/es/dialog/style/index',
        ],
      },
    },
    terser: {
      parallel: true,
      sourceMap: false,
      terserOptions: {
        // 生产环境移除console
        compress: {
          drop_console: process.env.NUXT_APP_ENV == 'production' ? true : false,
          drop_debugger: process.env.NUXT_APP_ENV == 'production' ? true : false,
        },
      },
    },
  },
  postcss: {
    plugins: {
      // 这个工具可以实现自动添加CSS3前缀
      autoprefixer: {
        overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8'],
      },
      'postcss-pxtorem': {
        rootValue: 37.5, // 指定转换倍率，我现在设置这个表示1rem=37.5px;
        propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
        mediaQuery: false, // 是否允许使用媒体查询，false媒体查询的代码可用，true不可用
        exclude: 'ignore',
        replace: true, // 替换包含rem的规则，而不是添加回退
        minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
        unitPrecision: 6, // 转换成rem单位的小数点后的保留位数
        selectorBalckList: ['van'], // 匹配不被转换为rem的选择器
      },
    },
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@vant/nuxt'],
  vant: {
    /** Options */
  },
  buildModules: ['@nuxt/typescript-build'],
  autoImports: {
    dirs: ['apis'],
  },
});
