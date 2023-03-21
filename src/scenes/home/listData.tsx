import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import listData from '../../data/data';
import styles from './home.styles';
import HorizontalItem from '../../components/HorizontalItem';
import {LayoutParams} from './hook/useMeasureLayout';

type ListDataProps = {
  measure: LayoutParams | any;
};

export default function ListData(props: ListDataProps) {
  const {measure} = props;

  return (
    <View style={styles.listDataContainer(measure?.y)}>
      {listData?.map((items, key) => (
        <View key={key}>
          <Text style={styles.listTitle(key > 0)}>{items.zoneName}</Text>
          <FlatList
            data={items.content}
            key={key}
            maxToRenderPerBatch={4}
            horizontal
            style={styles.flatListStyle}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            renderItem={({item, index}) => (
              <HorizontalItem
                index={index}
                source={item.image}
                coins={item.coins}
                description={item.description}
              />
            )}
          />
        </View>
      ))}
    </View>
  );
}
