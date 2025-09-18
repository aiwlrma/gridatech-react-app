import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const EvaluationDetails = () => {
  const strengths = [
    '정확한 물품을 준비하였습니다.',
    '무균술에 대한 문제를 모두 맞췄습니다.',
    '안전한 간호를 제공하였습니다.',
  ];

  const improvements = [
    '주사부위에 대한 정확한 지식이 필요합니다.',
    '해부학적 위치에대한 사전학습이 필요합니다.',
    '주사 약물 준비에 대한 연습이 필요합니다.',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>평가 세부 내용</Text>
        <TouchableOpacity>
          <Text style={styles.moreText}>더보기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionsContainer}>
        {/* 강점 섹션 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.checkIcon}>✅</Text>
            <Text style={styles.sectionTitle}>강점</Text>
          </View>
          <View style={styles.pointsContainer}>
            {strengths.map((point, index) => (
              <View key={index} style={styles.pointItem}>
                <View style={styles.bulletPoint} />
                <Text style={styles.pointText}>{point}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 보완점 섹션 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.warningIcon}>⚠️</Text>
            <Text style={styles.sectionTitle}>보완점</Text>
          </View>
          <View style={styles.pointsContainer}>
            {improvements.map((point, index) => (
              <View key={index} style={styles.pointItem}>
                <View style={[styles.bulletPoint, styles.bulletPointWarning]} />
                <Text style={styles.pointText}>{point}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  moreText: {
    fontSize: 14,
    color: '#9C27B0',
  },
  sectionsContainer: {
    gap: 20,
  },
  section: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginLeft: 8,
  },
  pointsContainer: {
    gap: 8,
  },
  pointItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#9C27B0',
    marginTop: 6,
    marginRight: 12,
  },
  bulletPointWarning: {
    backgroundColor: '#FF9800',
  },
  pointText: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },
  checkIcon: {
    fontSize: 20,
  },
  warningIcon: {
    fontSize: 20,
  },
});

export default EvaluationDetails;
