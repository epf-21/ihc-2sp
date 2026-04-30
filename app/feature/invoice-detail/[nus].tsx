import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { accounts } from '@/constants/pagos';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface InvoiceItem {
    month: string;
    aviso: boolean;
    xml: boolean;
    factura: boolean;
    facturaStatus?: 'available' | 'pending' | 'unavailable';
}

const hardcodedInvoices: InvoiceItem[] = [
    { month: '2026/04', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2026/03', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2026/02', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2026/01', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2025/12', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2025/11', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2025/10', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2025/09', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2025/08', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2025/07', aviso: true, xml: true, factura: true, facturaStatus: 'available' },
    { month: '2025/06', aviso: true, xml: true, factura: false, facturaStatus: 'pending' },
];

export default function InvoiceDetailScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const router = useRouter();
    const { nus } = useLocalSearchParams<{ nus: string }>();

    const account = accounts.find((acc) => acc.nus === nus) || accounts[0];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <IconSymbol name="arrow.left" size={26} color="#FFFFFF" />
                </Pressable>
                <Text style={styles.headerTitle}>Consulta Facturas Preavisos</Text>
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

                <View>
                    {hardcodedInvoices.map((invoice) => (
                        <View key={invoice.month} style={styles.invoiceRow}>
                            <Text style={styles.monthLabel}>{invoice.month}</Text>

                            <View style={styles.buttonsRow}>
                                {invoice.aviso && (
                                    <Pressable style={[styles.button, styles.buttonPrimary]}>
                                        <IconSymbol name="doc.text.fill" size={16} color="#FFFFFF" />
                                        <Text style={styles.buttonText}>AVISO</Text>
                                    </Pressable>
                                )}

                                {invoice.xml && (
                                    <Pressable style={[styles.button, styles.buttonPrimary]}>
                                        <IconSymbol name="line.3.horizontal" size={14} color="#FFFFFF" />
                                        <Text style={styles.buttonText}>XML</Text>
                                    </Pressable>
                                )}

                                {invoice.factura && (
                                    <Pressable
                                        style={[
                                            styles.button,
                                            invoice.facturaStatus === 'pending' ? styles.buttonDanger : styles.buttonPrimary,
                                        ]}
                                    >
                                        <IconSymbol name="doc.text.fill" size={16} color="#FFFFFF" />
                                        <Text style={styles.buttonText}>FACTURA</Text>
                                    </Pressable>
                                )}
                            </View>
                        </View>
                    ))}
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
        marginBottom: 12,
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
    invoiceRow: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        shadowColor: '#0A2430',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
    },
    monthLabel: {
        fontSize: 14,
        fontWeight: '800',
        color: '#17323D',
        width: 70,
    },
    buttonsRow: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 8,
        gap: 6,
    },
    buttonPrimary: {
        backgroundColor: '#0B6D88',
    },
    buttonDanger: {
        backgroundColor: '#D64545',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '700',
    },
});
