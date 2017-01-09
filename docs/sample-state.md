{
  currentUser: {
      id: 1,
      username: "bronwyn"
    },
    forms: {
      signUp: {errors: []},
      logIn: {errors: []},
      newPin: {errors: ["You must select an image"]}
    },
    pins: {
      1: {
        title: "Pretty color palette",
        description: "Minimalist, warm colors to potentially use for design",
        image_url: "http://www.fubiz.net/2016/01/07/the-minimalist-color-palettes-of-2015/",
        user_id: 1,
        username: "Kitkat"
        boards: {
        1: {
          id: 2,
          name: "UX Design"
        },
        2: {
          id: 5,
          name: "Design Inspo"
        }
      },
      tags: {
        1: {
          id: 10,
          name: "colors"
          },
        2: {
          id: 12,
          name: "warm"
        }
      },
    }
  }
}
