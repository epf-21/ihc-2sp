import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CardInfo from '@/components/card-info';
import { getSectionBySlug } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import ButtonHome from '@/components/Button';
import { accounts } from '@/constants/pagos';

export default function FacturaPreaviso() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const section = getSectionBySlug('factura-preaviso');

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={[styles.header, { backgroundColor: section?.accent ?? palette.tint }]}>
                    <Text style={styles.headerTitle}>Factura y Preaviso</Text>
                    <Text style={styles.headerSubtitle}>Resumen de facturación y avisos pendientes</Text>
                </View>

                <View style={styles.list}>
                    {accounts.map((account) => (
                        <CardInfo
                            key={account.nus}
                            cuenta={account.cuenta}
                            nus={account.nus}
                            usuario={account.usuario}
                            direccion={account.direccion}
                            monto={account.monto}
                            estado={account.estado}
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
    header: { borderRadius: 28, padding: 18, minHeight: 140, justifyContent: 'space-between' },
    headerTitle: { color: '#FFFFFF', fontSize: 22, lineHeight: 28, fontWeight: '800', fontFamily: Fonts.rounded },
    headerSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 13, lineHeight: 18 },
    list: { gap: 12 },
});