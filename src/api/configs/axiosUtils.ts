// Import AbortController from the DOM types

// Define a type for the API object
export type ApiObject = Record<string, (...args: any[]) => Promise<any>>;

// Define a type for the cancellation handler object
interface CancellationHandler {
    controller: AbortController | undefined;
    handleRequestCancellation: () => AbortController;
}

// Define a type for the cancellation API object
export type CancelApiObject<T extends ApiObject> = {
    [K in keyof T]: CancellationHandler;
};

// Function to define cancellation handlers for API methods
export function defineCancelApiObject<T extends ApiObject>(apiObject: T): CancelApiObject<T> {
    // Initialize an empty cancelApiObject
    const cancelApiObject: Partial<CancelApiObject<T>> = {};

    // Iterate over each API property name
    Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
        // Initialize an object to hold the cancellation controller
        const cancellationControllerObject: Partial<CancellationHandler> = {
            controller: undefined,
        };

        // Define the cancellation handler for the API method
        const cancellationHandler: CancellationHandler = {
            controller: undefined,
            handleRequestCancellation: () => {
                // If the controller already exists, cancel the request
                if (cancellationControllerObject.controller) {
                    cancellationControllerObject.controller.abort();
                }

                // Generate a new controller with the AbortController factory
                cancellationControllerObject.controller = new AbortController();

                return cancellationControllerObject.controller;
            },
        };

        // Associate the cancellation handler with the API property name
        cancelApiObject[apiPropertyName as keyof T] = cancellationHandler;
    });

    // Type assertion since TypeScript cannot infer the type of cancelApiObject
    return cancelApiObject as CancelApiObject<T>;
}
