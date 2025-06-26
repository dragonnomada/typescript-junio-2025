# 🦺 Patrón Constructor en TypeScript

El patrón Constructor tiene el objetivo de crear secuencialmente una instancia añadiendo paso a paso cada elemento hasta finalizar.

Su principal uso es poder construir el objeto mediante una serie de ajustes.

## 🛡️ Recomendación

✅ Ideal para objetos con muchos atributos opcionales.

❌ Evita usarlo para objetos con muchos atributos no opcionales.

## Ejemplo

```tsx
export type SushiTipoRollo = "redondo" | "cuadrado"
export type SushiProteina = "atun" | "salmon" | "cangrejo" | "camaron" | "pollo" | "res" | "caviar"
export type SushiAdimento = "pepino" | "aguacate" | "filadelfia" | "surimi" | "cebollin"
export type SushiCoberturaAlga = "interna" | "externa"
export type SushiTopping = "mango" | "platano" | "kiwi"
export type SushiSalsa = "soja" | "anguila" | "dragon"

export class Sushi {

    protected tipoRollo: SushiTipoRollo
    protected proteina?: SushiProteina
    protected adimento1?: SushiAdimento
    protected adimento2?: SushiAdimento
    protected adimento3?: SushiAdimento
    protected coberturaAlga?: SushiCoberturaAlga
    protected empanizado?: boolean
    protected topping?: SushiTopping
    protected salsa?: SushiSalsa

    protected constructor(tipoRollo: SushiTipoRollo) {
        this.tipoRollo = tipoRollo
    }

    public getTipoRollo(): SushiTipoRollo {
        return this.tipoRollo
    }

    public getProteina(): SushiProteina | undefined {
        return this.proteina
    }
    public getAdimento1(): SushiAdimento | undefined {
        return this.adimento1
    }
    public getAdimento2(): SushiAdimento | undefined {
        return this.adimento2
    }
    public getAdimento3(): SushiAdimento | undefined {
        return this.adimento3
    }
    public getCoberturaAlga(): SushiCoberturaAlga | undefined {
        return this.coberturaAlga
    }
    public getEmpanizado(): boolean | undefined {
        return this.empanizado
    }
    public getTopping(): SushiTopping | undefined {
        return this.topping
    }
    public getSalsa(): SushiSalsa | undefined {
        return this.salsa
    }

}

export class SushiBuilder extends Sushi {

    public constructor(tipoRollo: SushiTipoRollo) {
        super(tipoRollo)
    }

    public agregarProteina(proteina: SushiProteina): SushiBuilder {
        this.proteina = proteina
        return this
    }

    public agregarAdimentos(adimento1: SushiAdimento, adimento2: SushiAdimento, adimento3: SushiAdimento): SushiBuilder {
        if (adimento1 === adimento2 || adimento1 === adimento3) throw Error("No se permiten adimentos iguales")
        if (adimento2 === adimento3) throw Error("No se permiten adimentos iguales")

        this.adimento1 = adimento1
        this.adimento2 = adimento2
        this.adimento3 = adimento3
        return this
    }

    public coberturaAlgaExterna(): SushiBuilder {
        this.coberturaAlga = "externa"
        return this
    }

    public coberturaAlgaInterna(): SushiBuilder {
        this.coberturaAlga = "interna"
        return this
    }

    public conEmpanizado(): SushiBuilder {
        this.empanizado = true
        return this
    }

    public sinEmpanizado(): SushiBuilder {
        this.empanizado = false
        return this
    }

    public agregarTopping(topping: SushiTopping): SushiBuilder {
        this.topping = topping
        return this
    }

    public agregarSalsa(salsa: SushiSalsa): SushiBuilder {
        this.salsa = salsa
        return this
    }

    public validarProteina(): SushiBuilder {
        if (!this.proteina) throw Error("No tiene ninguna proteína")
        return this
    }


}
```

## Ejercicio

Crea una clase llamada `UsuarioConfiguracion` con elementos que pueda configurar en su interfaz, luego crea `UsuarioConfiguracionBuilder` que permita construir diferentes configuraciones del usuario.

Recuerda poner la mayoría de las configuraciones como opcionales.

**Avanzado**: Diseña un componente que reciba la configuración del usuario y adapte la interfaz.