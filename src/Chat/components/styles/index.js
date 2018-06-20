import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  section: {
    flex: 1,
    marginTop: 20
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#000',
    marginBottom: 15
  },

  wrapper: {
    flex: 1
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  },
  email: {
    marginTop: 5,
    padding: 5,

    backgroundColor: 'white'
  },
  timestamp: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
}));
