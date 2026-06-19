import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242444',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 12,
    marginTop: 24,
  },
  labelTitle: {
    color: '#B0B8D1',
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  scrollContent: {
    gap: 1,
  },
  cardItem: {
    alignItems: 'center',
    width: 60,
  },
  timeText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 8,
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  tempText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});

export default styles;