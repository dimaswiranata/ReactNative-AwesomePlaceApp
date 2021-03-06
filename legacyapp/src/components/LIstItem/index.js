import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListItem({ placeImage, placeName, onItemPressed }) {
  return (
    <TouchableOpacity onPress={onItemPressed}>
      <View style={styles.listItem}>
        <Image resizeMode='cover' style={styles.placeImage} source={placeImage}/>
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
})

ListItem.propTypes = {  
  placeName: PropTypes.string,
  onItemPressed : PropTypes.func,
  placeImage: PropTypes.object
}

ListItem.defaultProps = {
  placeName: 'Munich'
}
