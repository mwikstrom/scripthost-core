import { GenericMessage, isGenericMessage } from "./GenericMessage";
import { isString } from "./internal/guard";
import { ScriptValue } from "./ScriptValue";

/**
 * The message that is sent from the underlying sandbox to invoke a function
 * exposed by the script host.
 * @public
 */
export interface FunctionCallRequest extends GenericMessage<"call"> {
    /** The function that shall be called */
    key: string;

    /** Function call arguments */
    args: ScriptValue[];

    /** Specifies whether the function is called from an idempotent script */
    idempotent: boolean;

    /** Unique identifier of the message that caused script evaluation */
    correlationId: string;

    /**
     * Optionally includes the global variables that were written during script evaluation,
     * before the current function call. 
     * 
     * The values of the provided map represents the version of the global scope that became
     * current after the corresponding variable was last written.
     * 
     * This property may be omitted unless the script is evaluated with the `track` option
     */
     written?: Map<string, number>
}

/**
 * Determines whether something is a {@link FunctionCallRequest}
 * @public
 */
export function isFunctionCallRequest(thing: unknown): thing is FunctionCallRequest {
    return isGenericMessage(thing, "call") && isString(thing["key"]);
}
