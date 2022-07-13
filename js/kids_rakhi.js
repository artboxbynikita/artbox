$(document).ready(function () {
  js = [
    { img: 7580, price: 160 },
    { img: 7586, price: 80 },
    { img: 7598, price: 120 },
    { img: 7602, price: 150 },
    { img: 7603, price: 135 },
    { img: 7607, price: 135 },
    { img: 7608, price: 150 },
    { img: 7609, price: 135 },
    { img: 7622, price: 120 },
    { img: 7626, price: 120 },
    { img: 7630, price: 120 },
    { img: 7633, price: 120 },
    { img: 7689, price: 80 },
    { img: 8705, price: 225 },
    { img: 7600, price: 150 },
    { img: 8860, price: 250 },
    { img: 8861, price: 240 },
    { img: 8863, price: 250 },
    { img: 8867, price: 250 },
    { img: 8873, price: 250 },
    { img: 8878, price: 150 },
    { img: 8885, price: 180 },
    { img: 8893, price: 140 },
    { img: 8894, price: 200 },
    { img: 8898, price: 120 },
  ];
  getData();
});

const getData = () => {
  axios
    .get("https://neev0511.github.io/JSON/kids_rakhi.json")
    .then((response) => {
      const data = js;
      var i = 0;
      while (i < data.length) {
        $(".cards").append(`
                  <div class="card" style="width: 18rem">
                      <img
                          class="card-img-top"
                          src="images/IMG_${data[i].img}.jpg"
                          alt="Card image cap"
                      />
                      <div class="card-body">
                          <div class="price">₹${data[i].price}</div>
                      </div>
                  </div>
              `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
