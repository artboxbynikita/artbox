$(document).ready(function () {
  getData();
});

const getData = () => {
  axios
    .get("https://mocki.io/v1/722e687e-194a-4455-8f75-36e6c96678f3")
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
