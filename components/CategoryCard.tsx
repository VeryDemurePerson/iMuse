// components/CategoryCard.tsx
import { useRouter } from 'expo-router'; // Import useRouter thay vì Link
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type CategoryCardProps = {
  name: string;
  color: string;
};

const CategoryCard = ({ name, color }: CategoryCardProps) => {
  const router = useRouter(); // Khởi tạo router

  // Hàm xử lý khi người dùng nhấn vào thẻ
  const handlePress = () => {
    // Sử dụng router để điều hướng một cách trực tiếp
    router.push({ pathname: "/category", params: { name: name } });
  };

  return (
    // Không còn bọc bằng <Link> nữa
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={handlePress} // Gọi hàm xử lý khi nhấn
    >
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default CategoryCard;
