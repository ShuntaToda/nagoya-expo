import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import miraitower from "../image/topview/miraitower.jpg";
import miraitower_naname from "../image/topview/miraitower_naname.jpg";
import Image from "next/image";

export const Slider = () => {
  console.log(miraitower);
  return (
    <>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 4000, // 自動再生の間隔を3秒に設定
          perPage: 1,
          type: "loop",
        }}
      >
        <SplideSlide>
          <Image src={miraitower} width={2000} height={"auto"}></Image>
        </SplideSlide>
        <SplideSlide>
          <Image src={miraitower_naname} width={2000} height={"auto"}></Image>
        </SplideSlide>
      </Splide>
    </>
  );
};
