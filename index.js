import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Linking } from 'react-native';

function App() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNumberChange = (newNumber) => {
    setNumber(newNumber);
  };

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  const sendWhatsAppMessage = () => {
    if (number.startsWith('55') && number.length === 13) {
      const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
      Linking.openURL(url);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o número de telefone"
        onChangeText={handleNumberChange}
        value={number}
      />
      <TextInput
        placeholder="Digite a mensagem"
        onChangeText={handleMessageChange}
        value={message}
        multiline
      />
      <Button title="Enviar" onPress={sendWhatsAppMessage} />
    </View>
  );
}

export default App;