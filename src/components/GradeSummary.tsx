import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const GradeSummary = () => {
  const chartData = [60, 80, 70, 90, 85, 75, 80]; // 막대 차트 데이터

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>성적 요약</Text>
        <TouchableOpacity>
          <Text style={styles.moreText}>더보기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {/* 막대 차트 카드 */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>항목별 총점</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
          <View style={styles.chartContainer}>
            <View style={styles.barChart}>
              {chartData.map((value, index) => (
                <View key={index} style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      { height: (value / 100) * 60 },
                    ]}
                  />
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>

        {/* 원형 차트 카드 */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>항목별 총점</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
          <View style={styles.circularChartContainer}>
            <View style={styles.circularChart}>
              <View style={styles.circularProgress}>
                <Text style={styles.scoreText}>80점</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  chartContainer: {
    height: 80,
    justifyContent: 'flex-end',
  },
  barChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 60,
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 1,
  },
  bar: {
    width: 8,
    backgroundColor: '#9C27B0',
    borderRadius: 4,
    minHeight: 4,
  },
  circularChartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  circularChart: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: '#E0E0E0',
    borderTopColor: '#9C27B0',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-90deg' }],
  },
  circularProgress: {
    transform: [{ rotate: '90deg' }],
  },
  scoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
  },
  arrowIcon: {
    fontSize: 20,
    color: '#666666',
  },
});

export default GradeSummary;
