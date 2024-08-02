import React from 'react';
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

function App(): React.JSX.Element {

  const renderSong = (({item})=><SarkiKarti song={item}/>)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={music_data}
        keyExtractor={item => item.id}
        renderItem={renderSong}
        ItemSeparatorComponent={
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
