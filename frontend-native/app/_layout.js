// // Navbar.js
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const Navbar = ({ activeMenu, setActiveMenu }) => {
//   return (
//     <View style={styles.navbar}>
//       {['Vospeise', 'MAIN', 'SANDWICHES'].map(menu => (
//         <TouchableOpacity 
//           key={menu} 
//           // onPress={() => setActiveMenu(menu)}
//           style={menu === activeMenu ? styles.active : {}}
//         >
//           <Text>{menu}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#f5f5f5',
//     paddingVertical: 10,
//   },
//   active: {
//     borderBottomWidth: 2,
//     borderBottomColor: 'black'
//   }
// });

// export default Navbar;
