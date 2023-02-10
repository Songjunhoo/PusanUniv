import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  bgImage: {width: '100%', height: '100%'},
  buttontwo: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  buttonthree: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  // -------------------------------------------------------- 버튼 형태
  logoimage: {
    marginTop: 70,
    marginRight: 23,
    height: 50,
    width: 370,
  },
  // ----------------------------------------------------------- 로고 이미지
  iconimagetwo: {
    marginTop: -85,
    marginLeft: -60,
    height: 50,
    width: 300,
  },
  iconimagethree: {
    marginTop: -85,
    marginLeft: -93,
    height: 50,
    width: 300,
  },
  // -------------------------------------------------------------- 메뉴 버튼 이미지
  texttwo: {
    marginTop: 110,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 54,
  },
  textthree: {
    marginTop: 110,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 21,
  },
  // -------------------------------------------------------------- 메뉴 버튼 텍스트
  touchtwo: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    width: 175,
  },
  touchthree: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    width: 110,
  },
  // -------------------------------------------------------------- 메뉴 버튼
  languagebuttonall: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  languagetextf: {
    marginLeft: 9,
    color: '#000000',
    fontSize: 14,
    padding: 5,
  },
  languagetextnf: {
    marginLeft: 14,
    color: '#ffffff',
    fontSize: 14,
    padding: 5,
  },
  languagebuttonf: {
    width: 70,
    borderColor: '#ffffff',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginLeft: 10,
    borderRadius: 7,
  },
  languagebuttonnf: {
    width: 70,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 7,
  },
  // ------------------------------------------------------------------- 다국어 버튼
});

export default function Home({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <>
      <View>
        <ImageBackground
          source={require('../images/bg.jpg')}
          style={styles.bgImage}>
          {/* ---------------------------------------------------------------- 배경 화면 사진 유지*/}
          <View style={styles.container}>
            <View>
              <View style={styles.languagebuttonall}>
                <TouchableOpacity style={styles.languagebuttonf}>
                  <Text style={styles.languagetextf}>한국어</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.languagebuttonnf}>
                  <Text style={styles.languagetextnf}>ENG</Text>
                </TouchableOpacity>
              </View>
              {/* ------------------------------------------------------------ 언어 변경 버튼 */}
              <Image
                style={styles.logoimage}
                resizeMode="contain"
                source={require('../images/logo.png')}
              />
            </View>
            {/* ---------------------------------------------------------------- 로고 버튼*/}
            <View>
              <View style={styles.buttontwo}>
                <TouchableOpacity
                  style={styles.touchtwo}
                  onPress={() => navigation.navigate('alarm')}>
                  <Text style={styles.texttwo}>알림확인</Text>
                  <Image
                    style={styles.iconimagetwo}
                    resizeMode="contain"
                    source={require('../images/i1.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchtwo}
                  onPress={() => navigation.navigate('food')}>
                  <Text style={styles.texttwo}>식단안내</Text>
                  <Image
                    style={styles.iconimagetwo}
                    resizeMode="contain"
                    source={require('../images/i2.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.buttonthree}>
                <TouchableOpacity
                  style={styles.touchthree}
                  onPress={() => navigation.navigate('announce')}>
                  <Text style={styles.textthree}>공지사항</Text>
                  <Image
                    style={styles.iconimagethree}
                    resizeMode="contain"
                    source={require('../images/i3.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchthree}
                  onPress={() =>
                    Linking.openURL(
                      'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401',
                    )
                  }>
                  <Text style={styles.textthree}>원생수칙</Text>
                  <Image
                    style={styles.iconimagethree}
                    resizeMode="contain"
                    source={require('../images/i4.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchthree}
                  onPress={() => navigation.navigate('question')}>
                  <Text style={styles.textthree}>이용문의</Text>
                  <Image
                    style={styles.iconimagethree}
                    resizeMode="contain"
                    source={require('../images/i5.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* ------------------------------------------------------------메뉴 버튼*/}
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
