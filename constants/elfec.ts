import type { ComponentProps } from 'react';

import { IconSymbol } from '@/components/ui/icon-symbol';

export type ElfecSection = {
    slug: string;
    title: string;
    subtitle: string;
    icon: ComponentProps<typeof IconSymbol>['name'];
    accent: string;
    description: string;
};

export const sections: ElfecSection[] = [
    {
        slug: 'cuentas-pago-qr',
        title: 'Cuentas / Pago QR',
        subtitle: 'Consulta saldos y paga sin fricción',
        icon: 'creditcard.fill',
        accent: '#0B6D88',
        description: 'Un acceso visual prioritario para cuentas, pagos y acciones frecuentes.',
    },
    {
        slug: 'factura-preaviso',
        title: 'Factura / Preaviso',
        subtitle: 'Revisa tus documentos y avisos',
        icon: 'doc.text.fill',
        accent: '#0B6D88',
        description: 'Se prioriza la lectura del estado de facturación y la recuperación rápida de datos.',
    },
    {
        slug: 'reclamos',
        title: 'Reclamos',
        subtitle: 'Registro y seguimiento de solicitudes',
        icon: 'exclamationmark.circle.fill',
        accent: '#0B6D88',
        description: 'Canal de resolución con jerarquía clara para evitar errores de interpretación.',
    },
    {
        slug: 'notificaciones',
        title: 'Notificaciones',
        subtitle: 'Alertas, recordatorios y novedades',
        icon: 'bell.fill',
        accent: '#0B6D88',
        description: 'Mensajes visibles y consistentes para reforzar la lectura de eventos importantes.',
    },
    {
        slug: 'ubicacion',
        title: 'Servicios de ubicación',
        subtitle: 'Puntos de atención y mapas',
        icon: 'map.fill',
        accent: '#0B6D88',
        description: 'Esta sección se deja como referencia para la siguiente iteración del rediseño.',
    },
    {
        slug: 'electrolineras',
        title: 'Electrolineras',
        subtitle: 'Canales de contacto rápido',
        icon: 'bolt.fill',
        accent: '#0B6D88',
        description: 'Un acceso para resolver dudas por canal directo con soporte visible.',
    },
];

export const menuItems = [
    sections[0],
    sections[1],
    sections[2],
    sections[3],
    sections[4],
    {
        slug: 'contacto',
        title: 'Contacto',
        subtitle: 'Atencion y soporte',
        icon: 'phone.fill' as const,
        accent: '#0B6D88',
        description: 'Canal institucional de contacto, util para completar la estructura de navegacion.',
    },
    sections[5],
];

export const perceptualPrinciples = [
    { label: 'Jerarquia visual', value: 'Primero lo esencial' },
    { label: 'Contraste y color', value: 'Lectura rapida' },
    { label: 'Tipografia', value: 'Titulos claros' },
    { label: 'Consistencia', value: 'Mismo lenguaje visual' },
];

export function getSectionBySlug(slug: string) {
    return sections.find((section) => section.slug === slug) ?? null;
}
