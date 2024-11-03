import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppData } from "./app-data";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(),
		importProvidersFrom(FormsModule, InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })),
		provideRouter(routes)
	]
};
