import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import "./TopDealProductItem.scss";

function TopDealProductItem({ item }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={item.thumbnail_url} alt="green iguana" />
          <CardContent>
            <div>
              <h6 id="title">{item.name}</h6>
              <Rating defaultValue={item.rating_average} precision={0.1} />
              <div id="price">{item.price}đ</div>
              <span id="discount">-{item.discount_rate}%</span>
              <span id="old-price">{item.original_price}đ</span>
            </div>
            <div id="note">
              <span>Giao thứ 4, 23/10</span>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default TopDealProductItem;
