import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import miraitower from "../image/topview/miraitower.jpg";
import miraitower_naname from "../image/topview/miraitower_naname.jpg";

const TopView = () => {
  return (
    <>
      <div className="p-topview">
        <Splide
          className="h-100 overflow-hidden"
          aria-label="私のお気に入りの画像集"
          options={{
            autoplay: true, // 自動再生を有効
            interval: 3000, // 自動再生の間隔を3秒に設定
            perPage: 1,
            type: "loop",
            gap: "3px",
          }}
        >
          <SplideSlide>
            <img className="slide-img" src={miraitower.src} alt={"mirai"}></img>
          </SplideSlide>
          <SplideSlide>
            <img className="slide-img" src={miraitower_naname.src} alt={"mirai"}></img>
          </SplideSlide>
        </Splide>

        <div className="p-topview__text">
          <h2>地元学生による名古屋未来万博in久屋大通パーク</h2>
          <div className="p-topview__text--content">
            <span>名古屋万博実行委員会</span>
            <span>2023年7月29日(土）・30日（日）11：00～</span>
          </div>
          <div className="p-topview__button btn btn-primary">Read More</div>
        </div>
      </div>
    </>
  );
};

export default TopView;
