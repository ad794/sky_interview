import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
import styles from './styles';

class Message extends Component {
  static propTypes = {
    message: PropTypes.string,
    timestamp: PropTypes.string,
    member: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      showEmail: false
    };
  }

  onPressInHandler = () => {
    this.setState({
      showEmail: true
    });
  };
  onPressOutHandler = () => {
    this.setState({
      showEmail: false
    });
  };

  render() {
    const { message, member, timestamp } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.message}>
          <TouchableWithoutFeedback
            testID="showEmail"
            onPressIn={this.onPressInHandler}
            delayPressOut={1200}
            onPressOut={this.onPressOutHandler}
          >
            <View>
              <Text testID="messageText" style={styles.message}>
                {message}
              </Text>
              {this.state.showEmail && (
                <Text testID="emailText" style={styles.email}>
                  {member && member.email}
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Timestamp timestamp={timestamp} />
      </View>
    );
  }
}

export default Message;
