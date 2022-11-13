import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Icon() {
  return (
    <>
      <View style={style.header}>
        <TouchableOpacity>
          <Image style={style.flight} source={require('../Image/flight.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={style.hotel}>
          <Image style={style.flight} source={require('../Image/bed.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={style.car}>
          <Image style={style.flight} source={require('../Image/car.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={style.tour}>
          <Image style={style.flight} source={require('../Image/flight.png')} />
        </TouchableOpacity>
      </View>
      <View style={style.headerText}>
        <Text>Flight</Text>
        <Text style={style.headPlaceholder1}>Hotel</Text>
        <Text>Car</Text>
        <Text>Tour</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderRadius: 30,

    backgroundColor: 'blue',
    paddingHorizontal: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    marginTop: 20,
    left: '2%',
  },
  flight: {
    width: 35,
    height: 40,
  },
  hotel: {
    borderRadius: 30,

    backgroundColor: 'blue',
    paddingHorizontal: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    margin: 45,
  },
  car: {
    borderRadius: 30,

    backgroundColor: 'blue',
    paddingHorizontal: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    margin: 10,
  },
  tour: {
    borderRadius: 30,

    backgroundColor: 'blue',
    paddingHorizontal: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    margin: 40,
  },
  headerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginLeft: 22,
    marginRight: 45,
  },
  headPlaceholder1: {
    marginRight: 20,
  },
});
