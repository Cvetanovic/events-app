const initialState = {
  events: [
    // {
    //   id: "1",
    //   title: "Mad Cool Festival",
    //   place: "Spain",
    //   eventStart: "08.07.2020",
    //   eventEnd: "11.07.2020",
    //   content:
    //     "Mad Cool is one of Europe's biggest and best music festivals, held each summer in the Spanish capital, and this year sees Madrid's flagship festival expand to four days for the first time in celebration of reaching a milestone fifth anniversary edition. Every year, the organisers assemble a lineup that brings international superstars from an array of genres to Madrid – rock giants at the top of the bill, indie and pop favourites elsewhere, and a selection of underground electronic music's hottest acts among them. Having consistently grown in scale – be it the performers, crowds, or production – the festival has quickly found its place among the continent's elite, despite only hosting the first edition in 2016, offering well over 100,000 music fans the chance to soak up the Spanish sun and witness their musical heroes doing what they do best.",
    //   imageLink:
    //     "https://www.merca2.es/wp-content/uploads/2019/04/img_amartiarena_20180709-180025_imagenes_lv_propias_amartiarena_mad_cool_efe_1-kX0H-U45794815180eQE-992x558@LaVanguardia-Web.jpg",
    //   videoLink: "https://www.youtube.com/watch?v=cZOQzGmhNZ8",
    // },
  ],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      console.log("created event", action.event);
      return state;

    case "CREATE_EVENT_ERROR":
      console.log("create event error", action.error);
      return state;

    default:
      return state;
  }
};

export default eventReducer;
