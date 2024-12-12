import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

interface HorizontalScrollProps {
  title: string;
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  title,
  children,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContainer: {
    display: "flex",
    paddingHorizontal: 8,
    gap: 8,
  },
});

export default HorizontalScroll;
