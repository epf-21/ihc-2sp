import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { sections } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const featureRouteBySlug = {
    'cuentas-pago-qr': '/feature/cuentas-pago-qr',
    'factura-preaviso': '/feature/factura-preaviso',
    reclamos: '/feature/reclamos',
    notificaciones: '/feature/notificaciones',
    ubicacion: '/feature/ubicacion',
    electrolineras: '/feature/electrolineras',
} as const;

type FeatureSlug = keyof typeof featureRouteBySlug;

function hasFeatureRoute(slug: string): slug is FeatureSlug {
    return slug in featureRouteBySlug;
}

export default function HomeScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={[styles.hero, { backgroundColor: palette.tint }]}>

                    <View style={styles.topRow}>
                        <Link href="/modal" asChild>
                            <Pressable style={styles.iconButton}>
                                <IconSymbol name="line.3.horizontal" size={24} color="#FFFFFF" />
                            </Pressable>
                        </Link>
                        <Text style={styles.heroEmail}>correo.electronico@gmail.com</Text>
                        <View style={styles.avatarWrap}>
                            <IconSymbol name="person.crop.circle.fill" size={28} color="#FFFFFF" />
                        </View>
                    </View>

                    <View style={styles.heroCenter}>
                        <Text style={styles.brandMarkText}>elfec</Text>
                        <View style={styles.heroCopyGroup}>
                            <Text style={styles.heroTitle}>Sistema de Servicios al Cliente</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={[styles.sectionTitle, { color: palette.text }]}>Accesos principales</Text>
                </View>

                <View style={styles.grid}>
                    {sections.map((section) => {
                        if (!hasFeatureRoute(section.slug)) {
                            return null;
                        }

                        return (
                            <Link key={section.slug} href={featureRouteBySlug[section.slug]} asChild>
                                <Pressable style={styles.card}>
                                    <View style={styles.cardIcon}>
                                        <IconSymbol name={section.icon} size={28} color={section.accent} />
                                    </View>
                                    <Text style={styles.cardTitle}>{section.title}</Text>
                                    <Text style={styles.cardSubtitle}>{section.subtitle}</Text>
                                </Pressable>
                            </Link>
                        );
                    })}
                </View>
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
    hero: {
        borderRadius: 32,
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 8,
        minHeight: 220,
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
    },
    heroEmail: {
        flex: 1,
        color: 'rgba(255,255,255,0.92)',
        fontSize: 13,
        lineHeight: 18,
        textAlign: 'right',
        marginRight: 6,
    },
    iconButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.14)',
    },
    avatarWrap: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.14)',
    },
    brandMarkText: {
        color: '#FFFFFF',
        fontSize: 54,
        lineHeight: 54,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
        fontStyle: 'italic',
    },
    heroCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 8,
        gap: 14,
    },
    heroCopyGroup: {
        alignItems: 'center',
        gap: 8,
        maxWidth: 300,
    },
    heroTitle: {
        color: '#EAF8FB',
        fontSize: 28,
        lineHeight: 36,
        textAlign: 'center',
        fontWeight: '500',
        letterSpacing: 0.1,
    },
    sectionHeader: {
        gap: 4,
    },
    sectionTitle: {
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    card: {
        backgroundColor: '#FFF',
        width: '48%',
        minHeight: 168,
        borderRadius: 24,
        padding: 16,
        justifyContent: 'space-between',
        shadowColor: '#0A2430',
        shadowOpacity: 0.08,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
    },
    cardIcon: {
        width: 52,
        height: 52,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FBFD',
    },
    cardTitle: {
        color: '#17323D',
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '700',
        fontFamily: Fonts.rounded,
    },
    cardSubtitle: {
        color: '#5D7681',
        fontSize: 13,
        lineHeight: 18,
    },
});
