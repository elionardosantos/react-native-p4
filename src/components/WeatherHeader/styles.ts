import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
    justifyContent: 'center',
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
  centerBlock: {
    alignItems: 'center',
    marginTop: 10,
  },
  weatherIcon: {
    fontSize: 80,
    marginBottom: 8,
  },
  temperature: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 4,
  },
  feelsLike: {
    fontSize: 14,
    color: '#B0B8D1',
    marginTop: 6,
  },
});

export default styles;
