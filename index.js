import URLSafeBase64 from 'urlsafe-base64';
import {
  createHmacHash,
  compareHmacDigest
} from './utils/utils.js';

export const validateSignature = ({
  payload,
  apiKey,
  signature
}) => {
  const payloadBuffer = Buffer.from(payload, 'utf-8');

  const urlSafeApiKey = URLSafeBase64.decode(apiKey);
  const decodedSignature = URLSafeBase64.decode(signature);
  const computedDigest = createHmacHash(payloadBuffer, urlSafeApiKey);

  return compareHmacDigest(computedDigest, decodedSignature);
}
