import React from "react";
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { home,helpCircleOutline, person, settings } from "ionicons/icons";

const tabs = [
  {
    path: "/home",
    tab: "home",
    icon: home,
    label: "Home"
  },
  {
    path: "/help",
    tab: "help",
    icon: helpCircleOutline,
    label: "Help"
  },
  {
    path: "/profile",
    tab: "profile",
    icon: person,
    label: "Profile"
  },
  {
    path: "/settings",
    tab: "settings",
    icon: settings,
    label: "Settings"
  },
];

const Tabbar = () => {
  return (
    <IonTabBar slot="bottom">
      {tabs.map(({ path, tab, icon, label }) => (
        <IonTabButton key={tab} href={path} tab={tab}>
          <IonIcon icon={icon} />
          <IonLabel>{label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  );
};

export default Tabbar;
