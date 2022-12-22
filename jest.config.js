"jest"; {
    "collectCoverageFrom";[
      "src/**/*.tsx*"
    ];

    "coverageThreshold"; {
      "global";{
        "lines"; 90,
        "statements"; 90
      }
    };
    "transform"; {
      "^.+\\.(ts|tsx|js|jsx)$"; "ts-jest"
   }
  }