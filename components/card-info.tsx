import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Fonts } from '@/constants/theme';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface CardInfoProps {
    cuenta: string;
    nus: string;
    usuario: string;
    direccion: string;
    monto: string;
    estado: string;
    onPress?: () => void;
}

export default function CardInfo({ cuenta, nus, usuario, direccion, monto, estado, onPress }: CardInfoProps) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
            <View style={styles.rowWithIcon}>
                <View style={styles.iconWrap}>
                    <IconSymbol name="creditcard.fill" size={18} color={Colors.light.tabIconSelected} />
                </View>
                <View style={styles.rowText}>
                    <Text style={styles.cardLabel}>CUENTA</Text>
                    <Text style={styles.cardValue}>{cuenta}</Text>
                </View>
            </View>

            <View style={styles.rowWithIcon}>
                <View style={styles.iconWrapLight}>
                    <IconSymbol name="doc.text.fill" size={18} color={Colors.light.tabIconSelected} />
                </View>
                <View style={styles.rowText}>
                    <Text style={styles.cardLabel}>NUS</Text>
                    <Text style={styles.cardValue}>{nus}</Text>
                </View>
            </View>

            <View style={styles.rowWithIcon}>
                <View style={styles.iconWrapLight}>
                    <IconSymbol name="person.crop.circle.fill" size={18} color={Colors.light.tabIconSelected} />
                </View>
                <View style={styles.rowText}>
                    <Text style={styles.cardLabel}>USUARIO</Text>
                    <Text style={styles.cardValue}>{usuario}</Text>
                </View>
            </View>

            <View style={styles.rowWithIcon}>
                <View style={styles.iconWrapLight}>
                    <IconSymbol name="map.fill" size={18} color={Colors.light.tabIconSelected} />
                </View>
                <View style={styles.rowText}>
                    <Text style={styles.cardLabel}>DIRECCIÓN</Text>
                    <Text style={styles.cardValue}>{direccion}</Text>
                </View>
            </View>

            <View style={styles.cardFooter}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.amountWrap}>
                        <IconSymbol name="dollarsign.circle" size={20} color={Colors.light.tabIconSelected} />
                    </View>
                    <View>
                        <Text style={styles.cardLabel}>MONTO DE LA DEUDA</Text>
                        <Text style={styles.debtValue}>{monto}</Text>
                    </View>
                </View>

                <View style={styles.statusPillWrap}>
                    <View style={[styles.statusPill, estado === 'Pendiente' ? styles.statusPending : styles.statusOk]}>
                        <IconSymbol name={estado === 'Pendiente' ? 'exclamationmark.circle.fill' : 'arrow.right'} size={12 as any} color="#FFFFFF" />
                        <Text style={styles.statusPillText}>{estado}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
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
    cardPressed: {
        opacity: 0.8,
    },
    cardRow: { marginBottom: 8 },
    rowWithIcon: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    iconWrap: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EAF8FB', marginRight: 12 },
    iconWrapLight: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EAF8FB', marginRight: 12 },
    rowText: { flex: 1 },
    cardLabel: { color: '#0B6D88', fontSize: 12, fontWeight: '700', fontFamily: Fonts.rounded },
    cardValue: { color: '#17323D', fontSize: 15, fontWeight: '700', marginTop: 2 },
    cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
    debtValue: { color: '#D9534F', fontSize: 16, fontWeight: '800', marginTop: 4 },
    statusPillWrap: { alignItems: 'flex-end' },
    amountWrap: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EAF8FB', marginRight: 12 },
    statusPill: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
    statusPillText: { color: '#FFFFFF', marginLeft: 8, fontWeight: '800' },
    statusPending: { backgroundColor: '#D9534F' },
    statusOk: { backgroundColor: '#0B6D88' }
})