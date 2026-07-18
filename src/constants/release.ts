/**
 * Single source of truth for the current release.
 * Update these whenever a new version ships to GitHub Releases.
 */

export const RELEASE_VERSION = 'v0.1.0';

/** Direct download URL for the Windows installer. */
export const RELEASE_DOWNLOAD_URL =
  'https://github.com/Y45H-GitHub/form-vault/releases/download/v0.1.0/FormVault-Setup-0.1.0.exe';

/** GitHub Releases page (used for "all releases" links). */
export const RELEASES_PAGE_URL =
  'https://github.com/Y45H-GitHub/form-vault/releases';

/** Installer size shown in UI copy (rounded from 87 189 763 bytes). */
export const RELEASE_SIZE_MB = '83 MB';

/** Minimum Windows version. */
export const MIN_WINDOWS = 'Windows 10 (build 1809) or later';

/** SHA-256 of FormVault-Setup-0.1.0.exe, from the GitHub release asset - lets users verify the download. */
export const RELEASE_SHA256 = 'dac8f2dda4f7b8c746891f1f6e47946e5cf26d27231738f2ad9a7d478e8dc0d7';
