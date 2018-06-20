import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = ({ uri }) => uri && <Image source={{ uri }} style={{ width: 100, height: 100 }} />;

Avatar.propTypes = {
  uri: PropTypes.string
};

export default Avatar;
