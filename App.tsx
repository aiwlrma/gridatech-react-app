import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <View style={styles.testContainer}>
        <Text style={styles.testText}>🎉 간호학생용 주사 실습 학습 앱이 실행되었습니다!</Text>
        <Text style={styles.subText}>화면이 보이시나요?</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testContainer: {
    padding: 20,
    alignItems: 'center',
  },
  testText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9C27B0',
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
  },
});

export default App;
