import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Message from './Message';
import Avatar from './Avatar';
import styles from './styles';

class Messages extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  renderFlatList = () => {
    const { data, members } = this.props;
    return (
      <FlatList
        data={data}
        extraData={members}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={item => item.id}
      />
    );
  };

  renderItem = ({ userId, message, timestamp }) => {
    const member = this.props.members[userId];
    return (
      <View style={styles.card}>
        <View style={{ width: 100, height: 100 }}>{member && <Avatar uri={member.avatar} />}</View>
        <Message message={message} timestamp={timestamp} member={member} />
      </View>
    );
  };
  render() {
    return this.renderFlatList();
  }
}

export default Messages;
