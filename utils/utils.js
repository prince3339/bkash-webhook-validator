import crypto from 'crypto';

export const createHmacHash = (data, key) => {
  const hmac = crypto.createHmac('sha256', key);
  hmac.update(data);
  return hmac.digest();
};

export const compareHmacDigest = (digest, signature) => {
  const isValid = crypto.timingSafeEqual(digest, signature);
  return isValid;
};
