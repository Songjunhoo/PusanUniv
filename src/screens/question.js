import {React} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Linking} from 'react-native';

const styles = StyleSheet.create({
  qtitle: {
    marginTop: 20,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  qcontent1: {
    marginLeft: 8,
    marginRight: 8,
    fontWeight: 'bold',
    fontSize: 13,
    padding: 15,
  },
  qcontent2: {
    marginLeft: 8,
    marginRight: 8,
    fontWeight: 'bold',
    fontSize: 13,
    padding: 15,
  },
  button: {
    backgroundColor: '#4682b4',
    borderRadius: 3,
  },
  buttontitle: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  buttoncontent: {
    marginTop: 10,
    marginLeft: 5,
  },
  buttonall: {
    padding: 20,
  },
});

function Question() {
  return (
    <>
      <View>
        <Text style={styles.qtitle}>어플리케이션 안내 및 알림 수신 방법</Text>
        <Text style={styles.qcontent1}>
          * 본 어플리케이션은 생활원 공지알림 수신을 위한 PUSH 전용 앱으로
          생활원 알림을 수신하고자 하는 모든 분이 이용가능합니다.
        </Text>
        <Text style={styles.qcontent2}>
          * Push 알림을 수신하고자 하는 이용자는 메인화면 알림확인 → 알림설정 →
          ON 선택 바랍니다.
        </Text>

        {/* ------------------------------------------------------------------------- */}

        <Text style={styles.qtitle}>이용 방법 문의</Text>
        <View style={styles.buttonall}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL('https://dorm.pusan.ac.kr/dorm/main')
            }>
            <Text style={styles.buttontitle}>원생게시판 바로가기</Text>
          </TouchableOpacity>
          <Text style={styles.buttoncontent}>
            * 현재 생활원에 거주중인 원생이 이용가능한 게시판입니다.
          </Text>
        </View>
        <View style={styles.buttonall}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL('https://dorm.pusan.ac.kr/dorm/main')
            }>
            <Text style={styles.buttontitle}>비원생게시판 바로가기</Text>
          </TouchableOpacity>
          <Text style={styles.buttoncontent}>
            * 현재 생활원에 거주중이지 않은 비원생이 이용가능한 게시판입니다.
          </Text>
        </View>
        <View style={styles.buttonall}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(`tel: 051 - 510 - 7827}`)}>
            <Text style={styles.buttontitle}>생활원 전화문의</Text>
          </TouchableOpacity>
          <Text style={styles.buttoncontent}>
            * 행정실 운영시간 : 평일 9시 ~ 18시 / 12시 ~ 13시 제외
          </Text>
        </View>
      </View>
    </>
  );
}

export default Question;
