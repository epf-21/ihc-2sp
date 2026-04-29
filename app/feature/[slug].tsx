import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { getSectionBySlug, sections } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import ButtonHome from '@/components/Button';

export default function FeatureScreen() {
    const { slug } = useLocalSearchParams<{ slug?: string }>();
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const feature = typeof slug === 'string' ? getSectionBySlug(slug) : null;
    const section = feature ?? sections[0];

    const sampleData: Record<string, { label: string; value: string }[]> = {
        notificaciones: [
            { label: 'No leídas', value: '2' },
            { label: 'Recordatorios', value: '1 pendiente' },
            { label: 'Última alerta', value: 'Hoy 09:30' },
        ],
        ubicacion: [
            { label: 'Mapa', value: 'En preparación' },
            { label: 'Puntos de atención', value: 'Próxima iteración' },
            { label: 'Rutas', value: 'Próxima iteración' },
        ],
        electrolineas: [
            { label: 'Canal principal', value: 'Electrolíneas' },
            { label: 'Horario', value: 'Lun-Vie 08:00-18:00' },
            { label: 'Atención', value: 'Disponible' },
        ],
    };

    const currentData = sampleData[section.slug] ?? [
        { label: 'Estado', value: 'Disponible' },
        { label: 'Actualización', value: 'Sin cambios' },
    ];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={[styles.hero, { backgroundColor: section.accent }]}>
                    <View style={styles.heroTop}>
                        <View style={styles.heroIcon}>
                            <IconSymbol name={section.icon} size={24} color="#FFFFFF" />
                        </View>
                        <Text style={styles.heroTag}>Tarjeta de navegacion</Text>
                    </View>

                    <Text style={styles.heroTitle}>{section.title}</Text>
                    <Text style={styles.heroSubtitle}>{section.subtitle}</Text>
                </View>

                <View style={styles.bodyCard}>
                    {currentData.map((item, index) => (
                        <View key={`${item.label}-${index}`} style={styles.dataItem}>
                            <Text style={styles.bodyLabel}>{item.label}</Text>
                            <Text style={styles.bodyText}>{item.value}</Text>
                        </View>
                    ))}
                </View>

                <ButtonHome />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    content: { paddingHorizontal: 16, paddingBottom: 24, gap: 16 },
    hero: { borderRadius: 30, padding: 18, minHeight: 200, justifyContent: 'space-between' },
    heroTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    heroIcon: { width: 48, height: 48, borderRadius: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.16)' },
    heroTag: { color: '#FFFFFF', fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.8 },
    heroTitle: { color: '#FFFFFF', fontSize: 31, lineHeight: 35, fontWeight: '800', fontFamily: Fonts.rounded, marginTop: 24 },
    heroSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 15, lineHeight: 22, marginTop: 6 },
    bodyCard: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 18, shadowColor: '#0A2430', shadowOpacity: 0.06, shadowRadius: 14, shadowOffset: { width: 0, height: 8 }, elevation: 3 },
    bodyLabel: { color: '#0B6D88', fontSize: 15, lineHeight: 20, fontWeight: '800', fontFamily: Fonts.rounded },
    bodyText: { color: '#56707B', fontSize: 14, lineHeight: 21, marginTop: 6 },
    dataItem: { marginBottom: 10 },
});
