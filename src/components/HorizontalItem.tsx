import {View, Text, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import React, {memo} from 'react';

type ItemProps = {
  source: ImageSourcePropType;
  coins?: number;
  description?: string;
  index: number;
};

const HorizontalItem = (props: ItemProps) => {
  return (
    <View style={styles.container} key={props.index}>
      <Image source={props.source} style={styles.imageStyle} />
      <Text style={styles.coinsStyle}>{props.coins} Coins</Text>
      <Text style={styles.descriptionStyle}>{props.description}</Text>
    </View>
  );
};
export default memo(HorizontalItem);

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 240,

    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginRight: 24,
    shadowColor: '#171725',
    shadowOffset: {
      width: 1,
      height: 12,
    },
    shadowRadius: 8,
    shadowOpacity: 0.04,
  },
  imageStyle: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  coinsStyle: {
    marginTop: 16,
    paddingLeft: 16,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#0062FF',
  },
  descriptionStyle: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#92929D',
    paddingHorizontal: 16,
  },
});
