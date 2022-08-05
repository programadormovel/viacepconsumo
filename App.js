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
        title="Consumindo ViaCEP API"
        color="#841584"
        accessibilityLabel="Aprenda mais
        sobre consumo de API REST"
      />

      <TextInput
        onChangeText={alterarLogradouro}
        value={logradouro}
        keyboardType="default"
        accessibilityHint="Logradouro"
        hintText={"Logradouro"}
        multiline={true}
      />

      <TextInput
        onChangeText={alterarComplemento}
        value={complemento}
        keyboardType="default"
      />

      <TextInput
        onChangeText={alterarBairro}
        value={bairro}
        keyboardType="default"
      />

      <TextInput
        onChangeText={alterarLocalidade}
        value={localidade}
        keyboardType="default"
      />

      <TextInput
        onChangeText={alterarUf}
        value={uf}
        keyboardType="default"
        maxLength={2}
      />

      <TextInput
        onChangeText={alterarIbge}
        value={ibge}
        keyboardType="numeric"
      />

      <TextInput
        onChangeText={alterarGia}
        value={gia}
        keyboardType="numeric"
      />

      <TextInput
        onChangeText={alterarDDD}
        value={ddd}
        keyboardType="numeric"
      />

      <TextInput
        onChangeText={alterarSiafi}
        value={siafi}
        keyboardType="numeric"
      />

    </View>
    </SafeAreaView>
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
  

})