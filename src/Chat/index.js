import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadMessages, loadMembers, sortMessagesByTime } from './redux/actions';

import Messages from './components/Messages';
import { Button } from './components/common/Button';
import { styles } from './styles';

class Chat extends Component {
  static propTypes = {
    messages: PropTypes.object,
    members: PropTypes.object,
    loadMessages: PropTypes.func,
    loadMembers: PropTypes.func,
    sortMessagesByTime: PropTypes.func
  };

  componentDidMount() {
    this.props.loadMessages();
    this.props.loadMembers();
  }

  handleOnPress = () => {
    this.props.sortMessagesByTime();
  };

  display = () => {
    const { messages, members } = this.props;
    return (
      <View style={styles.section}>
        <Button onPress={this.handleOnPress}>SORT BY TIME</Button>
        <Messages data={messages.data} members={members} />
      </View>
    );
  };

  render() {
    const { messages } = this.props;
    return (
      <View style={styles.container}>
        {messages.isLoading ? <Text> Loading </Text> : this.display()}
      </View>
    );
  }
}

const mapStateToProps = ({ messages, members }) => ({
  messages,
  members
});

export default connect(
  mapStateToProps,
  {
    loadMessages,
    loadMembers,
    sortMessagesByTime
  }
)(Chat);
