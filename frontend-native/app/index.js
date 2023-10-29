import React, { useState } from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import MenuCard from '../components/RecipeCard';
import { Navbar } from './_layout';
import menuData from './menuData.json';

const App = () => {
    const [activeMenu, setActiveMenu] = useState('MAIN');
  
    return (
      <SafeAreaView style={styles.container}>
        {/* Gib activeMenu und setActiveMenu als Requisiten weiter */}
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <ScrollView>
          {menuData
            .filter(item => item.type === activeMenu)
            .map((item, index) => (
              <MenuCard 
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5'
    }
  });
  
  export default App;