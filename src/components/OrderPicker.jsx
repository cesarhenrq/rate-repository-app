import { Picker } from "@react-native-picker/picker";

const OrderPicker = ({ order, setOrder }) => {
  return (
    <Picker
      selectedValue={order}
      onValueChange={(itemValue) => setOrder(itemValue)}
    >
      <Picker.Item label='Latest repositories' value='CREATED_AT, DESC' />
      <Picker.Item
        label='Highest rated repositories'
        value='RATING_AVERAGE, DESC'
      />
      <Picker.Item
        label='Lowest rated repositories'
        value='RATING_AVERAGE, ASC'
      />
    </Picker>
  );
};

export default OrderPicker;
