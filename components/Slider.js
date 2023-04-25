import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import { client } from "../libs/client";

export const Slider = ({ banners }) => {
  console.log(banners);
  return (
    <>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
          perPage: 3,
          type: "loop",
          gap: "3px",
        }}
      >
        {banners.map((banner) => (
          <SplideSlide>
            <img className="slide-img" src={banner.image.url} alt={banner.title}></img>
          </SplideSlide>
        ))}
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
