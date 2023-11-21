
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import MainViewModel from '../viewModels/mainViewModel';
import { observer } from 'mobx-react';

const mainViewModel = new MainViewModel();

const MainView = () => {
  return (
    <View>
      <Text>{mainViewModel.testString}</Text>
      <Button title="Press me" onPress={() => mainViewModel.handleButtonPress()} />
    </View>
  );
};

export default observer(MainView);
