import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { getSectionBySlug } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type Location = {
    id: string;
    name: string;
    address: string;
    type: 'oficina' | 'punto_pago' | 'atencion';
    latitude: number;
    longitude: number;
    hours?: string;
};

export default function UbicacionScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const palette = Colors[colorScheme];
    const section = getSectionBySlug('ubicacion');
    const [selectedType, setSelectedType] = useState<'all' | 'oficina' | 'punto_pago' | 'atencion'>('all');

    // Coordenadas aproximadas de La Paz, Bolivia
    const initialRegion = {
        latitude: -16.4897,
        longitude: -68.1093,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    };

    const locations: Location[] = [
        {
            id: '1',
            name: 'Oficina Central ELFEC',
            address: 'Av. Mariscal Santa Cruz, La Paz',
            type: 'oficina',
            latitude: -16.4897,
            longitude: -68.1093,
            hours: 'Lun-Vie: 08:00-18:00',
        },
        {
            id: '2',
            name: 'Punto de Atención El Alto',
            address: 'Calle Principal, El Alto',
            type: 'atencion',
            latitude: -16.3923,
            longitude: -68.1929,
            hours: 'Lun-Sab: 08:00-17:00',
        },
        {
            id: '3',
            name: 'Centro de Pagos - Zona Central',
            address: 'Calle Mercado 468, La Paz',
            type: 'punto_pago',
            latitude: -16.5019,
            longitude: -68.1324,
            hours: 'Lun-Dom: 08:00-20:00',
        },
        {
            id: '4',
            name: 'Oficina de Reclamos',
            address: 'Av. 6 de Agosto, La Paz',
            type: 'oficina',
            latitude: -16.5089,
            longitude: -68.1186,
            hours: 'Lun-Vie: 09:00-17:00',
        },
        {
            id: '5',
            name: 'Centro de Pagos - Sopocachi',
            address: 'Calle 20, Sopocachi',
            type: 'punto_pago',
            latitude: -16.2435,
            longitude: -68.0156,
            hours: 'Lun-Dom: 08:00-20:00',
        },
    ];

    const filteredLocations = selectedType === 'all' ? locations : locations.filter(loc => loc.type === selectedType);

    const getMarkerColor = (type: string) => {
        switch (type) {
            case 'oficina':
                return '#0B6D88';
            case 'punto_pago':
                return '#D64545';
            case 'atencion':
                return '#F59E0B';
            default:
                return '#0B6D88';
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'oficina':
                return 'Oficina';
            case 'punto_pago':
                return 'Punto de Pago';
            case 'atencion':
                return 'Atención';
            default:
                return 'Ubicación';
        }
    };

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
            <View style={[styles.header, { backgroundColor: section?.accent ?? palette.tint }]}>
                <View style={styles.headerTop}>
                    <IconSymbol name={section?.icon ?? 'map.fill'} size={24} color="#FFFFFF" />
                    <Text style={styles.headerTag}>Puntos de servicio</Text>
                </View>
                <Text style={styles.headerTitle}>Servicios de Ubicación</Text>
                <Text style={styles.headerSubtitle}>Encuentra nuestros puntos de atención cercanos</Text>
            </View>

            <MapView
                style={styles.map}
                initialRegion={initialRegion}
                showsUserLocation
            >
                {filteredLocations.map((location) => (
                    <Marker
                        key={location.id}
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        title={location.name}
                        description={location.address}
                        pinColor={getMarkerColor(location.type)}
                    />
                ))}
            </MapView>

            <View style={styles.filterContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
                    <View style={styles.filterButton} onTouchStart={() => setSelectedType('all')}>
                        <Text style={[styles.filterText, selectedType === 'all' && styles.filterTextActive]}>Todos</Text>
                        {selectedType === 'all' && <View style={styles.filterIndicator} />}
                    </View>

                    <View style={styles.filterButton} onTouchStart={() => setSelectedType('oficina')}>
                        <Text style={[styles.filterText, selectedType === 'oficina' && styles.filterTextActive]}>Oficinas</Text>
                        {selectedType === 'oficina' && <View style={styles.filterIndicator} />}
                    </View>

                    <View style={styles.filterButton} onTouchStart={() => setSelectedType('punto_pago')}>
                        <Text style={[styles.filterText, selectedType === 'punto_pago' && styles.filterTextActive]}>Pagos</Text>
                        {selectedType === 'punto_pago' && <View style={styles.filterIndicator} />}
                    </View>

                    <View style={styles.filterButton} onTouchStart={() => setSelectedType('atencion')}>
                        <Text style={[styles.filterText, selectedType === 'atencion' && styles.filterTextActive]}>Atención</Text>
                        {selectedType === 'atencion' && <View style={styles.filterIndicator} />}
                    </View>
                </ScrollView>
            </View>

            <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
                {filteredLocations.map((location) => (
                    <View key={location.id} style={styles.locationCard}>
                        <View style={[styles.locationTypeIcon, { backgroundColor: getMarkerColor(location.type) }]}>
                            <IconSymbol
                                name={location.type === 'oficina' ? 'building.2.fill' : location.type === 'punto_pago' ? 'creditcard.fill' : 'location.fill'}
                                size={18}
                                color="#FFFFFF"
                            />
                        </View>
                        <View style={styles.locationInfo}>
                            <Text style={styles.locationName}>{location.name}</Text>
                            <Text style={styles.locationType}>{getTypeLabel(location.type)}</Text>
                            <Text style={styles.locationAddress}>{location.address}</Text>
                            {location.hours && <Text style={styles.locationHours}>{location.hours}</Text>}
                        </View>
                    </View>
                ))}
                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        gap: 8,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    headerTag: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 28,
        lineHeight: 32,
        fontWeight: '800',
        fontFamily: Fonts.rounded,
    },
    headerSubtitle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 13,
        lineHeight: 18,
    },
    map: {
        height: 280,
    },
    filterContainer: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E8EB',
        paddingVertical: 12,
    },
    filterScroll: {
        paddingHorizontal: 16,
    },
    filterButton: {
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#56707B',
    },
    filterTextActive: {
        color: '#0B6D88',
    },
    filterIndicator: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#0B6D88',
        marginTop: 4,
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    locationCard: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
        backgroundColor: '#F8FAFB',
        borderRadius: 16,
        padding: 12,
    },
    locationTypeIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationInfo: {
        flex: 1,
        gap: 4,
    },
    locationName: {
        color: '#17323D',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: Fonts.rounded,
    },
    locationType: {
        color: '#0B6D88',
        fontSize: 12,
        fontWeight: '600',
    },
    locationAddress: {
        color: '#56707B',
        fontSize: 12,
        lineHeight: 16,
    },
    locationHours: {
        color: '#99B5BF',
        fontSize: 11,
        lineHeight: 14,
        fontStyle: 'italic',
    },
    bottomSpacer: {
        height: 24,
    },
});
