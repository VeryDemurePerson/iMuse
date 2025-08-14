// app/(tabs)/index.tsx
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArtistAvatar from '../../components/ArtistAvatar';
import CategoryCard from '../../components/CategoryCard';
import SongCard from '../../components/SongCard';
import { suggestedArtists, suggestedCategories, suggestedSongs } from '../../data/mockData';

// Tạo một component Header chứa tất cả nội dung không nằm trong lưới
const ListHeader = () => (
  <>
    <Text style={styles.header}>Welcome to iMuse 👋</Text>

    {/* Phần Gợi ý cho bạn */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Suggested for you</Text>
      <FlatList
        data={suggestedSongs}
        renderItem={({ item }) => <SongCard track={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>

    {/* Phần Nghệ sĩ gợi ý */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Suggested Artists</Text>
      <FlatList
        data={suggestedArtists}
        renderItem={({ item }) => <ArtistAvatar name={item.name} image={item.image} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>

    {/* Tiêu đề cho phần Thể loại */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Suggested Categories</Text>
    </View>
  </>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Thay thế ScrollView bằng một FlatList duy nhất */}
      <FlatList
        style={styles.container}
        ListHeaderComponent={ListHeader} // Đặt tất cả nội dung phía trên vào Header
        data={suggestedCategories}
        renderItem={({ item }) => <CategoryCard name={item.name} color={item.color} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
