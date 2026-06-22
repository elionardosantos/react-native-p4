import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242444',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 32,
  },
  labelTitle: {
    color: '#B0B8D1', 
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  chipsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    gap: 12,
  },
  chip: {
    backgroundColor: '#32325A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  }
});

export default styles;