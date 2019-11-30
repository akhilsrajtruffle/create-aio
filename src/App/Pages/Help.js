import React from "react";
import { IonContent, IonPage, IonCardTitle } from "@ionic/react";
import { Toolbar, Tabbar } from "../Components";

const Help = props => {
  return (
    <IonPage>
      <Toolbar />
      <IonContent className="ion-padding">
        <IonCardTitle>Help</IonCardTitle>
      </IonContent>
      <Tabbar />
    </IonPage>
  );
};

export default Help;

