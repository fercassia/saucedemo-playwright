/* Arquivo configuração fixture para auxiliar no
POM com instanciação de objetos*/

import {test as base} from "@playwright/test"
import { LoginStep } from "../steps/LoginSteps.ts"

type MyFixtures = {
    loginStep: LoginStep
}

export const test = base.extend<MyFixtures>({
    loginStep: async ({page}, use) => {
        await use(new LoginStep(page))
    }
})
export {expect} from "@playwright/test"