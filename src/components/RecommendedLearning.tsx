import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const RecommendedLearning = () => {
  const learningItems = [
    {
      id: 1,
      title: 'IM Injection Step 2',
      subtitle: '반복 학습 권장',
    },
    {
      id: 2,
      title: 'IM Injection Step 3',
      subtitle: '반복 학습 권장',
    },
    {
      id: 3,
      title: 'IM Injection Step 4',
      subtitle: '반복 학습 권장',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>추천 학습</Text>
        <TouchableOpacity>
          <Text style={styles.moreText}>더보기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemsContainer}>
        {learningItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.calendarIcon}>📅</Text>
            </View>
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            </View>
            <View style={styles.itemRight}>
              <Text style={styles.arrowIcon}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  itemsContainer: {
    gap: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
  },
  itemLeft: {
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  itemRight: {
    marginLeft: 12,
  },
  calendarIcon: {
    fontSize: 20,
  },
  arrowIcon: {
    fontSize: 20,
    color: '#666666',
  },
});

export default RecommendedLearning;
