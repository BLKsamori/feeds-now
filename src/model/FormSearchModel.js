const FormSearchModel = {
  searchFields: {
    question: {
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
  },
  filterFields: {},
};

export default FormSearchModel;
