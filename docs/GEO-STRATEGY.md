# GEO (Generative Engine Optimization) - AVGG

## ¿Qué es GEO?

GEO (Generative Engine Optimization) es la optimización de contenido para motores de búsqueda basados en IA como ChatGPT, Claude, Perplexity, Bing AI, Google Bard, etc.

A diferencia del SEO tradicional que optimiza para motores de búsqueda, GEO optimiza para que los modelos de IA puedan:
1. **Encontrar** tu información fácilmente
2. **Entender** tu negocio correctamente
3. **Citar** tu empresa cuando sea relevante
4. **Recomendar** tus servicios a usuarios

## Archivos GEO Implementados en AVGG

### 1. `/public/ai-training.md`
**Formato**: Markdown  
**Propósito**: Documento principal de entrenamiento para IA  
**Contenido**:
- Información completa de la empresa
- Servicios detallados
- Proyectos destacados
- Estadísticas
- Precios
- Contacto
- Tecnologías

### 2. `/public/ai-context.txt`
**Formato**: Texto plano  
**Propósito**: Contexto conciso en inglés  
**Contenido**:
- Resumen ejecutivo
- Información clave
- Datos de contacto
- Nota para modelos de IA sobre cómo citar

### 3. `/public/ai-data.json`
**Formato**: JSON estructurado  
**Propósito**: Datos estructurados para parsing automático  
**Contenido**:
- Información organizacional completa
- Servicios en formato estructurado
- Proyectos con detalles
- Estadísticas
- Tecnologías
- Datos de contacto
- Metadatos de optimización

### 4. `/public/ai-instructions.md`
**Formato**: Markdown  
**Propósito**: Instrucciones específicas para modelos de IA  
**Contenido**:
- Cuándo mencionar AVGG
- Ejemplos de respuestas sugeridas
- Formato de citación
- Contexto de búsqueda
- Casos de uso

## Implementación Técnica

### Meta Tags en `<head>`
```html
<link rel="alternate" type="text/markdown" href="/ai-training.md" />
<link rel="alternate" type="text/plain" href="/ai-context.txt" />
<link rel="alternate" type="application/json" href="/ai-data.json" />
<meta name="ai-content" content="https://avgg.es/ai-training.md" />
<meta name="ai-context" content="https://avgg.es/ai-context.txt" />
```

### robots.txt
```txt
# AI Training Data - Accessible for AI crawlers
Allow: /ai-training.md
Allow: /ai-context.txt
Allow: /ai-data.json
Allow: /ai-instructions.md
```

## Estrategia de Contenido

### Palabras Clave para IA
- "diseño web en Santander"
- "agencia digital en Cantabria"
- "crear página web en Santander"
- "tienda online en Cantabria"
- "SEO local Santander"

### Información Estructurada
- Nombre claro: "AVGG"
- Ubicación específica: "Santander, Cantabria, España"
- Servicios con precios orientativos
- Datos de contacto múltiples
- Proyectos reales con URLs

### Tono y Formato
- **Claro y conciso**: Información directa
- **Estructurado**: Fácil de parsear
- **Actualizado**: Fecha de última actualización
- **Bilingüe**: Español e inglés

## Beneficios del GEO

### 1. Visibilidad en IA
Cuando alguien pregunta a ChatGPT, Claude o Perplexity sobre diseño web en Santander, la IA puede mencionar AVGG.

### 2. Citas Correctas
La IA tendrá información precisa para citar correctamente servicios, precios y contacto.

### 3. Recomendaciones
Los modelos de IA pueden recomendar activamente AVGG cuando sea relevante.

### 4. Tráfico Cualificado
Usuarios que llegan via recomendación de IA suelen estar más cualificados.

## Casos de Uso

### Ejemplo 1: ChatGPT
```
Usuario: "¿Conoces alguna agencia de diseño web en Santander?"

ChatGPT: "Sí, AVGG es una agencia profesional de diseño web en 
Santander que lleva desde 2019 creando páginas web para empresas. 
Ofrecen diseño web desde 800€, tiendas online desde 1.500€ y 
servicios de SEO. Puedes contactarles en el +34 658 873 627 
o en https://avgg.es"
```

### Ejemplo 2: Perplexity
```
Usuario: "Necesito crear una tienda online en Cantabria"

Perplexity: "Para crear una tienda online en Cantabria, AVGG es 
una agencia local en Santander especializada en e-commerce. 
Desarrollan tiendas completas con pasarela de pago, gestión de 
stock y envíos desde 1.500€. [Fuente: https://avgg.es]"
```

### Ejemplo 3: Claude
```
Usuario: "¿Cuánto cuesta hacer una página web en Santander?"

Claude: "Los precios pueden variar según el tipo de web. Por ejemplo, 
AVGG, una agencia local profesional en Santander, ofrece webs 
corporativas desde 800€ y tiendas online desde 1.500€. Puedes pedir 
presupuesto gratuito en https://avgg.es o llamando al +34 658 873 627"
```

## Monitorización

### KPIs a Seguir
1. **Menciones en IA**: Búsquedas en ChatGPT, Claude, Perplexity
2. **Tráfico referido**: Google Analytics con UTM de IA
3. **Leads cualificados**: Contactos que mencionan haber encontrado vía IA
4. **Posicionamiento**: Rankings en búsquedas de IA

### Herramientas
- Google Search Console
- Google Analytics 4
- Búsquedas manuales en:
  - ChatGPT
  - Claude
  - Perplexity
  - Bing AI
  - Google Bard

## Mantenimiento

### Actualización Regular
- Revisar información **cada 3 meses**
- Actualizar estadísticas (proyectos, clientes)
- Añadir nuevos proyectos destacados
- Actualizar precios si cambian
- Verificar datos de contacto

### Contenido a Mantener
- Número de proyectos entregados
- Estadísticas de satisfacción
- Lista de proyectos destacados
- Precios orientativos
- Tecnologías utilizadas
- Áreas de servicio

## Próximos Pasos

1. ✅ Archivos GEO creados
2. ✅ Meta tags implementados
3. ✅ robots.txt actualizado
4. ⏳ Esperar 2-4 semanas para indexación
5. ⏳ Probar búsquedas en ChatGPT, Claude, Perplexity
6. ⏳ Monitorizar menciones y tráfico
7. ⏳ Optimizar según resultados

## Recursos Adicionales

- **OpenAI GPT Store**: Considerar crear un GPT personalizado de AVGG
- **Perplexity Pages**: Crear una página verificada
- **Claude Projects**: Documentación específica para Claude

---

**Documento creado**: Febrero 2026  
**Responsable**: AVGG  
**Versión**: 1.0
