import { Colors, Fonts } from '@/constants/theme';
import { useState } from 'react';
import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface AddAccountModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (data: { nus: string; cuenta: string; descripcion: string }) => void;
}

export default function AddAccountModal({ visible, onClose, onSubmit }: AddAccountModalProps) {
    const [nus, setNus] = useState('');
    const [cuenta, setCuenta] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = () => {
        if (!nus.trim() || !cuenta.trim()) {
            Alert.alert('Campos requeridos', 'NUS y CUENTA son obligatorios.');
            return;
        }
        onSubmit({ nus, cuenta, descripcion });
        setNus('');
        setCuenta('');
        setDescripcion('');
    };

    const handleCancel = () => {
        setNus('');
        setCuenta('');
        setDescripcion('');
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Agregar Cuenta</Text>
                        <Pressable onPress={handleCancel}>
                            <IconSymbol name="xmark" size={24} color={Colors.light.tabIconSelected} />
                        </Pressable>
                    </View>

                    <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>
                        <View style={styles.field}>
                            <Text style={styles.label}>NUS *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ingresa tu NUS"
                                value={nus}
                                onChangeText={setNus}
                                placeholderTextColor="#99B5BF"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>CUENTA *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ingresa tu número de cuenta"
                                value={cuenta}
                                onChangeText={setCuenta}
                                placeholderTextColor="#99B5BF"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>DESCRIPCIÓN (Opcional)</Text>
                            <TextInput
                                style={[styles.input, styles.textarea]}
                                placeholder="Ej: Cuenta principal, Casa, etc..."
                                value={descripcion}
                                onChangeText={setDescripcion}
                                placeholderTextColor="#99B5BF"
                                multiline
                                numberOfLines={4}
                            />
                        </View>
                    </ScrollView>

                    <View style={styles.actions}>
                        <Pressable style={styles.cancelButton} onPress={handleCancel}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </Pressable>

                        <Pressable style={styles.submitButton} onPress={handleSubmit}>
                            <IconSymbol name="checkmark" size={18} color="#FFFFFF" />
                            <Text style={styles.submitButtonText}>Agregar Cuenta</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
        maxHeight: '85%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#17323D',
        fontFamily: Fonts.rounded,
    },
    form: {
        gap: 16,
        paddingBottom: 16,
    },
    field: {
        gap: 8,
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.light.tabIconSelected,
        fontFamily: Fonts.rounded,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CFE0E6',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 14,
        color: '#17323D',
    },
    textarea: {
        textAlignVertical: 'top',
        paddingVertical: 12,
        minHeight: 100,
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
    },
    cancelButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#CFE0E6',
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: Colors.light.tabIconSelected,
        fontSize: 14,
        fontWeight: '700',
    },
    submitButton: {
        flex: 1,
        backgroundColor: Colors.light.tabIconSelected,
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
});
