import { StyleSheet, Text, View } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { getSectionBySlug } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface Props {
  sectionTitle: string;
  title: string;
  subtitle: string;
  slug?: string;
}

export default function TitleSection({ sectionTitle, title, subtitle, slug }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const section = getSectionBySlug(slug ?? '');
  const palette = Colors[colorScheme];

  return (
    <View style={[styles.header, { backgroundColor: section?.accent ?? palette.tint }]}>
      <View style={styles.headerTop}>
        <View style={styles.headerBadge}>
          <IconSymbol name={section?.icon ?? 'doc.text.fill'} size={18} color="#FFFFFF" />
          <Text style={styles.headerBadgeText}>{ sectionTitle }</Text>
        </View>
      </View>

      <Text style={styles.headerTitle}>{ title }</Text>
      <Text style={styles.headerSubtitle}>{ subtitle }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { paddingHorizontal: 16, paddingBottom: 24, gap: 16 },
  header: { borderRadius: 28, padding: 18, minHeight: 160, justifyContent: 'space-between' },
  headerTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerBadgeText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
  headerTitle: { color: '#FFFFFF', fontSize: 22, lineHeight: 28, fontWeight: '800', fontFamily: Fonts.rounded },
  headerSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 13, lineHeight: 18 },
  list: { gap: 12 },
});
