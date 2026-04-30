import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { accounts } from '@/constants/pagos';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AccountDetailScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const router = useRouter();
    const { nus } = useLocalSearchParams<{ nus: string }>();

    const account = accounts.find((acc) => acc.nus === nus) || accounts[0];
    const [selectedAmount, setSelectedAmount] = useState('0');

    const consumptionData = [
        { month: '2026/04', value: 24, max: 24 },
        { month: '2026/03', value: 23, max: 24 },
        { month: '2026/02', value: 7, max: 24 },
        { month: '2026/01', value: 8, max: 24 },
        { month: '2025/12', value: 3, max: 24 },
        { month: '2025/11', value: 2, max: 24 },
        { month: '2025/10', value: 2, max: 24 },
        { month: '2025/09', value: 3, max: 24 },
    ];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <IconSymbol name="arrow.left" size={26} color="#FFFFFF" />
                </Pressable>
                <Text style={styles.headerTitle}>Información de Cuenta</Text>
                <View style={{ width: 26 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.card}>
                    <View style={styles.infoRow}>
                        <IconSymbol name="creditcard.fill" size={24} color={Colors.light.tabIconSelected} />
                        <Text style={styles.infoValue}>{account.cuenta}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>NUS</Text>
                        <View>
                            <Text style={styles.infoValue}>{account.nus}</Text>
                            <Text style={styles.infoSubtext}>(villa por venir)</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <IconSymbol name="person.crop.circle.fill" size={24} color={Colors.light.tabIconSelected} />
                        <Text style={styles.infoValue}>{account.usuario}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <IconSymbol name="map.fill" size={24} color={Colors.light.tabIconSelected} />
                        <Text style={styles.infoValue}>{account.direccion}</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.cardLabel}>Estado</Text>
                        <Text style={styles.estadoValue}>NORMAL</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.mesHeader}>
                        <Text style={styles.mesTitle}>Abril 2026</Text>
                        <Text style={styles.mesAmount}>24,00 Bs</Text>
                    </View>

                    <View style={styles.mesDetails}>
                        <View>
                            <Text style={styles.detailLabel}>Fecha vencimiento:</Text>
                            <Text style={styles.detailValue}>25/5/2026</Text>
                        </View>
                        <Pressable style={styles.checkbox} />
                    </View>

                    <View style={styles.mesDetails}>
                        <Text style={styles.detailLabel}>Nº comprobante:</Text>
                        <Text style={styles.detailValue}>8663489</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.rowBetween}>
                        <View>
                            <Text style={styles.cardLabel}>Monto seleccionado</Text>
                            <Text style={styles.montoValue}>{selectedAmount} Bs</Text>
                        </View>
                        <Pressable style={styles.qrButton}>
                            <IconSymbol name="qr.code" size={24} color="#FFFFFF" />
                            <Text style={styles.qrButtonText}>GENERAR QR</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.cardLabel}>Deuda total</Text>
                        <Text style={styles.deudaValue}>24,00 Bs</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Evolución del consumo</Text>
                    <View style={styles.consumoContainer}>
                        {consumptionData.map((item) => (
                            <View key={item.month} style={styles.consumoRow}>
                                <Text style={styles.consumoMonth}>{item.month}</Text>
                                <View style={styles.barContainer}>
                                    <View
                                        style={[
                                            styles.barFilled,
                                            { width: `${(item.value / item.max) * 100}%` },
                                        ]}
                                    />
                                </View>
                                <Text style={styles.consumoValue}>{item.value}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    header: {
        backgroundColor: '#0B6D88',
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center',
        flex: 1,
    },
    content: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        gap: 12,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#0A2430',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 14,
    },
    infoLabel: {
        fontSize: 12,
        fontWeight: '700',
        color: '#0B6D88',
        fontFamily: Fonts.rounded,
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '700',
        color: '#17323D',
    },
    infoSubtext: {
        fontSize: 12,
        color: '#56707B',
        marginTop: 2,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#17323D',
    },
    estadoValue: {
        fontSize: 16,
        fontWeight: '800',
        color: '#0B6D88',
    },
    mesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    mesTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#17323D',
    },
    mesAmount: {
        fontSize: 16,
        fontWeight: '800',
        color: '#17323D',
    },
    mesDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    detailLabel: {
        fontSize: 12,
        color: '#56707B',
    },
    detailValue: {
        fontSize: 13,
        fontWeight: '700',
        color: '#17323D',
        marginTop: 2,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#CFE0E6',
        borderRadius: 4,
    },
    qrButton: {
        backgroundColor: '#0B6D88',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    qrButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    montoValue: {
        fontSize: 16,
        fontWeight: '800',
        color: '#17323D',
        marginTop: 4,
    },
    deudaValue: {
        fontSize: 16,
        fontWeight: '800',
        color: '#D9534F',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#17323D',
        marginBottom: 12,
    },
    consumoContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        gap: 12,
    },
    consumoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    consumoMonth: {
        width: 60,
        fontSize: 12,
        fontWeight: '700',
        color: '#17323D',
    },
    barContainer: {
        flex: 1,
        height: 8,
        backgroundColor: '#E0E8EB',
        borderRadius: 4,
        overflow: 'hidden',
    },
    barFilled: {
        height: '100%',
        backgroundColor: '#0B6D88',
        borderRadius: 4,
    },
    consumoValue: {
        width: 30,
        fontSize: 12,
        fontWeight: '700',
        color: '#17323D',
        textAlign: 'right',
    },
});
