/**
 * This package will help to capitalize
 * first letter(s) of strings passed in
 */

/**
 * This will help cycle keys of types and return type of the chosen field
 */
type TyperMapper<T, P extends keyof T> = T[P];

type filterType = 'all' | 'single' | 'first';

type CheckFilter<T extends filterType> = T extends 'single' ? string : undefined;

type normalCaseOptions = {
  filter: filterType;
  textToCapitalize?: CheckFilter<filterType>;
  // seperator?: "_" | "," | " "
};

type normalCaseGeneratorType = (value: string, options?: normalCaseOptions) => string;

export const normalCaseGenerator: normalCaseGeneratorType = (value, options) => {
  let capitalizedString: string;
  /**
   * Check to confirm if options are passed in
   */
  if (options) {
    const { filter, textToCapitalize: textToFind } = options;
    /**
     * If filter does not exist
     */
    if (!filter) {
      /**
       * Capitalize just the first letter
       */
      const firstLetterCapitalized = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
      return firstLetterCapitalized;
    }

    /**
     * If filter is set to all, then capitalize all values in text
     */
    if (filter === 'all') {
      /**
       * Capitalize all first letters of string passed in
       */
      const splitValues = value.split(' ');
      /**
       * Map through every value
       */
      const returnedAllSplitValues = splitValues.map((splitValue) => {
        const allCapitalizedString = `${splitValue.charAt(0).toUpperCase()}${splitValue.slice(1)}`;
        return allCapitalizedString;
      });

      return returnedAllSplitValues.join(` `);
    }

    /**
     * If filter is set to first, then first letter should be capitalized
     */
    if (filter === 'first') {
      const firstLetterCapitalizedString = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
      return firstLetterCapitalizedString;
    }

    /**
     * If filter is set to single, then textToCapitalize should be capitalized
     */
    if (filter === 'single') {
      if (textToFind) {
        const capitalizedSingleString = value.split(' ');
        const returnedSplitValues = capitalizedSingleString.map((splittedValue) => {
          if (splittedValue.toLowerCase() === textToFind.toLowerCase())
            return `${splittedValue.charAt(0).toUpperCase()}${splittedValue.slice(1)}`;
          return splittedValue;
        });
        return returnedSplitValues.join(' ');
      } else {
        return value;
      }
    }

    capitalizedString = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
    return capitalizedString;
  }

  /**
   * Capitalize just the first letter
   */
  capitalizedString = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  return capitalizedString;
};
