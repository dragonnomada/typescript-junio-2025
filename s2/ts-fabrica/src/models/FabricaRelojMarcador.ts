import { MarcadorPistas, MarcadorTiempos, type Marcador } from "./Marcador";
import { RelojCronometro, RelojHoraMinuto, type Reloj } from "./Reloj";

export class FabricaRelojMarcador {

    public static crearRelojTabla(): [Reloj, Marcador] {
        const reloj = new RelojHoraMinuto()
        const marcador = new MarcadorTiempos()

        return [reloj, marcador]
    }
    
    public static crearCronometroPista(): [Reloj, Marcador] {
        const reloj = new RelojCronometro()
        const marcador = new MarcadorPistas()

        return [reloj, marcador]
    }

}