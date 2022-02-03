import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
} from 'react-native-cool-speedometer';
import Geolocation from '@react-native-community/geolocation';
import {Button} from 'react-native-elements';
import IdleTimerManager from 'react-native-idle-timer';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

var audio = new Sound('moto.wav', Sound.MAIN_BUNDLE, (error) => {
  audio.play((success) => {
  });
  audio.setVolume(0.1);
  audio.setSpeed(1);
  audio.setNumberOfLoops(-1);
});

const Velox = props => {
  // states used in component
  const [velocity, setVelocity] = useState(0);

  // Keep screen waked up
  IdleTimerManager.setIdleTimerDisabled(true);

  // watch location and get infos
  Geolocation.watchPosition(
    info => {
      setVelocity(parseInt( (info.coords.speed * 3.7) + 0));
      console.log(velocity);
    },
    error => {
      console.log(error);
    },
    {
      maximumAge: 1000,
      timeout: 1000,
      enableHighAccuracy: true,
      distanceFilter: 0
    },
  );

  /**
   * Set setVolume when velocity changes
   * @return {void}
   */
  useEffect(() => {
    audio.setVolume(
      getVolume(velocity)
    );
    audio.setSpeed(
      getAudioSpeed(velocity)
    );
  }, [velocity]);

  /**
   * Manual increase velocity
   * @param  {} increment
   * @return {void}}
   */
  function increaseVel(increment) {
    setVelocity(velocity + increment);
    audio.setVolume(
      getVolume(velocity)
    );
    audio.setSpeed(
      getAudioSpeed(velocity)
    );    
  }

  /**
   * Set volume of audio
   * @param  {} speed=0
   * @return volume
   */
   function getVolume(speed = 0) {
    var volume = 0;
    if (speed > 60) {
      speed = 60;
    }
    if (speed < 6) {
      speed = 6;
    }
    volume = speed / 60;
    return volume * 2;
  }

  /**
   * Set speed of audio
   * @param  {} speed=0
   * @return volume
   */
   function getAudioSpeed(speed = 0) {
    var audioSpeed = 0;
    if (speed > 60) {
      speed = 60;
    }
    if (speed < 6) {
      speed = 10;
    }
    audioSpeed = speed / 10;
    return audioSpeed;
  }

  return (
    <>
      <Speedometer
        value={velocity}
        max={130}
        angle={220}
        fontFamily="squada-one"
        width={300}
      >
        <Background angle={200} />
        <Arc />
        <Needle />
        <Progress />
        <Marks />
      </Speedometer>
      <View>
        <Text style={styles.displayTop}>{velocity}</Text>
        <Text style={styles.displayBottom}>Km/h</Text>
      </View>
      <View>
        <Button
          title={'Aumentar'}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginBottom: 10,
            marginTop: 30,
          }}
          onPress={() => {
            increaseVel(5);
          }}
        />
        <Button
          title={'Reduzir'}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
          }}
          onPress={() => {
            increaseVel(-5);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  displayTop: {
    color: '#fff',
    fontFamily: 'Seven Segment',
    fontSize: 130,
  },
  displayBottom: {
    fontFamily: 'Seven Segment',
    color: '#fff',
    fontSize: 24,
    textAlign: 'right',
  },
});

export default Velox;
