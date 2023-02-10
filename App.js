import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {fcmService} from './src/pushalarm/FCMService';
import {localNotificationService} from './src/pushalarm/LocalNotificationService';
// import {Platform, NativeModules} from 'react-native';
// import {IntlProvider} from 'react-intl';

// import koMessage from './src/lang/lang.ko';
// import enMessage from './src/lang/lang.en';
import home from './src/screens/home';
import alarm from './src/screens/alarm';
import food from './src/screens/food';
import announce from './src/screens/announce';
import question from './src/screens/question';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const App: () => Node = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log('[App] onRegister : token :', token);
    }

    function onNotification(notify) {
      console.log('[App] onNotification : notify :', notify);
      const options = {
        soundName: 'default',
        playSound: true,
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
      );
    }

    function onOpenNotification(notify) {
      console.log('[App] onOpenNotification : notify :', notify);
      alert('Open Notification : notify.body :' + notify.body);
    }
    return () => {
      console.log('[App] unRegister');
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);

  // const getSystemLanguage = () => {
  //   const deviceLanguage =
  //     Platform.OS === 'ios'
  //       ? NativeModules.SettingsManager.settings.AppleLocale ||
  //         NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
  //       : NativeModules.I18nManager.localeIdentifier;

  //   // 한국어 ko_KR
  //   if (deviceLanguage.toLowerCase().indexOf('ko') >= 0) {
  //     return 'ko';
  //   }

  //   // 영어 en_US
  //   if (deviceLanguage.toLowerCase().indexOf('en') >= 0) {
  //     return 'en';
  //   }

  //   return 'en';
  // };

  // let defaultLang = {};
  // const locale = getSystemLanguage();
  // if (locale === 'ko') {
  //   defaultLang = koMessage;
  // }
  // if (locale === 'en') {
  //   defaultLang = enMessage;
  // }

  return (
    <>
      <NavigationContainer>
        {/* <IntlProvider locale={locale} messages={defaultLang}> */}
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="alarm"
            component={alarm}
            options={{title: '알림확인', headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="food"
            component={food}
            options={{title: '식단안내', headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="announce"
            component={announce}
            options={{title: '공지사항', headerTitleAlign: 'center'}}
          />
          {/* 원생수칙은 웹으로 감 */}
          <Stack.Screen
            name="question"
            component={question}
            options={{title: '이용문의', headerTitleAlign: 'center'}}
          />
        </Stack.Navigator>
        {/* </IntlProvider> */}
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
