import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TitleSection from '@/components/TitleSection';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ReclamosScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <TitleSection
                    slug="reclamos"
                />

                <View style={styles.emptyCard}>
                    <Text style={styles.emptyText}>Actualmente no tiene ningun reclamo registrado</Text>

                    <Pressable style={styles.addButton} onPress={() => setVisible(true)}>
                        <IconSymbol name="plus" size={18} color="#FFFFFF" />
                        <Text style={styles.addButtonText}>Agregar reclamo</Text>
                    </Pressable>
                </View>

            </ScrollView>

            <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
                <View style={styles.modalBackdrop}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>IMPORTANTE</Text>
                        <Text style={styles.modalMessage}>
                            ESTIMADO USUARIO, POR ESTE MEDIO SOLO PUEDE REGISTRAR RECLAMACIONES POR FALTA DE ENERGIA
                            ELECTRICA. PARA REGISTRAR RECLAMACIONES POR OTRO MOTIVO, DEBE APROXIMARSE POR LA PLATAFORMA
                            DE ATENCIÓN AL CLIENTE O LLAMAR A LA LÍNEA GRATUITA 176
                        </Text>

                        <View style={styles.modalActions}>
                            <Pressable style={styles.secondaryModalButton}>
                                <Text style={styles.secondaryModalButtonText}>Llamar a 176</Text>
                            </Pressable>

                            <Pressable style={styles.primaryModalButton} onPress={() => setVisible(false)}>
                                <Text style={styles.primaryModalButtonText}>Continuar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    content: { paddingHorizontal: 16, paddingBottom: 24, gap: 16 },
    emptyCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 18,
        shadowColor: '#0A2430',
        shadowOpacity: 0.06,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
        gap: 14,
    },
    emptyText: {
        color: '#17323D',
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '700',
        fontFamily: Fonts.rounded,
    },
    addButton: {
        minHeight: 52,
        borderRadius: 16,
        backgroundColor: '#0B6D88',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    addButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(7, 28, 36, 0.55)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
    },
    modalCard: {
        width: '100%',
        maxWidth: 520,
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        padding: 18,
        gap: 14,
    },
    modalTitle: {
        color: '#0B6D88',
        fontSize: 20,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
        textAlign: 'center',
    },
    modalMessage: {
        color: '#17323D',
        fontSize: 14,
        lineHeight: 22,
        textAlign: 'center',
    },
    modalActions: {
        gap: 10,
    },
    secondaryModalButton: {
        minHeight: 50,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#CFE0E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryModalButtonText: {
        color: '#0B6D88',
        fontSize: 15,
        fontWeight: '700',
    },
    primaryModalButton: {
        minHeight: 50,
        borderRadius: 16,
        backgroundColor: '#0B6D88',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryModalButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },
});
