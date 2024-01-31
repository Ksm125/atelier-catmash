import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import '../translations';

afterEach(() => {
  // runs a cleanup after each test case (e.g. clearing jsdom)
  cleanup();
});
