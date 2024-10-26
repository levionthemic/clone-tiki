const fs = require("fs");

// Dữ liệu mẫu
const arr = [];
fetch("http://localhost:8001/content-top-deal")
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      const a = {};
      a["discount_rate"] = item.discount_rate;
      a["name"] = item.name;
      a["original_price"] = item.original_price;
      a["price"] = item.price;
      a["rating_average"] = item.rating_average;
      a["thumbnail_url"] = item.thumbnail_url;
      arr.push(a);
    });
    console.log(arr);
    return arr;
  })
  .then((arr) => {
    const jsonData = JSON.stringify(arr);

    // Ghi vào file
    fs.writeFile("data.json", jsonData, (err) => {
      if (err) throw err;
      console.log("Data written to file successfully.");
    });
  });
