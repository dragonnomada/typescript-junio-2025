# 🌅 Principios SOLID

## S - Single Reponsibility Principle (SRP)

Principio de única responsabilidad, cada clase o interfaz diseñada tiene una única responsabilidad por la que debe ser mantenida.

## O - Open/Close Principle (OCP)

Principio de abierto/cerrado, cada clase o interfaz debe estar abierta a la extensión, pero cerrada a la modificación.

Cuando diseñamos una clase, su operación debe estar cerrada y solo deberá ser reemplazada a futuro, no modificada.

## L - Liskov Substitution Principle (LSP)

Principio de sustitución de Liskov, cualquier herencia (clase extendida) debe poder ser sustituida por su clase base (superior) sin romper la funcionalidad o modificar el comportamiento.

## I - Interface Segregation Principle (ISP)

Principio de segregación de interfaces, una clase no debe ser forzada a implementar interfaces que no usa, por ejemplo, pensar en proyectar funcionalidad a futuro que no esté disponible inmediatamente.

## D - Dependency Inversion Principle (DIP)

Principio de inversión de dependencia, las clases siempre deben depender de interfaces, no de otras clases.