import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonCardTitle,
  IonActionSheet,
  IonButton
} from "@ionic/react";
import { Toolbar, Tabbar, SlideShow } from "../Components";

const Home = props => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  return (
    <IonPage>
      <Toolbar />
      <IonContent className="ion-padding">
        <IonCardTitle>Home</IonCardTitle>
        <SlideShow url={""} />
        
      </IonContent>
      
      <Tabbar />
    </IonPage>
  );
};

export default Home;
