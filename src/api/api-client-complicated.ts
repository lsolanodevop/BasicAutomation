import { APIRequestContext, request } from 'playwright';
import testData from '../utils/test-data'

export class ApiClient {
    private baseUrl: string;
    private jwtToken: string | null = null;
    private requestContext: APIRequestContext | null = null;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async initialize() {
        this.requestContext = await request.newContext({
            baseURL: this.baseUrl,
            extraHTTPHeaders: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }

    async authenticate(): Promise<void> {
        try {
            // Create a separate request context for authentication
            const authRequestContext = await request.newContext({ baseURL: this.baseUrl });
            const authData = testData.authData();
            const response = await authRequestContext.post('/login',{
              data: authData  });
            console.log(response.body);
            if (!response.ok()) {
                const errorBody = await response.text();
                throw new Error(`Authentication failed with status ${response.status()}: ${errorBody}`);
            }

            const responseBody = await response.json();
            this.jwtToken = responseBody.token;

            await authRequestContext.dispose(); // Dispose of the authentication context

            if (!this.requestContext) {
                throw new Error("Request context not initialized. Call initialize() first.");
            }

            // Create a NEW request context with the authentication token
            await this.requestContext.dispose(); // Dispose of the old context
            this.requestContext = await request.newContext({
                baseURL: this.baseUrl,
                extraHTTPHeaders: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.jwtToken}`,
                },
            });

        } catch (error) {
            console.error("Error during authentication:", error);
            throw error;
        }
    }

    async post(endpoint: string, data: any) {
        if (!this.requestContext) {
            throw new Error("Request context not initialized. Call initialize() first.");
        }
        if (!this.jwtToken) {
            throw new Error("You must authenticate before making requests.");
        }
        return this.requestContext.post(endpoint, { data });
    }

    async get(endpoint: string) {
        if (!this.requestContext) {
            throw new Error("Request context not initialized. Call initialize() first.");
        }
        if (!this.jwtToken) {
            throw new Error("You must authenticate before making requests.");
        }
        return this.requestContext.get(endpoint);
    }

    async dispose() {
        if (this.requestContext) {
            await this.requestContext.dispose();
        }
    }
}