<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [scripthost-core](./scripthost-core.md) &gt; [EvaluateScriptResponse](./scripthost-core.evaluatescriptresponse.md)

## EvaluateScriptResponse interface

The response that is sent back after successful script evaluation

<b>Signature:</b>

```typescript
export interface EvaluateScriptResponse extends GenericResponse<"result"> 
```
<b>Extends:</b> [GenericResponse](./scripthost-core.genericresponse.md)

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [refresh?](./scripthost-core.evaluatescriptresponse.refresh.md) | [ScriptValue](./scripthost-core.scriptvalue.md) | <i>(Optional)</i> The value assigned to <code>this.refresh</code> during script evaluation |
|  [result](./scripthost-core.evaluatescriptresponse.result.md) | [ScriptValue](./scripthost-core.scriptvalue.md) | The result value |
|  [vars?](./scripthost-core.evaluatescriptresponse.vars.md) | Map&lt;string, [TrackedVariable](./scripthost-core.trackedvariable.md)<!-- -->&gt; | <i>(Optional)</i> Optionally includes the global variables that were accessed during script evaluation.<!-- -->This property may be omitted unless the script is evaluated with the <code>track</code> option |

