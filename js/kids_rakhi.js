$(document).ready(function () {
  getData();
});

const getData = () => {
  axios
    .get("https://mocki.io/v1/56e62794-4af5-4147-ba62-016700d4bc1c")
    .then((response) => {
      const data = response.data;
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
