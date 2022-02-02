# EletricBikeSound
App para simular som de motor em moto eletrica de acordo com a velocidade do GPS  
  
App to simulate motor sound in eletric bikes, according to GPS speed

# Build Instructions
npx react-native start  
npx react-native run-android (or run-ios)  

Screenshot
  
![alt text](https://raw.githubusercontent.com/amurbanos/EletricBikeSound/main/screen.png)

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

cd android && ./gradlew assembleDebug
