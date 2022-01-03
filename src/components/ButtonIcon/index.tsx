import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';
import DiscordImg from '../../assets/discordIcon.png';
import { styles } from './styles';

type Props = RectButtonProperties & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}