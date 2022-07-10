/**
 * This package will help to capitalize
 * first letter(s) of strings passed in
 */

/**
 * This will help cycle keys of types and return type of the chosen field
 */
type TyperMapper<T, P extends keyof T> = T[P]

type filterType = 'all' | 'single' | 'first'

type CheckFilter<T extends filterType> = T extends 'single' ? string : undefined

type normalCaseOptions = {
    filter: filterType,
    textToCapitalize?: CheckFilter<filterType>;
    // seperator?: "_" | "," | " "
}

type normalCaseGeneratorType = (value: string, options?: normalCaseOptions) => string

export const normalCaseGenerator: normalCaseGeneratorType = (value, options) => {
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
            let capitalizedString = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
            return capitalizedString;
        }

        /**
         * If filter is set to all, then capitalize all values in text
         */
        if (filter === 'all') {
            /**
             * Capitalize all first letters of string passed in
             */
            let splitValue = value.split(' ');
            /**
             * Map through every value
             */
            let returnedSplitValues = splitValue.map((value) => {
                let capitalizedString = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
                return capitalizedString;
            })

            return returnedSplitValues.join(` `);
        }

        /**
         * If filter is set to first, then first letter should be capitalized
         */
        if (filter === 'first') {
            let capitalizedString = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
            return capitalizedString;
        }

        /**
         * If filter is set to single, then textToCapitalize should be capitalized
         */
        if (filter === 'single') {
            if(textToFind) {
                let capitalizedString = value.split(' ');
                let returnedSplitValues = capitalizedString.map((value) => {
                    if (value.toLowerCase() === textToFind.toLowerCase())
                        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
                    return value;
                })
                return returnedSplitValues.join(" ")
            } else {
                return value;
            } 
        }
        /**
             * Capitalize just the first letter
             */
        let capitalizedString = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
        return capitalizedString;
    }

    /**
     * Capitalize just the first letter
     */
    let capitalizedString = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
    return capitalizedString;
}