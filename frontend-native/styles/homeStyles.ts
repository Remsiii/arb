import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
    }, 
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  navbarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#ffffff',
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  navItem: {
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5'
  },
  navItemSelected: {
    backgroundColor: '#e0e0e0'
  },
  navText: {
    fontSize: 16,
    color: '#333'
  },
  navTextSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  contentScrollView: {
    marginTop: 60,
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#A3C492',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  cartIcon: {
    fontSize: 24,
  },
  cartCount: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold'
  }
});
