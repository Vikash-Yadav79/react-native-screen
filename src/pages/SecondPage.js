import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from './Icon';

function SecondPage() {
  return (
    <>
      <ScrollView>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar translucent={false} backgroundColor="#06158a" />
          <View style={style.header}>
            <Text style={style.headerTitle}>London</Text>
            <Text style={style.headerTitle2}>England</Text>
            <TouchableOpacity>
              <Text style={style.btn3}>$336</Text>
              <Text style={style.expire}>Expire in:58h 23 min</Text>
            </TouchableOpacity>

            <Image style={style.heart} source={require('../Image/heart.png')} />
          </View>

          <Text style={style.sectionTitle}>Included</Text>
          <Text style={style.include}>for more details press on the icon </Text>
          <Icon />
          <Text style={style.sectionTitle}>Rating & Review</Text>
          <Image
            style={style.Image3}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png',
            }}
          />
          <Text style={style.star}>4.6</Text>
          <Text style={style.star2}>429 review</Text>

          <Text style={style.include}>sorted by recent review</Text>
          <TouchableOpacity style={[style.item, style.big]}>
            <Text style={style.text}>London is Great</Text>
            <Image
              style={style.subtext}
              source={{
                uri: 'https://png.pngitem.com/pimgs/s/138-1382567_clip-art-five-stars-png-google-5-star.png',
              }}
            />

            <Text style={style.subtext2}>John dee</Text>
            <Text style={style.subtext3}>12/08/2022</Text>
            <Text style={style.lorem}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </Text>
          </TouchableOpacity>
          <Text style={style.sectionTitle}>Gallery</Text>
          <Text style={style.include}>sorted by recent icon</Text>
          <TouchableOpacity style={[style.item, style.small]}>
            <Image style={style.text2} source={require('../Image/icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={[style.item, style.hi]}>
            <Image style={style.text2} source={require('../Image/icon.png')} />
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

export default SecondPage;

const style = StyleSheet.create({
  header: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#06158a',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: -39,
  },
  headerTitle2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginHorizontal: 10,
    position: 'absolute',
    textAlign: 'left',
    margin: 50,
    left: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  rmCardImage: {
    width: 200,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  item: {
    marginTop: 20,
    borderRadius: 20,
    margin: 20,
    backgroundColor: '#dde3ed',

    padding: 20,
    height: 150,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'bold',
  },
  subtext: {
    color: '#000000',
    fontSize: 14,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'left',
    width: 100,
    height: 15,
  },
  big: {
    backgroundColor: '#dde3ed',
  },
  small: {
    width: 140,
    padding: 30,
    marginHorizontal: 25,
  },
  hi: {
    width: 140,
    marginTop: -170,
    marginHorizontal: 200,
    padding: 30,
  },
  subtext2: {
    textAlign: 'right',
    marginTop: -50,
  },
  subtext3: {
    textAlign: 'right',
  },
  lorem: {
    marginTop: 18,
  },
  gallary: {
    color: '#000000',
    fontSize: 25,
    padding: 15,
  },

  gallary4: {
    marginTop: 30,
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'red',
    padding: 20,
    height: 100,
    width: 100,
    marginHorizontal: 40,
  },
  include: {
    marginLeft: 20,
    marginTop: -20,
  },
  Image3: {
    width: 12,
    height: 12,

    marginTop: -40,
    marginHorizontal: 330,
  },
  star: {
    marginTop: -18,
    color: '#dbd825',
    textAlign: 'right',
    marginRight: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  star2: {
    color: 'pink',
    textAlign: 'right',
    marginRight: 15,
    fontSize: 15,
  },
  btn3: {
    position: 'absolute',
    marginTop: 26,
    marginLeft: -130,
    color: '#fff',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'blue',
    fontSize: 10,
    fontWeight: 'bold',
  },
  expire: {
    color: 'white',
    left: '75%',
    marginTop: 30,
    fontWeight: 'bold',
  },
  heart: {
    marginTop: -35,
    width: 40,
    height: 40,
  },
  text2: {
    marginTop: 30,
    marginLeft: 30,
  },
});
