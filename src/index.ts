/**
 * @amlplugins/amazon-sns
 *
 * Thin namespaced re-export of the native @aws-sdk/client-sns SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Amazon SNS — pub/sub topics, SMS, email, mobile push, fan-out to SQS/Lambda/HTTP.
 */

import * as _sdk from "@aws-sdk/client-sns";
export * from "@aws-sdk/client-sns";
export { _sdk as sdk };
export default _sdk;
