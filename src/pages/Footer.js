import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
export default function FooterScreen() {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 8,
      }}>
      <TouchableOpacity>
        <Image
          source={require('../Image/home.png')}
          style={{
            width: 40,
            height: 40,
            marginHorizontal: 20,
            marginLeft: 50,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../Image/explore.png')}
          style={{width: 40, height: 40, marginHorizontal: 25}}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://pngimg.com/uploads/heart/small/heart_PNG51349.png',
          }}
          style={{
            width: 35,
            height: 30,
            marginHorizontal: 25,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/setting.png',
          }}
          style={{
            width: 40,
            height: 30,
            marginHorizontal: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
