import React from "react";
import { IonContent, IonPage, IonCardTitle } from "@ionic/react";
import { Toolbar, Tabbar } from "../Components";

const Settings = props => {
  return (
    <IonPage>
      <Toolbar />
      <IonContent className="ion-padding">
        <IonCardTitle>Settings</IonCardTitle>
      </IonContent>
      <Tabbar />
    </IonPage>
  );
};

export default Settings;
