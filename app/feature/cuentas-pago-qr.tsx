import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CardInfo from '@/components/card-info';
import TitleSection from '@/components/TitleSection';
import { accounts } from '@/constants/pagos';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function CuentasPagoQR() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <TitleSection
                    sectionTitle="Cuentas y Pago QR"
                    title="Mis cuentas"
                    subtitle="Accesos rápidos a tus cuentas y estado de deuda"
                    slug="cuentas-pago-qr"
                />

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
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    content: { paddingHorizontal: 16, paddingBottom: 24, gap: 16 },
    list: { gap: 12 },
});
