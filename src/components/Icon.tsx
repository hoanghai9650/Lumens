import {View, Text, Image, ImageSourcePropType, ColorValue} from 'react-native';
import React from 'react';

interface IconProps {
  imageUri: ImageSourcePropType;
  width?: number | 10;
  height?: number | 10;
  color?: ColorValue | undefined;
  size?: number | 10;
}

export default function Icon(props: IconProps): JSX.Element {
  return (
    <Image
      source={props.imageUri}
      style={{width: props.size, height: props.size, tintColor: props.color}}
    />
  );
}
