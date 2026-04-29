import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { ComponentProps } from 'react';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type NotificationSectionProps = {
    title: string;
    icon: ComponentProps<typeof IconSymbol>['name'];
    children: React.ReactNode;
};

export function NotificationSection({ title, icon, children }: NotificationSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.header}
                onPress={() => setIsOpen(!isOpen)}
                activeOpacity={0.7}
            >
                <View style={styles.titleRow}>
                    <IconSymbol name={icon} size={20} color="#D64545" />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <IconSymbol
                    name="chevron.down"
                    size={20}
                    color={palette.icon}
                    style={{
                        transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
                    }}
                />
            </TouchableOpacity>

            {isOpen && (
                <View style={styles.content}>
                    {children}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    title: {
        color: '#17323D',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: Fonts.rounded,
    },
    content: {
        borderTopWidth: 1,
        borderTopColor: '#E0E8EB',
        paddingTop: 12,
    },
});
