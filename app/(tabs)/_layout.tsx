import { Tabs } from 'expo-router';
import {  StyleSheet, useColorScheme } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Icons } from '@/components/Icons';
import Theme, { sizes } from '@/constants/Colors';

type Tab = {
  name: string;
  icon: string;
  title: string;
};

const tabs: Tab[] = [
  { name: "chats", icon: "message", title: "Chats" },
  { name: "calls", icon: "video", title: "Calls" },
];
export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
      <Tabs
        screenOptions={
          {
            tabBarActiveTintColor: Theme[colorScheme ?? "light"].background,
            headerShown: false,
            tabBarStyle: {
             
            },
          }
        }>
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused, size }) => (
                <View
                  style={[
                    styles.Tabcontainer,
                    {
                      backgroundColor: focused
                        ? Theme[colorScheme ?? "light"].tint
                        : Theme[colorScheme ?? "light"].background,
                      shadowColor: Theme[colorScheme ?? "light"].text,
                    },
                  ]}
                >
                  <Icons
                    name={tab.icon}
                    color={
                      focused
                        ? Theme[colorScheme ?? "light"].background
                        : Theme[colorScheme ?? "light"].text
                    }
                    size={size}
                  />
                  
                </View>
              ),
              tabBarLabel: ({ focused }) => (
                <Text
                  style={[
                    styles.tabLabel,
                    {
                      color: focused
                        ? Theme[colorScheme ?? "light"].tint
                        : Theme[colorScheme ?? "light"].text,
                    },
                  ]}
                >
                  {tab.title}
                </Text>
              ),
            }}
          />
        ))}

      </Tabs>
  );
}

const styles = StyleSheet.create({
  Tabcontainer: {
    width: sizes.width * 0.12,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
