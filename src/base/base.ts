/* Arquivo configuração fixture para auxiliar no
POM com instanciação de objetos*/

import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginObject"

type MyFixtures = {
    loginPage: LoginPage
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    }
})
export {expect} from "@playwright/test"