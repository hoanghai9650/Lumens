import {View, Text, TouchableOpacity, LayoutChangeEvent} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import styles from './home.styles';
import ImagePath from '../../utils/ImagePath';
import Icon from '../../components/Icon';
import {LayoutParams, useMeasureLayout} from './hook/useMeasureLayout';

type BalanceProps = {
  handleSetMeasure: (values: LayoutParams) => void;
};

export default function Balance(props: BalanceProps) {
  const {handleSetMeasure} = props;

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const {x, y} = event.nativeEvent.layout;
    handleSetMeasure({x, y});
  };

  return (
    <View style={styles.balanceContainer} onLayout={handleOnLayout}>
      <Text style={styles.balanceTitle}>Available Coin balance</Text>
      <Text style={styles.numBalance}>340</Text>
      <Progress.Bar
        progress={0.7}
        width={295}
        height={5}
        color="#0062FF"
        unfilledColor="#E2E2EA"
        borderColor="transparent"
        style={styles.progressBar}
      />
      <Text style={styles.subTitleBalance}>
        You have paid rental fee for $1,200.
      </Text>
      <Text style={[styles.subTitleBalance, {marginTop: 0}]}>
        Pay more $800 to achieve Gold Tier.
      </Text>
      <TouchableOpacity style={styles.btnBenefitContainer}>
        <View style={styles.btnBenefitView}>
          <Text style={styles.btnBenefitTitle}>View tier benefits</Text>
          <Icon imageUri={ImagePath.icon_arrow_right} size={24} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnMyCoupons}>
        <Text style={styles.couponText}>My Coupons</Text>
      </TouchableOpacity>
      <Text style={styles.updateStyle}>Updated : 02/11/2021</Text>
    </View>
  );
}
