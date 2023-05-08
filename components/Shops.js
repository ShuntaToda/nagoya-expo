import React from "react";

export const Shops = ({ title }) => {
  return (
    <>
      <div className="c-shops">
        <h3 className="c-shops__title">{title}</h3>
        <div className="c-shops__contents">
          <div className="c-card">
            <img className="c-card__img" src="https://placehold.jp/150x150.png"></img>
            <div className="c-card__content">
              <div className="c-card__titile">タイトル</div>
            </div>
          </div>
          <div className="c-card">
            <img className="c-card__img" src="https://placehold.jp/150x150.png"></img>
            <div className="c-card__content">
              <div className="c-card__titile">タイトル</div>
            </div>
          </div>
          <div className="c-card">
            <img className="c-card__img" src="https://placehold.jp/150x150.png"></img>
            <div className="c-card__content">
              <div className="c-card__titile">タイトル</div>
            </div>
          </div>
          <div className="c-card">
            <img className="c-card__img" src="https://placehold.jp/150x150.png"></img>
            <div className="c-card__content">
              <div className="c-card__titile">タイトル</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
