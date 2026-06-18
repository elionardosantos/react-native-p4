import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F6EF7',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cityName: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  topButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  unitButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  unitButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  refreshButton: {
    padding: 4,
  },
  refreshText: {
    fontSize: 16,
  },
});

export default styles;
