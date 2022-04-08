import { GenericMessage, isGenericMessage } from "./GenericMessage";

/**
 * The message that is sent from the underlying sandbox when script execution is yielded.
 * @public
 */
export interface YieldRequest extends GenericMessage<"yield"> {
    /** Unique identifier of the message that caused script evaluation */
    correlationId: string;

    /**
     * Optionally includes the global variables that were written during script evaluation,
     * before the current function call. 
     * 
     * The values of the provided map represents the version of the global scope that became
     * current after the corresponding variable was last written.
     * 
     * This property is omitted unless the script is evaluated with the `track` option.
     */
     written?: Map<string, number>
}

/**
 * Determines whether something is a {@link YieldRequest}
 * @public
 */
export function isYieldRequest(thing: unknown): thing is YieldRequest {
    return isGenericMessage(thing, "yield");
}
