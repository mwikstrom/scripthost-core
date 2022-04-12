import { TrackedVariable } from "./EvaluateScriptResponse";
import { GenericResponse, isGenericResponse } from "./GenericResponse";
import { ScriptValue } from "./ScriptValue";

/**
 * The response that is sent when an error occurred
 * @public
 */
export interface ErrorResponse extends GenericResponse<"error">{
    message: string;

    /**
     * Optionally includes the global variables that were accessed during script evaluation.
     * 
     * This property is omitted unless the error occurred during script evaluation and may 
     * be omitted unless the script is evaluated with the `track` option.
     */
    vars?: Map<string, TrackedVariable>;

    /**
     * The value assigned to `this.refresh` during script evaluation.
     * 
     * This property is omitted unless the error occurred during script evaluation and may
     * be omitted unless the script assigned `this.refresh`.
     */
    refresh?: ScriptValue;
 }

/**
 * Determines whether something is an {@link ErrorResponse}
 * @public
 */
export function isErrorResponse(thing: unknown): thing is ErrorResponse {
    return isGenericResponse(thing, "error");
}
