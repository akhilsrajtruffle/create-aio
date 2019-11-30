import React from "react";
import { IonContent, IonPage, IonCardTitle } from "@ionic/react";
import { Toolbar, Tabbar } from "../Components";

const Home = props => {
  return (
    <IonPage>
      <Toolbar />
      <IonContent className="ion-padding">
        <IonCardTitle>Home</IonCardTitle>
      </IonContent>
      <Tabbar />
    </IonPage>
  );
};

export default Home;

