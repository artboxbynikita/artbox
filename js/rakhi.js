$(document).ready(function () {
  get_Kids_Rakhi();
  get_Single_Rakhi();
  get_Roli_Moli();
  get_Couples_Rakhi();
  get_Envelopes();
  console.log("Testing...");
});

const get_Roli_Moli = () => {
  axios
    .get("https://mocki.io/v1/2456e994-fe7e-495b-9d28-2b5f2d061078")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#roli-moli").append(`
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
const get_Kids_Rakhi = () => {
  axios
    .get("https://mocki.io/v1/56e62794-4af5-4147-ba62-016700d4bc1c")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#kids-rakhi").append(`
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
const get_Single_Rakhi = () => {
  axios
    .get("https://mocki.io/v1/5b9a2836-1ffc-4599-b3c7-4e99d3b4d7ae")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#single-rakhi").append(`
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
const get_Couples_Rakhi = () => {
  axios
    .get("https://mocki.io/v1/722e687e-194a-4455-8f75-36e6c96678f3")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#couples-rakhi").append(`
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
const get_Envelopes = () => {
  axios
    .get("https://mocki.io/v1/9ac81813-4b18-4a4b-8ec9-cc24e7c75dfb")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#envelopes").append(`
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
