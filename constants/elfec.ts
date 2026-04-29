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
        subtitle: 'Consulta saldos y paga sin friccion',
        icon: 'creditcard.fill',
        accent: '#0B6D88',
        description: 'Un acceso visual prioritario para cuentas, pagos y acciones frecuentes.',
    },
    {
        slug: 'factura-preaviso',
        title: 'Factura / Preaviso',
        subtitle: 'Revisa tus documentos y avisos',
        icon: 'doc.text.fill',
        accent: '#145D6D',
        description: 'Se prioriza la lectura del estado de facturacion y la recuperacion rapida de datos.',
    },
    {
        slug: 'reclamos',
        title: 'Reclamos',
        subtitle: 'Registro y seguimiento de solicitudes',
        icon: 'exclamationmark.circle.fill',
        accent: '#1D7F96',
        description: 'Canal de resolucion con jerarquia clara para evitar errores de interpretacion.',
    },
    {
        slug: 'notificaciones',
        title: 'Notificaciones',
        subtitle: 'Alertas, recordatorios y novedades',
        icon: 'bell.fill',
        accent: '#0F8AB0',
        description: 'Mensajes visibles y consistentes para reforzar la lectura de eventos importantes.',
    },
    {
        slug: 'ubicacion',
        title: 'Servicios de ubicacion',
        subtitle: 'Puntos de atencion y mapas',
        icon: 'map.fill',
        accent: '#11647E',
        description: 'Esta seccion se deja como referencia para la siguiente iteracion del redisenio.',
    },
    {
        slug: 'electrolineas',
        title: 'Electrolineas',
        subtitle: 'Canales de contacto rapido',
        icon: 'bolt.fill',
        accent: '#0A728D',
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