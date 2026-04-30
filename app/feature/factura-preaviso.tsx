import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AddAccountModal from '@/components/AddAccountModal';
import CardInfo from '@/components/card-info';
import TitleSection from '@/components/TitleSection';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { accounts } from '@/constants/pagos';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function FacturaPreaviso() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();

    const handleAddAccount = (data: { nus: string; cuenta: string; descripcion: string }) => {
        console.log('Cuenta agregada:', data);
        setModalVisible(false);
    };

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
                            onPress={() => router.push(`/feature/invoice-detail/${account.nus}`)}
                        />
                    ))}
                </View>

                <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <IconSymbol name="plus" size={20} color="#FFFFFF" />
                    <Text style={styles.addButtonText}>Agregar Cuenta</Text>
                </Pressable>
            </ScrollView>

            <AddAccountModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={handleAddAccount}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    content: { paddingHorizontal: 16, paddingBottom: 24, gap: 16 },
    list: { gap: 12 },
    addButton: {
        backgroundColor: '#0B6D88',
        borderRadius: 12,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 8,
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },
});
