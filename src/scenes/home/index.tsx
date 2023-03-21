import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import ImagePath from '../../utils/ImagePath';
import Icon from '../../components/Icon';
import styles from './home.styles';
import Balance from './balance';
import ListData from './listData';
import {useMeasureLayout} from './hook/useMeasureLayout';

export default function Home() {
  const {measure, handleSetMeasure} = useMeasureLayout();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        {/* Tier Explain */}
        <View style={styles.tierInfoContainer}>
          <TouchableOpacity style={styles.btnBack}>
            <Icon imageUri={ImagePath.icon_back} size={40} />
          </TouchableOpacity>

          <View style={styles.tierContent}>
            <Text style={styles.tierTitle}>Silver Tier</Text>
            <Text style={styles.tierText}>
              In Silver Tier, every $1 in rental fee paid, you get 2 coins to
              redeem exclusive rewards.
            </Text>
          </View>

          {/* Balance Component */}
          <Balance handleSetMeasure={handleSetMeasure} />
        </View>

        {/* List data component */}
        <View style={styles.dataContainer}>
          <ListData measure={measure} />
        </View>
      </ScrollView>
    </View>
  );
}
