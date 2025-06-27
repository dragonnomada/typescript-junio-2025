import { type RandomUserService } from "./RandomUserService";
import { RandomUserServiceBuilder } from "./RandomUserServiceBuilder";

export class RandomUserServiceShared {

    // Una instancia (pública estática) compartida en toda la aplicación
    // public static shared: RandomUserService = RandomUserServiceBuilder.createServiceByMockup()
    // public static shared: RandomUserService = RandomUserServiceBuilder.createServiceByApi()
    public static shared: RandomUserService = RandomUserServiceBuilder.createServiceByRepositoryApi()

    public static refreshShared(): RandomUserService {

        this.shared = this.shared.copy()

        return this.shared

    }

}