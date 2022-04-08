import { GenericResponse, isGenericResponse } from "./GenericResponse";

/**
 * The response that is sent back to the sandbox to continue a yielded script
 * @public
 */
export type YieldResponse = GenericResponse<"continue">;

/**
 * Determines whether something is a {@link YieldResponse}
 * @public
 */
export function isYieldResponse(thing: unknown): thing is YieldResponse {
    return isGenericResponse(thing, "continue");
}
