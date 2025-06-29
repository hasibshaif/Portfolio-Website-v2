// Favicon Configuration
// Change the FAVICON_NUMBER below to switch between your 6 favicon options
// Available options: 1, 2, 3, 4, 5, 6

export const FAVICON_CONFIG = {
  // Change this number to switch favicons (1-6)
  FAVICON_NUMBER: 5,
  
  // Available favicon options
  AVAILABLE_FAVICONS: [1, 2, 3, 4, 5, 6] as const,
  
  // Get the favicon path
  getFaviconPath: () => `/favicon/favicon${FAVICON_CONFIG.FAVICON_NUMBER}.ico`,
  
  // Validate favicon number
  isValidFaviconNumber: (num: number): num is 1 | 2 | 3 | 4 | 5 | 6 => {
    return FAVICON_CONFIG.AVAILABLE_FAVICONS.includes(num as 1 | 2 | 3 | 4 | 5 | 6);
  }
};

// Quick helper function to get current favicon path
export const getCurrentFavicon = () => FAVICON_CONFIG.getFaviconPath(); 