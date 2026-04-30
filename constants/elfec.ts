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
        description: 'Revisa tu saldo, gestiona tus cuentas y realiza pagos de forma rápida mediante QR.',
    },
    {
        slug: 'factura-preaviso',
        title: 'Factura / Preaviso',
        subtitle: 'Revisa tus documentos y avisos',
        icon: 'doc.text.fill',
        accent: '#0B6D88',
        description: 'Consulta tus facturas y preavisos, revisa montos y fechas importantes en un solo lugar.',
    },
    {
        slug: 'reclamos',
        title: 'Reclamos',
        subtitle: 'Registro y seguimiento de solicitudes',
        icon: 'exclamationmark.circle.fill',
        accent: '#0B6D88',
        description: 'Registra reclamos fácilmente y haz seguimiento al estado de tus solicitudes.',
    },
    {
        slug: 'notificaciones',
        title: 'Notificaciones',
        subtitle: 'Alertas, recordatorios y novedades',
        icon: 'bell.fill',
        accent: '#0B6D88',
        description: 'Recibe alertas sobre vencimientos, cortes programados y novedades del servicio.',
    },
    {
        slug: 'ubicacion',
        title: 'Servicios de ubicación',
        subtitle: 'Puntos de atención y mapas',
        icon: 'map.fill',
        accent: '#0B6D88',
        description: 'Encuentra oficinas, puntos de pago y centros de atención cercanos a tu ubicación.',
    },
    {
        slug: 'electrolineras',
        title: 'Electrolineras',
        subtitle: 'Canales de contacto rápido',
        icon: 'bolt.fill',
        accent: '#0B6D88',
        description: 'Gestiona tu saldo, revisa el historial de compras, consulta electrolineras cercanas y accede a información de uso.',
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
