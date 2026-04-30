import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function CargarSaldo() {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Colors[colorScheme];
  const router = useRouter();
  const [form, setForm] = useState({
    monto: '',
    apellido: '',
    nombre: '',
    tipo: '',
    numero: '',
    complemento: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.monto) newErrors.monto = 'Monto obligatorio';
    if (!form.apellido) newErrors.apellido = 'Campo obligatorio';
    if (!form.nombre) newErrors.nombre = 'Campo obligatorio';
    if (!form.tipo) newErrors.tipo = 'Campo obligatorio';
    if (!form.numero) newErrors.numero = 'Campo obligatorio';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log('Formulario válido', form);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <IconSymbol name="arrow.left" size={26} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Electrolineras / Cargar saldo</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>

          <View style={styles.cardHeader}>
            <IconSymbol name="car.fill" size={22} color="#FFFFFF" />

            <View>
              <Text style={styles.saldoText}>0.00 Bs.</Text>
              <Text style={styles.saldoSub}>de saldo.</Text>
            </View>
          </View>

          <View style={styles.field}>
            <TextInput
              placeholder="Monto en Bs."
              style={styles.input}
              value={form.monto}
              onChangeText={(text) => setForm({ ...form, monto: text })}
              keyboardType="numeric"
            />
            {errors.monto && <Text style={styles.error}>{errors.monto}</Text>}
          </View>

          <Text style={styles.sectionLabel}>DATOS FACTURACIÓN</Text>

          <View style={styles.row}>
            <View style={styles.inputHalf}>
              <TextInput
                placeholder="Apellido(s) / Razón"
                style={styles.input}
                value={form.apellido}
                onChangeText={(text) => setForm({ ...form, apellido: text })}
              />
              {errors.apellido && <Text style={styles.error}>{errors.apellido}</Text>}
            </View>

            <View style={styles.inputHalf}>
              <TextInput
                placeholder="Nombre(s)"
                style={styles.input}
                value={form.nombre}
                onChangeText={(text) => setForm({ ...form, nombre: text })}
              />
              {errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.inputHalf}>
              <TextInput
                placeholder="Tipo"
                style={styles.input}
                value={form.tipo}
                onChangeText={(text) => setForm({ ...form, tipo: text })}
              />
              {errors.tipo && <Text style={styles.error}>{errors.tipo}</Text>}
            </View>

            <View style={styles.inputHalf}>
              <TextInput
                placeholder="Número"
                style={styles.input}
                value={form.numero}
                onChangeText={(text) => setForm({ ...form, numero: text })}
                keyboardType="numeric"
              />
              {errors.numero && <Text style={styles.error}>{errors.numero}</Text>}
            </View>
          </View>

          <View style={styles.field}>
            <TextInput
              placeholder="Complemento (opcional)"
              style={styles.input}
              value={form.complemento}
              onChangeText={(text) => setForm({ ...form, complemento: text })}
            />
          </View>

          <Pressable style={styles.qrButton} onPress={handleSubmit}>
            <IconSymbol name="qr.code" size={18} color="#FFFFFF" />
            <Text style={styles.qrText}>CARGAR POR QR</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: {
    backgroundColor: '#0B6D88',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 15
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#0A2430',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
    marginBottom: 12,
  },

  cardHeader: {
    backgroundColor: '#0B6D88',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  saldoText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },

  saldoSub: {
    color: '#FFFFFF',
    fontSize: 12,
  },

  field: {
    marginBottom: 12,
  },

  label: {
    color: '#56707B',
    fontSize: 13,
  },

  sectionLabel: {
    marginTop: 12,
    marginBottom: 8,
    fontSize: 12,
    fontWeight: '700',
    color: '#0B6D88',
  },

  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  inputHalf: {
    flex: 1,
  },

  inputLabel: {
    fontSize: 13,
    color: '#17323D',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E6EA',
    paddingBottom: 6,
  },

  error: {
    fontSize: 11,
    color: '#D64545',
    marginTop: 2,
  },

  qrButton: {
    marginTop: 16,
    backgroundColor: '#0B6D88',
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  qrText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E6EA',
    paddingVertical: 8,
    fontSize: 15,
    color: '#17323D',
  },
});
