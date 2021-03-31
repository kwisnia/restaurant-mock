import { View } from "react-native";
import { Restaurant } from "../APIResponseTypes";


interface IProps {
    restaurants: Restaurant[]
}

const Results = (props: IProps) => {
    const nothingFoundTexts = ['Niczego tu nie znajdę', 'Nie ma czego plądrować', 'Nic tu nie ma']
    const { restaurants } = props;
    return (
        <View>
            
        </View>
    )
}