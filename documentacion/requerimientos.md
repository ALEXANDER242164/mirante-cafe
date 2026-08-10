# Requerimientos — Mirante Café

Las reglas de negocio referenciadas (RN1, RN2, ...) están en [reglasDeNegocio.md](reglasDeNegocio.md).

## Job 1 — Ubicarme en la página en un vistazo

> **Cuando** entro a la página principal por primera vez,
> **quiero** que la información esté organizada en un orden lógico y predecible,
> **para poder** entender rápido qué es el lugar, dónde queda, si está abierto y qué opinan otros clientes, sin tener que buscar.

**Reglas de negocio aplicables:** RN10, RN11, RN12, RN13, RN14

### Criterios de aceptación — Job 1

- **Dado** que el usuario entra a la página principal,
- **cuando** esta termina de cargar,
- **entonces** las secciones deben aparecer, de arriba hacia abajo, en este orden:
  1. Nombre del lugar y frase de concepto (Job 2).
  2. Mapa de ubicación (RN11) y cuadro de horario/estado (Job 4), mostrados al mismo nivel (RN12).
  3. Comentarios de clientes, en un carrusel infinito (RN14), cerca del footer (RN13).

> **Nota:** el lugar exacto de las imágenes de productos (Job 3) dentro de este orden todavía no está definido; queda pendiente hasta que se decida.

## Job 2 — Identificar el concepto del local

> **Cuando** me encuentre explorando la página principal,
> **quiero** identificar qué tipo de lugar es y qué ofrece,
> **para poder** saber si me interesa ir.

**Reglas de negocio aplicables:** RN8, RN9, RN10

### Criterios de aceptación — Job 2

- **Dado** que el usuario entra a la página principal,
- **cuando** la página termina de cargar,
- **entonces** se deben mostrar el nombre del lugar (RN8) y la frase de concepto (RN9),
  ambos visibles sin hacer scroll (RN10).

## Job 3 — Ver imágenes de los productos

> **Cuando** me encuentre en la página principal,
> **quiero** ver imágenes de los productos que actualmente ofrece el local,
> **para poder** hacerme una idea de lo que hay y sentir ganas de probarlo.

**Reglas de negocio aplicables:** RN5, RN6, RN7

### Criterios de aceptación — Job 3

- **Dado** que el local proporcionó imágenes de sus productos que cumplen RN5 y RN6,
- **cuando** el usuario entra a la página principal y esta termina de cargar,
- **entonces** se deben renderizar exactamente 7 imágenes de productos (RN7).

## Job 4 — Saber si el establecimiento está abierto o cerrado

> **Cuando** estoy revisando la página en mi celular y me encuentro caminando,
> **quiero** ver algo que me indique si el establecimiento está abierto o cerrado,
> **para poder** decidir si ir o no al lugar.

**Reglas de negocio aplicables:** RN1, RN2, RN3, RN4

### Criterios de aceptación — Job 4

#### Escenario 1 — El establecimiento está abierto

- **Dado** que el establecimiento está dentro de su horario de atención (RN3),
- **cuando** el usuario entra a la página,
- **entonces** debe existir un elemento visual con el color establecido en RN1,
  con la palabra "ABIERTO", y apegándose a RN4.

#### Escenario 2 — El establecimiento está cerrado

- **Dado** que el establecimiento está fuera del horario de atención (RN3),
- **cuando** el usuario entra a la página,
- **entonces** debe existir un elemento visual con el color establecido en RN2,
  con la palabra "CERRADO", y apegándose a RN4.
