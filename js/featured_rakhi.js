$(document).ready(function () {
  getData();
});

const getData = () => {
  axios
    .get("https://mocki.io/v1/d2b304ef-90f8-40db-9e5b-a081c68bb64b")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < data.length) {
        $(".cards").append(`
        <div class="featured-card" style="width: 18rem">
        <img
          class="featured-card-img-top"
          src="images/IMG_${data[i].bigImg}.jpg"
          alt="Card image cap"
          id="feature${data[i].bigImg}"
        />
        <div class="other-img">
          <img
            src="images/IMG_${data[i].smlImg1}.jpg"
            class="featured-card-img-bottom"
            onclick="feature('${data[i].smlImg1}','${data[i].bigImg}')"
            id="feature${data[i].smlImg1}"
          />
          <img
            src="images/IMG_${data[i].smlImg2}.jpg"
            class="featured-card-img-bottom"
            onclick="feature(${data[i].smlImg2},'${data[i].bigImg}')"
            id="feature${data[i].smlImg2}"
          />
          <img
            src="images/IMG_${data[i].smlImg3}.jpg"
            class="featured-card-img-bottom"
            onclick="feature('${data[i].smlImg3}','${data[i].bigImg}')"
            id="feature${data[i].smlImg3}"
          />
        </div>
        <div class="featured-card-body">
          <div class="price" style="margin-top: 10px">₹${data[i].price}</div>
        </div>
        </div>
        
              `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
function feature(small_img_name, big_id) {
  if (small_img_name === 0) return;
  console.log(small_img_name);
  var x = "#feature" + small_img_name;
  var y = "#feature" + big_id;
  var a = document.querySelector(x);
  var b = document.querySelector(y);
  var c = a.src;
  a.src = b.src;
  b.src = c;
}
