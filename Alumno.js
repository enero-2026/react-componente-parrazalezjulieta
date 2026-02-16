import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Alumno(props) {
  // Estado para mostrar/ocultar la matrícula
  const [mostrarMatricula, setMostrarMatricula] = useState(false);

  return (
    <View style={styles.contenedorPadre}>
      <View style={styles.filaPrincipal}>
        {/* Círculo para la imagen (Izquierda) */}
        <View style={styles.circuloImagen}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            {props.nombre.charAt(0)}
          </Text>
        </View>

        {/* Nombre del alumno (Centro) */}
        <View style={styles.contenedorTexto}>
          <Text style={styles.nombre}>{props.nombre}</Text>
        </View>

        {/* Botón de acción (Derecha) */}
        <TouchableOpacity 
          style={styles.boton} 
          onPress={() => setMostrarMatricula(!mostrarMatricula)}
        >
          <Text style={styles.textoBoton}>
            {mostrarMatricula ? 'Ocultar' : 'Ver'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Matrícula que aparece abajo (Extra) */}
      {mostrarMatricula && (
        <View style={styles.infoExtra}>
          <Text style={styles.matricula}>Matrícula: {props.matricula}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPadre: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    padding: 10,
    // Sombra para que parezca tarjeta
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  filaPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circuloImagen: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#7fd9f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorTexto: {
    flex: 1,
    marginLeft: 15,
  },
  nombre: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  boton: {
    backgroundColor: '#654d8b',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoBoton: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  infoExtra: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
  },
  matricula: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});