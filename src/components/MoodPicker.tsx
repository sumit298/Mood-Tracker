import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MoodOptionType } from '../../src/types/types';

// You have to specify type
const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectMood, setSelectMood] = React.useState<MoodOptionType>();
  return (
    <View style={styles.moodList}>
      {moodOptions.map(option => (
        <View>
          <Pressable
            onPress={() => setSelectMood(option)}
            key={option.emoji}
            style={[
              styles.moodItem,
              option.emoji === selectMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text style={styles.moodText}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {selectMood?.emoji === option.emoji && option.description}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 10,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454C73',
    borderColor: '#fff',
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#454C73',
  },
});
