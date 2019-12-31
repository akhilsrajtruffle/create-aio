import React from "react";
import { FirebaseContext, Firebase } from "./Util";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import { Plugins, SplashScreen } from "@capacitor/core";
import { Home, Help, Login, Profile, Settings } from "./Pages";
import "./Styles/App.scss";

const { StatusBar } = Plugins;

const App = () => {
  StatusBar.show();
  SplashScreen.load();
  SplashScreen.hide();
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <IonApp className="App">
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/profile" component={Profile} />
            <Route path="/help" component={Help} />
            <Route path="/login" component={Login} />
            <Route path="/settings" component={Settings} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </FirebaseContext.Provider>
  );
};

export default App;
