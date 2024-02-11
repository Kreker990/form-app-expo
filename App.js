import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  const [typeConnect, setTypeConnect] = useState(true)
  const [value, setValue] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TextInput value={value} onChangeText={setValue} style={styles.input} />
        <Button title='local' onPress={() => {
          setTypeConnect(false)
        }} />
        <Button title='netlify' onPress={() => setTypeConnect(true)} />
      </View>
      <WebView source={{
        uri: typeConnect ? 'https://65c091d63c6c59012ac65926--glittery-brigadeiros-17f594.netlify.app/'
          : value
      }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    marginTop: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'whitesmoke',
    width: 200,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8
  }
});
