import React, {useState} from 'react';
import {StyleSheet, Text, Switch, View, FlatList} from 'react-native';
// import Accordion from 'react-native-collapsible/Accordion';

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'column',
    flex: 1,
  },
  text: {
    flex: 0.05,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
  },
  move: {
    width: 300,
    height: 18,
  },
  list: {
    flex: 0.9,
  },
  dummycontent: {
    fontWeight: 'bold',
    color: '#000000',
  },
});

function Alarm() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const ItemRender = ({item}) => (
    <View style={{padding: 12}}>
      <Text style={styles.dummycontent}> {item.title}</Text>
    </View>
  );

  const Divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '90%',
          marginLeft: 18,
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: '#E2E2E2',
        }}
      />
    );
  };

  // const ContentView = ({item}) => {
  //   return (
  //     <View>
  //       <Text>{item.contents}</Text>
  //     </View>
  //   )
  // }

  return (
    <View style={styles.contain}>
      <Text style={styles.text}>
        알림설정
        <View style={styles.move}>
          <Switch
            trackColor={{false: '#767577', true: '#34eb23'}}
            thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#3e3e3e"
            onChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </Text>
      <Text style={styles.text}>알림내역</Text>
      <View style={styles.list}>
        <FlatList
          key={'#'}
          keyExtractor={item => '#' + item.idx}
          data={dummy}
          renderItem={ItemRender}
          ItemSeparatorComponent={Divider}
        />
      </View>
    </View>
  );
}

export default Alarm;

const dummy = [
  {
    idx: 22,
    title: '[웅비관 원생대상] 원생실 에어컨 리모컨 지급 안내',
    contents: 'dumydata',
    date: '21.10.27',
  },
  {
    idx: 21,
    title: '2021학년도 2학기 대학생활원 조교 모집(2차)',
    contents: 'dumydata',
    date: '21.10.26',
  },
  {
    idx: 20,
    title:
      '[전체공지] 실내 흡연 금지! 창 밖 담배꽁초, 쓰레기(음료 포함) 투기금지!',
    contents: 'dumydata',
    date: '21.10.25',
  },
  {
    idx: 19,
    title: '진리 효원 방역소독 일정 안내(10.28)',
    contents: 'dumydata',
    date: '21.10.24',
  },
  {
    idx: 18,
    title: '[진리관 원생 대상] 건물 내 급수 중단 알림',
    contents: 'dumydata',
    date: '21.10.23',
  },
  {
    idx: 17,
    title: '2021학년도 2학기 온라인OT 미수강자 벌점 입력 안내',
    contents: 'dumydata',
    date: '21.10.22',
  },
  {
    idx: 16,
    title: '생활원 거주 원생 확인요청 관련',
    contents: 'dumydata',
    date: '21.10.21',
  },
  {
    idx: 15,
    title: '생실 냉방 종료 및 난방 가동 일정 안내',
    contents: 'dumydata',
    date: '21.10.20',
  },
  {
    idx: 14,
    title: '2021학년도 2학기 추가모집 합격자 서류제출 안내',
    contents: 'dumydata',
    date: '21.10.19',
  },
  {
    idx: 13,
    title: '[진리관 대상] 승강기 점검 안내',
    contents: 'dumydata',
    date: '21.10.18',
  },
  {
    idx: 12,
    title: '2학기 대학생활원 학기 중 선착순 추가모집 (21.10.01. 금 10시~17시)',
    contents: 'dumydata',
    date: '21.10.17',
  },
  {
    idx: 11,
    title: '원생실 냉방 공급 안내',
    contents: 'dumydata',
    date: '21.10.16',
  },
  {
    idx: 10,
    title:
      '[수강대상:모든 원생(미입사자 포함)] 2021학년도 2학기 온라인OT 수강 안내',
    contents: 'dumydata',
    date: '21.10.15',
  },
  {
    idx: 9,
    title: '2학기 대학생활원 학기중 선착순 추가모집',
    contents: 'dumydata',
    date: '21.10.14',
  },
  {
    idx: 8,
    title: '[식비환불신청] 시간표 환불 신청기간! (9.16 (목)~9.22. (수)까지)',
    contents: 'dumydata',
    date: '21.10.13',
  },
  {
    idx: 7,
    title: '추석 연휴 생활원생 코로나19 PCR 검사 협조 요청',
    contents: 'dumydata',
    date: '21.10.12',
  },
  {
    idx: 6,
    title: '2021학년도 원생실 냉방 공급 종료 안내',
    contents: 'dumydata',
    date: '21.10.11',
  },
  {
    idx: 5,
    title: '2021학년도 2학기 대학생활원 학기 중 추가모집 안내',
    contents: 'dumydata',
    date: '21.10.10',
  },
  {
    idx: 4,
    title: '소음주의',
    contents: 'dumydata',
    date: '21.10.9',
  },
  {
    idx: 3,
    title: '우편물 및 택배 발송 안내',
    contents: 'dumydata',
    date: '21.10.8',
  },
  {
    idx: 2,
    title: '2021학년도 2학기 온라인 식사변경 신청 안내',
    contents: 'dumydata',
    date: '21.10.7',
  },
  {
    idx: 1,
    title: '대학생활원 환불 관련 안내',
    contents: 'dumydata',
    date: '21.10.6',
  },
];
