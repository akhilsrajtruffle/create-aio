import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, help } from 'ionicons/icons';

const Tabbar = () => {
  return (
    <IonTabBar slot='bottom'>
      <IonTabButton href='/home' tab='home'>
        <IonIcon icon={home} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>

      <IonTabButton href='/help' tab='help'>
        <IonIcon icon={help} />
        <IonLabel>Help</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default Tabbar;

