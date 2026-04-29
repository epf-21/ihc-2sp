import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function LocationScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const quickData = [
        { label: 'Estado', value: 'En pausa' },
        { label: 'Mapa', value: 'Próxima iteración' },
        { label: 'Puntos de atención', value: 'Próxima iteración' },
    ];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={[styles.header, { backgroundColor: palette.tint }]}>
                    <View style={styles.headerTop}>
                        <View style={styles.headerBadge}>
                            <IconSymbol name="map.fill" size={18} color="#FFFFFF" />
                            <Text style={styles.headerBadgeText}>Mapas y ubicacion</Text>
                        </View>
                        <View style={styles.headerBadgeSoft}>
                            <Text style={styles.headerBadgeSoftText}>En pausa</Text>
                        </View>
                    </View>

                    <Text style={styles.headerTitle}>Seccion reservada para mapas</Text>
                    <Text style={styles.headerSubtitle}>
                        Por ahora se mantiene como punto de referencia visual para la siguiente iteracion.
                    </Text>
                </View>

                <View style={styles.mapFrame}>
                    <View style={styles.mapGrid} />
                    <View style={styles.mapPin}>
                        <IconSymbol name="map.fill" size={22} color="#0B6D88" />
                    </View>
                    <Text style={styles.mapTitle}>Ubicacion, puntos de atencion y rutas</Text>
                    <Text style={styles.mapText}>
                        La interfaz deja esta experiencia sin funcionalidad activa mientras se trabaja el resto
                        del redisenio.
                    </Text>
                </View>

                <View style={styles.summaryCard}>
                    {quickData.map((item) => (
                        <View key={item.label} style={styles.summaryItem}>
                            <Text style={styles.summaryLabel}>{item.label}</Text>
                            <Text style={styles.summaryText}>{item.value}</Text>
                        </View>
                    ))}
                </View>

                <Link href="/feature/ubicacion" asChild>
                    <Pressable style={styles.primaryAction}>
                        <Text style={styles.primaryActionText}>Ver tarjeta detallada</Text>
                        <IconSymbol name="arrow.right" size={18} color="#FFFFFF" />
                    </Pressable>
                </Link>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        gap: 16,
    },
    header: {
        borderRadius: 28,
        padding: 18,
        minHeight: 220,
        justifyContent: 'space-between',
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    },
    headerBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'rgba(255,255,255,0.14)',
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    headerBadgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    headerBadgeSoft: {
        backgroundColor: 'rgba(255,255,255,0.10)',
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    headerBadgeSoftText: {
        color: '#E6F4F8',
        fontSize: 12,
        fontWeight: '700',
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 30,
        lineHeight: 34,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
    },
    headerSubtitle: {
        color: 'rgba(255,255,255,0.88)',
        fontSize: 15,
        lineHeight: 22,
        maxWidth: 330,
    },
    mapFrame: {
        minHeight: 280,
        borderRadius: 28,
        backgroundColor: '#FFFFFF',
        padding: 18,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        shadowColor: '#0A2430',
        shadowOpacity: 0.08,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
    },
    mapGrid: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#F3F8FA',
        borderRadius: 28,
        opacity: 0.95,
        borderWidth: 1,
        borderColor: '#DDE9ED',
        borderStyle: 'dashed',
    },
    mapPin: {
        width: 64,
        height: 64,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9F2F8',
        marginBottom: 12,
    },
    mapTitle: {
        color: '#17323D',
        fontSize: 20,
        lineHeight: 26,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
    },
    mapText: {
        color: '#5D7681',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 6,
    },
    summaryCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#0A2430',
        shadowOpacity: 0.05,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
    },
    summaryLabel: {
        color: '#0B6D88',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
    },
    summaryText: {
        color: '#54717D',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 4,
    },
    summaryItem: {
        marginBottom: 10,
    },
    primaryAction: {
        backgroundColor: '#0B6D88',
        borderRadius: 18,
        minHeight: 56,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    primaryActionText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },
});