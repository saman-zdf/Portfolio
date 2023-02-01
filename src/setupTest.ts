/*
 * The imports are dev-dependencies and
 * we don't want to add them as actual
 * dependencies, we just simply disable
 * the Eslint error fo all tests file
 */

/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
