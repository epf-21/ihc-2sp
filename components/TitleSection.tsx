import { StyleSheet, Text, View } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { getSectionBySlug } from '@/constants/elfec';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Pressable } from 'react-native';
import { Link } from 'expo-router';

interface Props {
  slug: string;
}

export default function TitleSection({ slug }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const section = getSectionBySlug(slug);
  const palette = Colors[colorScheme];

  return (
    <View style={[styles.header, { backgroundColor: section?.accent ?? palette.tint }]}>
      <View style={styles.headerTop}>
        <Link href="/modal" asChild>
          <Pressable style={styles.iconButton}>
            <IconSymbol name="line.3.horizontal" size={24} color="#FFFFFF" />
          </Pressable>
        </Link>

        <View style={styles.headerBadge}>
          <IconSymbol name={section?.icon ?? 'doc.text.fill'} size={18} color="#FFFFFF" />
          <Text style={styles.headerBadgeText}>{section?.title}</Text>
        </View>
      </View>

      <View style={styles.headerText}>
        <Text style={styles.headerTitle}>{ section?.subtitle }</Text>
        <Text style={styles.headerSubtitle}>{ section?.description }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderRadius: 28,
    padding: 18,
    minHeight: 160,
    justifyContent: 'space-between',
    gap: 16,
  },
 headerText: {
    gap: 8,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
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
  backButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.14)',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.14)',
  },
});
