import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button,
        ActivityIndicator, SafeAreaView, 
        ScrollView, StyleSheet, Alert} 
        from 'react-native';

export default function App(){
  // Criar os estados
  const [cep, alterarCep] = useState("00000-000");
  const [logradouro, alterarLogradouro] = useState("");
  const [complemento, alterarComplemento] = useState("");
  const [bairro, alterarBairro] = useState("");
  const [localidade, alterarLocalidade] = useState("");
  const [uf, alterarUf] = useState("");
  const [ibge, alterarIbge] = useState("");
  const [gia, alterarGia] = useState("");
  const [ddd, alterarDDD] = useState("");
  const [siafi, alterarSiafi] = useState("");

  const [isLoading, setLoading] = useState(false);

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}> 
    <View>
      <Text>Entre com o CEP para pesquisar: 00000-000</Text>
      <TextInput 
        style = {styles.texto}
        onChangeText={alterarCep}
        value = { cep }
        keyboardType = "numeric"
        maxLength={9}
        onFocus={()=>alterarCep("")}
        />
      
      <Button 
        style = {styles.botao}
        title="Consumindo ViaCEP API"
        color="#841584"
        accessibilityLabel="Aprenda mais
        sobre consumo de API REST"
      />

      <TextInput
        style = {styles.inputLarge}
        onChangeText={alterarLogradouro}
        value={logradouro}
        keyboardType="default"
        accessibilityHint="Logradouro"
        hintText={"Logradouro"}
        multiline={true}
        numberOfLines={3}
      />

      <TextInput
        style = {styles.input}
        onChangeText={alterarComplemento}
        value={complemento}
        keyboardType="default"
      />

      <TextInput
      style = {styles.input}
        onChangeText={alterarBairro}
        value={bairro}
        keyboardType="default"
      />

      <TextInput
      style = {styles.input}
        onChangeText={alterarLocalidade}
        value={localidade}
        keyboardType="default"
      />

      <TextInput
      style = {styles.input}
        onChangeText={alterarUf}
        value={uf}
        keyboardType="default"
        maxLength={2}
      />

      <TextInput
      style = {styles.input}
        onChangeText={alterarIbge}
        value={ibge}
        keyboardType="numeric"
      />

      <TextInput
      style = {styles.input}
        onChangeText={alterarGia}
        value={gia}
        keyboardType="numeric"
      />

      <TextInput
      style = {styles.input}
        onChangeText={alterarDDD}
        value={ddd}
        keyboardType="numeric"
      />

      <TextInput
      style = {styles.input}
        onChangeText={alterarSiafi}
        value={siafi}
        keyboardType="numeric"
      />

    </View>
    </SafeAreaView>
    </ScrollView>
  )
 
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    margin: 32,
    marginTop: 48,
    justifyContent: "center",
    alignItems:"center"
  },
  texto: {
    alignSelf: 'center', 
    textAlign: 'center',
  }, 
  input: {
    height: 40,
    margin: 16,
    borderWidth: 1,
    padding: 8,
    minWidth: 150,
    maxWidth: 256,
    borderRadius: 32,
  },
  inputLarge: {
    height: 40,
    minHeight: 80,
    margin: 16,
    borderWidth: 1,
    padding: 8,
    width: "100%",
    maxWidth: 256,
    minWidth: 150,
    borderRadius: 32,
  },
  botao: {
    height: 40,
    margin: 16,
    borderWidth: 1,
    padding: 4,
    width: 50,
    borderRadius: 32,
  },
})