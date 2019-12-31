/* eslint-disable */
import React from "react";
import { IonSlides, IonSlide, IonCardSubtitle, IonButton } from "@ionic/react";
import { Flip, Cube, overFlow } from "../Constants/SlideOptions";
import { mockSlides } from "../Constants/MockData";
const SlideShow = () => {
  return (
    <>
      <IonSlides
        style={{ width: "100%", height: 250 }}
        pager={false}
        options={Flip}
      >
        {mockSlides.map(({ id, url, name }) => (
          <IonSlide key={id} style={{ width: "100%", height: 250 }}>
            <div>
              <IonCardSubtitle>{name}</IonCardSubtitle>
              <img width="100%" height="200px" src={url} />
            </div>
          </IonSlide>
        ))}
      </IonSlides>
    </>
  );
};

export default SlideShow;
