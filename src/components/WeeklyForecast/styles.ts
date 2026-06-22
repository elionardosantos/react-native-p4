import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#242444',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 20,
  },
  labelTitle: {
    color: '#B0B8D1', 
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#32325A',
  },
  dayText: {
    fontSize: 15,
    color: '#FFFFFF',
    width: 40,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSmall: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  tempTextMin: {
    fontSize: 15,
    color: '#A0AEC0',
    width: 35,
    textAlign: 'right',
  },
  tempTextMax: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: 35,
    textAlign: 'left',
  },
  barWrapper: {
    flex: 1,
    paddingHorizontal: 12,
  },
  barBackground: {
    height: 4,
    backgroundColor: '#32325A',
    borderRadius: 2,
    position: 'relative',
  },
  barFill: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#00E5FF',
    borderRadius: 2,
  }
});