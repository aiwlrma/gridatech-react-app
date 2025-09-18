import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ProgressIndicator = () => {
  const steps = [
    { id: 1, title: '물품 준비', completed: true },
    { id: 2, title: '주사 부위 선정', completed: true, current: true },
    { id: 3, title: '약물 투약', completed: false },
  ];

  const progress = 6;
  const total = 10;
  const percentage = (progress / total) * 100;

  return (
    <View style={styles.container}>
      {/* 단계 표시 */}
      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View key={step.id} style={styles.stepContainer}>
            <View
              style={[
                styles.stepCircle,
                step.completed && styles.stepCompleted,
                step.current && styles.stepCurrent,
              ]}
            />
            <Text
              style={[
                styles.stepText,
                step.current && styles.stepTextCurrent,
              ]}
            >
              {step.title}
            </Text>
            {index < steps.length - 1 && (
              <View
                style={[
                  styles.stepLine,
                  step.completed && styles.stepLineCompleted,
                ]}
              />
            )}
          </View>
        ))}
      </View>

      {/* 진행률 표시 */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {progress}/{total} 진행도
        </Text>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
      
      {/* 진행률 바 */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${percentage}%` },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  stepCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
    marginBottom: 8,
  },
  stepCompleted: {
    backgroundColor: '#9C27B0',
  },
  stepCurrent: {
    backgroundColor: '#9C27B0',
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  stepText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
  stepTextCurrent: {
    color: '#9C27B0',
    fontWeight: '600',
  },
  stepLine: {
    position: 'absolute',
    top: 6,
    left: '50%',
    width: '100%',
    height: 2,
    backgroundColor: '#E0E0E0',
    zIndex: -1,
  },
  stepLineCompleted: {
    backgroundColor: '#9C27B0',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  percentageText: {
    fontSize: 14,
    color: '#9C27B0',
    fontWeight: '600',
  },
  progressBarContainer: {
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#9C27B0',
    borderRadius: 4,
  },
});

export default ProgressIndicator;
