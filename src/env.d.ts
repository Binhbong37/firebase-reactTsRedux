declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SOME_CONFIGURATION: numbers
      NODE_ENV: 'development' | 'production' | 'test';

    }
  }
}

export {}

