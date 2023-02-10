import {WebView} from 'react-native-webview';
import {React} from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

function Announce() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601',
        }}
      />
    </View>
  );
}

export default Announce;
