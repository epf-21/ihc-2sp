import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { sections } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HomeScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={[styles.hero, { backgroundColor: palette.tint }]}>
                    <View style={styles.heroGlowTop} />
                    <View style={styles.heroGlowBottom} />

                    <View style={styles.topRow}>
                        <Link href="/modal" asChild>
                            <Pressable style={styles.iconButton}>
                                <IconSymbol name="line.3.horizontal" size={24} color="#FFFFFF" />
                            </Pressable>
                        </Link>
                        <View style={styles.avatarWrap}>
                            <IconSymbol name="person.crop.circle.fill" size={28} color="#FFFFFF" />
                        </View>
                    </View>

                    <View style={styles.brandRow}>
                        <Image
                            source={require('../assets/images/elfec.png')}
                            style={styles.brandImage}
                            resizeMode="contain"
                        />
                        <View style={styles.statusPill}>
                            <Text style={styles.statusPillText}>Sistema de servicios</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={[styles.sectionTitle, { color: palette.text }]}>Accesos principales</Text>
                    <Text style={[styles.sectionCaption, { color: palette.icon }]}>Navegacion visual por tarjetas</Text>
                </View>

                <View style={styles.grid}>
                    {sections.map((section) => (
                        <Link key={section.slug} href={`/feature/${section.slug}`} asChild>
                            <Pressable style={styles.card}>
                                <View style={styles.cardIcon}>
                                    <IconSymbol name={section.icon} size={28} color={section.accent} />
                                </View>
                                <Text style={styles.cardTitle}>{section.title}</Text>
                                <Text style={styles.cardSubtitle}>{section.subtitle}</Text>
                            </Pressable>
                        </Link>
                    ))}
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
        padding: 18,
        minHeight: 220,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        gap: 16,
    },
    heroGlowTop: {
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: 180,
        backgroundColor: 'rgba(255,255,255,0.12)',
        right: -40,
        top: -50,
    },
    heroGlowBottom: {
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: 220,
        backgroundColor: 'rgba(255,255,255,0.08)',
        left: -90,
        bottom: -120,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    brandRow: {
        gap: 10,
        alignItems: 'flex-start',
        marginTop: 6,
    },
    brandImage: {
        width: 120,
        height: 32,
    },
    statusPill: {
        backgroundColor: 'rgba(255,255,255,0.14)',
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    statusPillText: {
        color: '#EAF8FB',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.3,
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
    sectionCaption: {
        fontSize: 13,
        lineHeight: 18,
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
