import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { menuItems } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const featureRouteBySlug = {
    'cuentas-pago-qr': '/feature/cuentas-pago-qr',
    'factura-preaviso': '/feature/factura-preaviso',
    reclamos: '/feature/reclamos',
    notificaciones: '/feature/notificaciones',
    ubicacion: '/feature/ubicacion',
    electrolineas: '/feature/electrolineas',
} as const;

type FeatureSlug = keyof typeof featureRouteBySlug;

function hasFeatureRoute(slug: string): slug is FeatureSlug {
    return slug in featureRouteBySlug;
}

export default function ModalScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={[styles.sheet, { backgroundColor: palette.tint }]}>
                    <View style={styles.sheetGlowTop} />
                    <View style={styles.sheetGlowBottom} />

                    <View style={styles.sheetTop}>
                        <View style={styles.brandMark}>
                            <Text style={styles.brandMarkText}>elfec</Text>
                            <Text style={styles.brandMarkCaption}>Menu principal</Text>
                        </View>

                        <Link href="/" dismissTo asChild>
                            <Pressable style={styles.closeButton}>
                                <IconSymbol name="xmark" size={18} color="#FFFFFF" />
                            </Pressable>
                        </Link>
                    </View>

                    <View style={styles.profileRow}>
                        <View style={styles.profileAvatar}>
                            <IconSymbol name="person.crop.circle.fill" size={42} color="#FFFFFF" />
                        </View>
                        <View style={styles.profileCopy}>
                            <Text style={styles.profileLabel}>Correo</Text>
                            <Text style={styles.profileName}>efrainperalta.f@gmail.com</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.menuPanel}>
                    {menuItems.map((item) => {
                        if (!hasFeatureRoute(item.slug)) {
                            return null;
                        }

                        return (
                            <Link key={item.slug} href={featureRouteBySlug[item.slug]} asChild>
                                <Pressable style={styles.menuItem}>
                                    <View style={[styles.menuIcon, { backgroundColor: `${item.accent}18` }]}>
                                        <IconSymbol name={item.icon} size={22} color={item.accent} />
                                    </View>
                                    <View style={styles.menuCopy}>
                                        <Text style={styles.menuTitle}>{item.title}</Text>
                                        <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                                    </View>
                                    <IconSymbol name="arrow.right" size={18} color="#8AA0AA" />
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
        padding: 16,
        gap: 16,
    },
    sheet: {
        minHeight: 240,
        borderRadius: 30,
        padding: 18,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    sheetGlowTop: {
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: 220,
        backgroundColor: 'rgba(255,255,255,0.08)',
        top: -80,
        right: -70,
    },
    sheetGlowBottom: {
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: 180,
        backgroundColor: 'rgba(255,255,255,0.06)',
        bottom: -90,
        left: -70,
    },
    sheetTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    brandMark: {
        gap: 4,
    },
    brandMarkText: {
        color: '#FFFFFF',
        fontSize: 40,
        lineHeight: 40,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
        fontStyle: 'italic',
    },
    brandMarkCaption: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.4,
        textTransform: 'uppercase',
    },
    closeButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.14)',
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        backgroundColor: 'rgba(255,255,255,0.12)',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    profileAvatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.14)',
    },
    profileCopy: {
        flex: 1,
        gap: 2,
    },
    profileLabel: {
        color: 'rgba(255,255,255,0.82)',
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 0.4,
        textTransform: 'uppercase',
    },
    profileName: {
        color: '#FFFFFF',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
    },
    profileRole: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 13,
        lineHeight: 18,
    },
    menuPanel: {
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        paddingVertical: 6,
        shadowColor: '#0A2430',
        shadowOpacity: 0.06,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5EDF0',
    },
    menuIcon: {
        width: 42,
        height: 42,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuCopy: {
        flex: 1,
        gap: 2,
    },
    menuTitle: {
        color: '#17323D',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '700',
        fontFamily: Fonts.rounded,
    },
    menuSubtitle: {
        color: '#607884',
        fontSize: 13,
        lineHeight: 18,
    },
    menuFooter: {
        padding: 16,
        gap: 10,
    },
    menuFooterTitle: {
        color: '#0B6D88',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
    },
    principlesWrap: {
        gap: 8,
    },
    principleRow: {
        backgroundColor: '#F3F8FA',
        borderRadius: 18,
        padding: 12,
    },
    principleRowLabel: {
        color: '#17323D',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700',
    },
    principleRowValue: {
        color: '#607884',
        fontSize: 13,
        lineHeight: 18,
        marginTop: 2,
    },
});