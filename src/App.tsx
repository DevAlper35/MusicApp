import React, { useState } from 'react';
import music_data from "./music-data.json"
import SarkiKarti from "./components/SarkiKarti/SarkiKarti"
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import SearchBar from './components/SearchBar/SearchBar';

function App(): React.JSX.Element {

  const [musics, setMusics] = useState(music_data)

  const renderSong = (({item})=><SarkiKarti song={item}/>)

  const handleSearch = (metin) => {
    const filtreliMusic = music_data.filter(
      sarki => {
        const arananMetin = metin.toLowerCase();
        const bulunan = sarki.title.toLowerCase();

        return bulunan.indexOf(arananMetin) > -1;
    })

    setMusics(filtreliMusic)
  }
  return (
    <SafeAreaView 
      style={styles.container}>
      <SearchBar arama={handleSearch}/>
      <FlatList
        data={musics}
        keyExtractor={item => item.id}
        renderItem={renderSong}
        ItemSeparatorComponent = {
          <View
            style={styles.aralik}
            />}
          />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  aralik: {
    borderWidth: 2,
    borderColor: "lightgrey"
  }

});

export default App;
