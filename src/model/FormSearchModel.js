const FormSearchModel = {
  searchFields: {
    question: {
      value: "",
      label: "Question",
      name: "question",
      type: "text",
      placeholder: " search here",
      validate: {
        max: {
          val: 20,
          msg: "try keep it simple",
        },
        min: {
          val: 1,
          msg: "keep typing",
        },
      },
    },
    Info: {
      label: "Info",
      name: "Info",
      type: "select",
      value: "everything",
      validate: {},
      options: {
        everything: {
          label: "Everything",
          value: "everything",
        },
        topHeadLines: {
          label: "Top Headlines",
          value: "top-headlines",
        },
      },
    },
    from: {
      label: "from",
      name: "from",
      type: "date",
      value: "",
      validate: {},
    },

    sortBy: {
      value: "relevancy",
      type: "select",
      label: "Sort By",
      name: "sortBy",
      options: {
        relevancy: {
          label: "relevancy",
          value: "relevancy",
        },
        popularity: {
          label: "popularity",
          value: "popularity",
        },
        publishedAt: {
          label: "published at",
          value: "publishedAt",
        },
      },
      validate: {
        empty: { val: "" || false, msg: "you have to choose one." },
      },
    },

    category: {
      value: "general",
      type: "select",
      label: "Category",
      name: "category",

      options: {
        all: { label: "all categories", value: "" },
        general: {
          label: "general",
          value: "general",
        },
        business: {
          label: " business",
          value: "business",
        },
        entertainment: {
          label: "entertainment",
          value: "entertainment",
        },
        health: {
          label: "health",
          value: "health",
        },
        science: {
          label: "science",
          value: "science",
        },
        sports: {
          label: "sports",
          value: "sports",
        },
        technology: {
          label: "technology",
          value: "technology",
        },
      },
      validate: {
        //   empty: { val: "" || false, msg: "you have to choose one." },
      },
    },
    language: {
      value: "en",
      type: "select",
      label: "language",
      name: "language",

      options: {
        all: { label: "all", value: "" },
        ar: { label: "ar", value: "ar" },
        de: { label: "de", value: "de" },
        en: { label: "en", value: "en" },
        es: { label: "es", value: "es" },
        fr: { label: "fr", value: "fr" },
        he: { label: "he", value: "he" },
        it: { label: "it", value: "it" },
        nl: { label: "nl", value: "nl" },
        no: { label: "no", value: "no" },
        pt: { label: "pt", value: "pt" },
        ru: { label: "ru", value: "ru" },
        sv: { label: "sv", value: "sv" },
        ud: { label: "ud", value: "ud" },
        zh: { label: "zh", value: "zh" },
      },
    },
    country: {
      value: "us",
      type: "select",
      label: "country",
      name: "country",

      options: {
        all: { label: "all countries", value: "" },
        ae: { label: "ae", value: "ae" },
        ar: { label: "ar", value: "ar" },
        at: { label: "at", value: "at" },
        au: { label: "au", value: "au" },
        be: { label: "be", value: "be" },
        bg: { label: "bg", value: "bg" },
        br: { label: "br", value: "br" },
        ca: { label: "ca", value: "ca" },
        ch: { label: "ch", value: "ch" },
        cn: { label: "cn", value: "cn" },
        co: { label: "co", value: "co" },
        cu: { label: "cu", value: "cu" },
        cz: { label: "cz", value: "cz" },
        de: { label: "de", value: "de" },
        eg: { label: "eg", value: "eg" },
        fr: { label: "fr", value: "fr" },
        gb: { label: "gb", value: "gb" },
        gr: { label: "gr", value: "gr" },
        hk: { label: "hk", value: "hk" },
        hu: { label: "hu", value: "hu" },
        id: { label: "id", value: "id" },
        ie: { label: "ie", value: "ie" },
        il: { label: "il", value: "il" },
        in: { label: "in", value: "in" },
        it: { label: "it", value: "it" },
        jp: { label: "jp", value: "jp" },
        kr: { label: "kr", value: "kr" },
        lt: { label: "lt", value: "lt" },
        lv: { label: "lv", value: "lv" },
        ma: { label: "ma", value: "ma" },
        mx: { label: "mx", value: "mx" },
        my: { label: "my", value: "my" },
        ng: { label: "ng", value: "ng" },
        nl: { label: "nl", value: "nl" },
        no: { label: "no", value: "no" },
        nz: { label: "nz", value: "nz" },
        ph: { label: "ph", value: "ph" },
        pl: { label: "pl", value: "pl" },
        pt: { label: "pt", value: "pt" },
        ro: { label: "ro", value: "ro" },
        rs: { label: "rs", value: "rs" },
        ru: { label: "ru", value: "ru" },
        sa: { label: "sa", value: "sa" },
        se: { label: "se", value: "se" },
        sg: { label: "sg", value: "sg" },
        si: { label: "si", value: "si" },
        sk: { label: "sk", value: "sk" },
        th: { label: "th", value: "th" },
        tr: { label: "tr", value: "tr" },
        tw: { label: "tw", value: "tw" },
        ua: { label: "ua", value: "ua" },
        us: { label: "us", value: "us" },
        ve: { label: "ve", value: "ve" },
        za: { label: "za", value: "za" },
      },
    },
  },
};

export default FormSearchModel;
