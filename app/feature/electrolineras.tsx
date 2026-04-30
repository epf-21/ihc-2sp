import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonHome from '@/components/Button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { getSectionBySlug } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import TitleSection from '@/components/TitleSection';

type ElectrolineraOption = {
    id: string;
    title: string;
    icon: string;
    description: string;
};

export default function ElectrolinerasScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const section = getSectionBySlug('electrolineras');

    const options: ElectrolineraOption[] = [
        {
            id: 'cargar-saldo',
            title: 'Cargar saldo',
            icon: 'creditcard.fill',
            description: 'Carga saldo electrónico a tu cuenta',
        },
        {
            id: 'historico-compras',
            title: 'Histórico de compras',
            icon: 'doc.text.fill',
            description: 'Consulta tus transacciones anteriores',
        },
        {
            id: 'mapa-electrolineras',
            title: 'Mapa de electrolineras',
            icon: 'map.fill',
            description: 'Encuentra puntos de venta cercanos',
        },
        {
            id: 'estadisticas',
            title: 'Información estadística',
            icon: 'bar.chart',
            description: 'Consulta datos de consumo y uso',
        },
    ];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <TitleSection
                    sectionTitle="Electrolineras"
                    title="Servicios rápidos"
                    subtitle="Canales de contacto y servicios rápidos"
                    slug="electrolineras"
                />

                <View style={styles.optionsContainer}>
                    {options.map((option) => (
                        <Pressable key={option.id} style={styles.optionCard}>
                            <View style={styles.optionIconContainer}>
                                <IconSymbol name={option.icon as any} size={28} color="#0B6D88" />
                            </View>
                            <View style={styles.optionContent}>
                                <Text style={styles.optionTitle}>{option.title}</Text>
                            </View>
                            <IconSymbol name="chevron.right" size={20} color="#56707B" />
                        </Pressable>
                    ))}
                </View>

                <View style={styles.qrSection}>
                    <View style={[styles.qrContainer, { backgroundColor: section?.accent ?? palette.tint }]}>
                        <View style={styles.qrPlaceholder}>
                            <IconSymbol name="qr.code" size={120} color="#FFFFFF" />
                        </View>
                    </View>
                    <Text style={styles.qrLabel}>Código QR para escanear</Text>
                    <Text style={styles.qrDescription}>
                        Escanea este código para acceder directamente a nuestros servicios
                    </Text>
                </View>

                <ButtonHome />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    content: { paddingHorizontal: 16, paddingBottom: 24, gap: 24 },
    optionsContainer: {
        gap: 12,
    },
    optionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#0A2430',
        shadowOpacity: 0.06,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
        gap: 12,
    },
    optionIconContainer: {
        width: 56,
        height: 56,
        borderRadius: 16,
        backgroundColor: '#E8F3F6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionContent: {
        flex: 1,
        gap: 4,
    },
    optionTitle: {
        color: '#17323D',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: Fonts.rounded,
    },
    qrSection: {
        alignItems: 'center',
        gap: 12,
    },
    qrContainer: {
        width: 180,
        height: 180,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0A2430',
        shadowOpacity: 0.15,
        shadowRadius: 24,
        shadowOffset: { width: 0, height: 12 },
        elevation: 8,
    },
    qrPlaceholder: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrLabel: {
        color: '#17323D',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: Fonts.rounded,
        marginTop: 8,
    },
    qrDescription: {
        color: '#56707B',
        fontSize: 13,
        lineHeight: 18,
        textAlign: 'center',
    },
});
