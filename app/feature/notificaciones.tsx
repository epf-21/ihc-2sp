import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NotificationSection } from '@/components/notification-section';
import TitleSection from '@/components/TitleSection';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function NotificacionesScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];

    const notificationsData = {
        cortes: [
            { id: 1, title: 'Corte programado el 15 de mayo', description: 'Mantenimiento preventivo en tu zona', time: 'Hoy 09:30' },
            { id: 2, title: 'Restauración de servicio', description: 'Tu servicio ha sido restaurado', time: 'Ayer 14:22' },
        ],
        cuentas: [
            { id: 1, title: 'Tu factura está lista', description: 'Puedes descargarla desde tu cuenta', time: 'Hace 2 días' },
            { id: 2, title: 'Recordatorio de pago', description: 'Vence en 5 días', amount: 'Bs. 250.00', time: 'Hace 3 días' },
        ],
        reclamos: [
            { id: 1, title: 'Tu reclamo #001234 fue resuelto', description: 'Se completaron las acciones correctivas', time: 'Hace 1 día' },
            { id: 2, title: 'Tu reclamo #001233 está en proceso', description: 'Nuestro equipo está trabajando en ello', stage: 'Etapa 2 de 3', time: 'Hace 5 días' },
        ],
    };

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <TitleSection
                    slug="notificaciones"
                />

                <View style={styles.sectionContainer}>
                    <NotificationSection
                        title="Cortes e información"
                        icon="exclamationmark.circle.fill"
                    >
                        <View style={styles.notificationList}>
                            {notificationsData.cortes.map((notification) => (
                                <View key={notification.id} style={styles.notificationItem}>
                                    <View style={styles.notificationContent}>
                                        <Text style={styles.notificationItemTitle}>{notification.title}</Text>
                                        <Text style={styles.notificationDescription}>{notification.description}</Text>
                                        <Text style={styles.notificationTime}>{notification.time}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </NotificationSection>
                </View>

                <View style={styles.sectionContainer}>
                    <NotificationSection
                        title="Cuentas"
                        icon="creditcard.fill"
                    >
                        <View style={styles.notificationList}>
                            {notificationsData.cuentas.map((notification) => (
                                <View key={notification.id} style={styles.notificationItem}>
                                    <View style={styles.notificationContent}>
                                        <Text style={styles.notificationItemTitle}>{notification.title}</Text>
                                        <Text style={styles.notificationDescription}>{notification.description}</Text>
                                        {notification.amount && (
                                            <Text style={styles.notificationAmount}>{notification.amount}</Text>
                                        )}
                                        <Text style={styles.notificationTime}>{notification.time}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </NotificationSection>
                </View>

                <View style={styles.sectionContainer}>
                    <NotificationSection
                        title="Reclamos"
                        icon="exclamationmark.circle.fill"
                    >
                        <View style={styles.notificationList}>
                            {notificationsData.reclamos.map((notification) => (
                                <View key={notification.id} style={styles.notificationItem}>
                                    <View style={styles.notificationContent}>
                                        <Text style={styles.notificationItemTitle}>{notification.title}</Text>
                                        <Text style={styles.notificationDescription}>{notification.description}</Text>
                                        {notification.stage && (
                                            <Text style={styles.notificationStage}>{notification.stage}</Text>
                                        )}
                                        <Text style={styles.notificationTime}>{notification.time}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </NotificationSection>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    content: { paddingHorizontal: 16, paddingBottom: 24, gap: 16 },
    sectionContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 18,
        shadowColor: '#0A2430',
        shadowOpacity: 0.06,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
    },
    notificationList: {
        gap: 12,
        marginTop: 4,
    },
    notificationItem: {
        borderLeftWidth: 3,
        borderLeftColor: '#0B6D88',
        paddingLeft: 12,
        paddingVertical: 8,
    },
    notificationContent: {
        gap: 4,
    },
    notificationItemTitle: {
        color: '#17323D',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: Fonts.rounded,
    },
    notificationDescription: {
        color: '#56707B',
        fontSize: 13,
        lineHeight: 18,
    },
    notificationAmount: {
        color: '#0B6D88',
        fontSize: 14,
        fontWeight: '600',
    },
    notificationStage: {
        color: '#0B6D88',
        fontSize: 13,
        fontWeight: '600',
    },
    notificationTime: {
        color: '#99B5BF',
        fontSize: 12,
        lineHeight: 16,
    },
});
