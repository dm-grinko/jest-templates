# Jest Testing Examples with TypeScript

A comprehensive collection of Jest unit testing examples using TypeScript. This repository serves as a practical guide and reference for writing effective unit tests with Jest in TypeScript projects.

## 🎯 Purpose

This repository demonstrates various testing scenarios and best practices for unit testing with Jest and TypeScript. It's perfect for:
- Developers learning Jest testing
- Teams looking for testing patterns and examples
- Reference for common testing scenarios in TypeScript

## 🛠️ Tech Stack

- TypeScript
- Jest
- Node.js
- ts-jest

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/jest-testing-examples

# Install dependencies
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📚 Testing Examples

This repository includes examples of:

- Basic unit tests
- Async testing
- Mocking
- Spies
- Test fixtures
- Test suites organization
- Coverage reporting

### Basic Test Example

```typescript
import { sum } from '../src/basic';

describe('Basic Testing Examples', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

## 📁 Project Structure

```
├── src/           # Source files
├── tests/         # Test files
├── coverage/      # Test coverage reports
├── jest.config.js # Jest configuration
└── tsconfig.json  # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-test-example`)
3. Add your test examples
4. Submit a Pull Request

## Coverage

![Coverage Report](https://github.com/dm-grinko/jest-templates/blob/main/coverage.png)

## 📝 License

MIT License - feel free to use these examples in your own projects.


