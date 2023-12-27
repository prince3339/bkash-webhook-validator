import URLSafeBase64 from 'urlsafe-base64';
import {
  createHmacHash,
  compareHmacDigest
} from './utils/utils.js';

export const validateSignature = ({
  finalPayload,
  apiKey,
  signature
}) => {
  const payloadBuffer = Buffer.from(finalPayload, 'utf-8');

  const urlSafeApiKey = URLSafeBase64.decode(apiKey);
  const decodedSignature = URLSafeBase64.decode(signature);
  const computedDigest = createHmacHash(payloadBuffer, urlSafeApiKey);

  return compareHmacDigest(computedDigest, decodedSignature);
}
