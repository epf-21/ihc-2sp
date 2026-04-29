import { StyleSheet, View, Text } from 'react-native';
import { Fonts } from '@/constants/theme';

interface CardInfoProps {
    cuenta: string;
    nus: string;
    usuario: string;
    direccion: string;
    monto: string;
    estado: string;
}

export default function CardInfo({ cuenta, nus, usuario, direccion, monto, estado }: CardInfoProps) {
    return (
        <View style={styles.card}>
            <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>CUENTA</Text>
                <Text style={styles.cardValue}>{cuenta}</Text>
            </View>

            <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>NUS</Text>
                <Text style={styles.cardValue}>{nus}</Text>
            </View>

            <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>USUARIO</Text>
                <Text style={styles.cardValue}>{usuario}</Text>
            </View>

            <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>DIRECCIÓN</Text>
                <Text style={styles.cardValue}>{direccion}</Text>
            </View>

            <View style={styles.cardFooter}>
                <View>
                    <Text style={styles.cardLabel}>MONTO DE LA DEUDA</Text>
                    <Text style={styles.debtValue}>{monto}</Text>
                </View>

                <View style={styles.statusPillWrap}>
                    <Text
                        style={[
                            styles.statusPill,
                            estado === 'Pendiente' ? styles.statusPending : styles.statusOk,
                        ]}
                    >
                        {estado}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 14,
        shadowColor: '#0A2430',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
    },
    cardRow: { marginBottom: 8 },
    cardLabel: { color: '#0B6D88', fontSize: 12, fontWeight: '700', fontFamily: Fonts.rounded },
    cardValue: { color: '#17323D', fontSize: 15, fontWeight: '700', marginTop: 2 },
    cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
    debtValue: { color: '#D9534F', fontSize: 16, fontWeight: '800', marginTop: 4 },
    statusPillWrap: { alignItems: 'flex-end' },
    statusPill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, color: '#FFFFFF', fontWeight: '800' },
    statusPending: { backgroundColor: '#D9534F' },
    statusOk: { backgroundColor: '#0B6D88' }
})