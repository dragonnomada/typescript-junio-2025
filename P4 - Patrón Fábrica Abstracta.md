# 🏢 Patrón Fábrica Abstracta en TypeScript

El patrón Fábrica Abstracta tiene el objetivo de ocultar la instanciación de varias clases para conformar una familia de objetos.

Su principal uso es poder resolver a través de los parámetros, un conjunto de instancias finales.

## 🛡️ Recomendación

✅ Ideal para diferentes una familia de subtipos de múltiples clases o componente.

❌ Evita usarlo para resolver clases base de distintas familias.

## Ejemplo

```tsx
// TODO: Ejemplo en clase
```

## Ejercicio

Diseña una interfaz `Credencial` con los métodos de acceso Para verificar y acceder y dos clases que implementen la credencial, luego una interfaz `Usuario` con los métodos para recolectar su información general y dos clases que implementen al usuario. Luego, crea una fábrica abstracta para crear una familia de credencial y usuario y dos clases distintas que implementen un tipo de credencial y un tipo de usuario.

Pista: Puedes crear una credencial basada en correo y contraseña (para vendedores) y otra en una llave numérica (para supervisores), luego un usuario de tipo vendedor y otro de tipo supervisor.

Crea componentes de prueba distintos para validar su funcionamiento.

**Avanzado**: Diseña un componente que permita iniciar sesión con un vendedor y una acción que requiera acciones del supervisor, luego integra el acceso interno del supervisor para aprobar, sin perder el contexto del vendedor.