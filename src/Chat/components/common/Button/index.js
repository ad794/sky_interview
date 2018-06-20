import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Button = ({ onPress, children }) => {
  const { textStyle, primaryButtonStyle } = styles;
  return (
    <View style={styles.inputsContainer}>
      <TouchableOpacity style={primaryButtonStyle} onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

/* eslint-disable */
export { Button };
