import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { getSectionBySlug } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import CardInfo from '@/components/card-info';
import { accounts } from '@/constants/pagos';
import ButtonHome from '@/components/Button';

export default function CuentasPagoQR() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const section = getSectionBySlug('cuentas-pago-qr');


    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={[styles.header, { backgroundColor: section?.accent ?? palette.tint }]}>
                    <View style={styles.headerTop}>
                        <View style={styles.headerBadge}>
                            <IconSymbol name={section?.icon ?? 'creditcard.fill'} size={18} color="#FFFFFF" />
                            <Text style={styles.headerBadgeText}>Cuentas y Pago QR</Text>
                        </View>
                    </View>

                    <Text style={styles.headerTitle}>Mis cuentas</Text>
                    <Text style={styles.headerSubtitle}>Accesos rápidos a tus cuentas y estado de deuda</Text>
                </View>

                <View style={styles.list}>
                    {accounts.map((acct) => (
                        <CardInfo
                            key={acct.nus}
                            cuenta={acct.cuenta}
                            nus={acct.nus}
                            usuario={acct.usuario}
                            direccion={acct.direccion}
                            monto={acct.monto}
                            estado={acct.estado}
                        />
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
    header: { borderRadius: 28, padding: 18, minHeight: 160, justifyContent: 'space-between' },
    headerTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    headerBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'rgba(255,255,255,0.14)',
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    headerBadgeText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
    headerTitle: { color: '#FFFFFF', fontSize: 22, lineHeight: 28, fontWeight: '800', fontFamily: Fonts.rounded },
    headerSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 13, lineHeight: 18 },
    list: { gap: 12 },
});
