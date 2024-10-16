import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import "./TopDealProductItem.scss";
import { Typography } from "antd";
import { memo } from "react";

const { Paragraph } = Typography;

function TopDealProductItem({ item }) {
  return (
    <div>
      <Card sx={{ maxWidth: 200, margin: "5px", height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.thumbnail_url}
            alt="green iguana"
            style={{ objectFit: "contain", objectPosition: "center"}}
          />
          <CardContent>
            <div>
              <Paragraph ellipsis={{ rows: 2, tooltip: `${item.name}` }} id="title">
                {item.name}
              </Paragraph>
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
    </div>
  );
}

export default memo(TopDealProductItem);
