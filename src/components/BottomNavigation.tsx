import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: '🏠', label: '홈' },
    { id: 'stats', icon: '📊', label: '통계' },
    { id: 'messages', icon: '💬', label: '메시지' },
    { id: 'settings', icon: '⚙️', label: '설정' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => setActiveTab(tab.id)}
        >
          <Text style={[
            styles.tabIcon,
            { opacity: activeTab === tab.id ? 1 : 0.5 }
          ]}>
            {tab.icon}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabIcon: {
    fontSize: 24,
  },
});

export default BottomNavigation;
