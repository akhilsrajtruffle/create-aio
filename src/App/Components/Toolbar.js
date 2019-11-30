import React from 'react';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/react';
import { home, help } from 'ionicons/icons';

const Toolbar = props => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonButton href='/home' tab='home'>
            <IonIcon slot='icon-only' icon={home} />
          </IonButton>
        </IonButtons>
        <IonTitle>AppName</IonTitle>
        <IonButtons slot='end'>
          <IonButton href='/help' tab='help'>
            <IonIcon slot='icon-only' icon={help} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
export default Toolbar;

