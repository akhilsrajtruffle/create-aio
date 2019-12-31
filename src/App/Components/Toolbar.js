import React from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon
} from "@ionic/react";
import { home, person, helpCircleOutline } from "ionicons/icons";

const buttons = {
  left: [
    {
      path: "/home",
      tab: "home",
      icon: home
    }
  ],
  right: [
    {
      path: "/help",
      tab: "help",
      icon: helpCircleOutline
    },
    {
      path: "/profile",
      tab: "profile",
      icon: person
    }
  ]
};
const Toolbar = props => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          {buttons.left.map(({ path, tab, icon }) => (
            <IonButton key={tab} href={path} tab={tab}>
              <IonIcon slot="icon-only" icon={icon} />
            </IonButton>
          ))}
        </IonButtons>
        <IonTitle>AppName</IonTitle>
        <IonButtons slot="end">
          {buttons.right.map(({ path, tab, icon }) => (
            <IonButton key={tab} href={path} tab={tab}>
              <IonIcon slot="icon-only" icon={icon} />
            </IonButton>
          ))}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
export default Toolbar;
