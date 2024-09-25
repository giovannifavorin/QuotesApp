import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      autorFrase: '',
      imagemSorteada: null,
      modalVisible: false,
    };

    this.sorteiaTexto = this.sorteiaTexto.bind(this);

    this.citacoes = [
      {
        texto: 'O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta.',
        autor: 'Winston Churchill',
        imagem: require('./assets/WinstonChurchill.png')
      },
      {
        texto: 'A única maneira de fazer um ótimo trabalho é amar o que você faz.',
        autor: 'Steve Jobs',
        imagem: require('./assets/SteveJobs.png')
      },
      {
        texto: 'Não importa o quão devagar você vá, desde que você não pare.',
        autor: 'Confúcio',
        imagem: require('./assets/Confucio.png')
      },
      {
        texto: 'A vida é 10% o que acontece comigo e 90% como eu reajo a isso.',
        autor: 'Charles Swindoll',
        imagem: require('./assets/CharlesSwindoll.png')
      },
    ];
  }

  sorteiaTexto() {
    let numeroAleatorio = Math.floor(Math.random() * this.citacoes.length);
    const citacaoEscolhida = this.citacoes[numeroAleatorio];

    this.setState({
      textoFrase: citacaoEscolhida.texto,
      autorFrase: citacaoEscolhida.autor,
      imagemSorteada: citacaoEscolhida.imagem,
      modalVisible: true,
    });
  }

  fecharModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View style={styles.container}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.fecharModal();
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              
              {this.state.imagemSorteada && (
                <Image source={this.state.imagemSorteada} style={styles.imagem} />
              )}

              <Text style={styles.textoFrase}>{`"${this.state.textoFrase}"`}</Text>
              <Text style={styles.autorFrase}>- {this.state.autorFrase}</Text>
              
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => this.fecharModal()}
              >
                <Text style={styles.btnTexto}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.botao} onPress={this.sorteiaTexto}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Se inspirar</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4EDE0',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: '#EDE5C6',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textoFrase: {
    fontSize: 18,
    color: '#8B5E3C',
    marginBottom: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  autorFrase: {
    fontSize: 16,
    color: '#8B5E3C',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButton: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9A066',
    borderRadius: 10,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#A3684F',
    borderRadius: 25,
    backgroundColor: '#D9A066',
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4EDE0',
  }
});
