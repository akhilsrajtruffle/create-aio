import React from "react";
import { IonContent, IonPage, IonCardTitle } from "@ionic/react";
import { Toolbar, Tabbar } from "../Components";

const Profile = props => {
  return (
    <IonPage>
      <Toolbar />
      <IonContent className="ion-padding">
        <IonCardTitle>Profile</IonCardTitle>
      </IonContent>
      <Tabbar />
    </IonPage>
  );
};

export default Profile;
