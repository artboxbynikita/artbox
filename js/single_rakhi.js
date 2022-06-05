$(document).ready(function () {
  getData();
});

const getData = () => {
  axios
    .get("https://mocki.io/v1/5b9a2836-1ffc-4599-b3c7-4e99d3b4d7ae")
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
