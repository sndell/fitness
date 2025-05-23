import Monicon from '@monicon/native';
import { TouchableOpacity } from 'react-native';

export const TabBarPlusButton = () => {
  return (
    <TouchableOpacity className="p-5 bg-white rounded-full">
      <Monicon name="solar:add-circle-bold" size={24} color="#000000" />
    </TouchableOpacity>
  );
};
