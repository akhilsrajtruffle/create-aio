import React from "react";
import { IonContent, IonPage, IonCardTitle } from "@ionic/react";
import { Toolbar, Tabbar } from "../Components";

const Login = props => {
  return (
    <IonPage>
      <Toolbar />
      <IonContent className="ion-padding">
        <IonCardTitle>Login</IonCardTitle>
      </IonContent>
      <Tabbar />
    </IonPage>
  );
};

export default Login;

