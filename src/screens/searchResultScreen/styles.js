import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  loadingIndicatior: {
    justifyContent: 'center',
    height: '90%',
  },
  searchQueryText: { fontSize: 20, marginLeft: 10, marginVertical: 10 },
  noDefinitions: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  noDefinitionsText: {
    fontSize: 18,
  },
});

export default styles;
