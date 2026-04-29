import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { IconSymbol } from './ui/icon-symbol.ios';

export default function ButtonHome() {
    return (
        <View style={styles.actionsRow}>
            <Link href="/" asChild>
                <Pressable style={styles.secondaryAction}>
                    <IconSymbol name="arrow.right" size={18} color="#0B6D88" />
                    <Text style={styles.secondaryActionText}>Volver al inicio</Text>
                </Pressable>
            </Link>

            <Link href="/modal" dismissTo asChild>
                <Pressable style={styles.primaryAction}>
                    <Text style={styles.primaryActionText}>Abrir menu</Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    actionsRow: { gap: 12 },
    secondaryAction: { minHeight: 54, borderRadius: 18, borderWidth: 1, borderColor: '#CFE0E6', backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
    secondaryActionText: { color: '#0B6D88', fontSize: 15, fontWeight: '700' },
    primaryAction: { minHeight: 54, borderRadius: 18, backgroundColor: '#0B6D88', alignItems: 'center', justifyContent: 'center' },
    primaryActionText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
})