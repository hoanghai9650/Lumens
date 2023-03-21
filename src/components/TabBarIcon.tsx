import {ImageSourcePropType} from 'react-native/types';

import Icon from './Icon';
import React from 'react';

export const tabBarIcon = (focused: boolean, image: ImageSourcePropType) => {
  return (
    <Icon size={32} imageUri={image} color={focused ? '#0062FF' : undefined} />
  );
};
