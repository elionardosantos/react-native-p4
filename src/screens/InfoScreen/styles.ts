import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoBlock: {
    alignItems: 'center',
    marginBottom: 32,
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 12,
  },
  appSubtitle: {
    color: '#B0B8D1',
    fontSize: 14,
    marginTop: 4,
  },
  list: {
    paddingHorizontal: 16,
    gap: 12,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#242444',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    backgroundColor: '#1A1A2E',
    padding: 8,
    borderRadius: 24,
  },
  cardInfo: {
    flex: 1,
  },
  devName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  links: {
    flexDirection: 'row',
    gap: 12,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#1A1A2E',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  linkText: {
    color: '#B0B8D1',
    fontSize: 12,
  },
});

export default styles;