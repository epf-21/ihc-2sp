import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CardInfo from '@/components/card-info';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import ButtonHome from '@/components/Button';
import { accounts } from '@/constants/pagos';
import TitleSection from '@/components/TitleSection';

export default function FacturaPreaviso() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <TitleSection
                    slug="factura-preaviso"
                />

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
    list: { gap: 12 },
});
