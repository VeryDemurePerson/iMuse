// app/_layout.tsx
import { Stack } from 'expo-router';
import { AudioProvider } from '../context/AudioContext';
import { PlaylistProvider } from '../context/PlaylistContext'; // Import provider mới

export default function RootLayout() {
  return (
    // Bọc AudioProvider bằng PlaylistProvider
    <PlaylistProvider>
      <AudioProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AudioProvider>
    </PlaylistProvider>
  );
}
