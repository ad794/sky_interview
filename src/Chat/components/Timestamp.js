import React, { Component } from 'react';
import { View, Text, NativeModules } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { timestampToDate } from '../utils';

class Timestamp extends Component {
  static propTypes = {
    timestamp: PropTypes.string
  };
  constructor() {
    super();
    this.state = {
      timestamp: ''
    };
  }
  componentDidMount() {
    this.getTimestampFromiOS(this.props.timestamp);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timestamp !== this.props.timestamp) {
      this.getTimestampFromiOS(nextProps.timestamp);
    }
  }
  getTimestampFromiOS = async (timestamp) => {
    const timeStampFromiOS = await NativeModules.Timestamp.getTimestamp(timestamp);
    this.setState({ timestamp: timeStampFromiOS });
  };

  render() {
    const { timestamp } = this.state;
    return (
      <View style={styles.timestamp}>
        <Text>{timestampToDate(timestamp)}</Text>
      </View>
    );
  }
}
export default Timestamp;
