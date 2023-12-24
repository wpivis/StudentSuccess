import { Text } from "react-native";
import { crimson} from "../../assets/style";


export function SubHeader(props) {
  return (

    <Text style={{ fontWeight: "bold", fontSize: 20, color: crimson, paddingVertical: 12, paddingHorizontal: 10 }}>{props.children}</Text>
  )
}