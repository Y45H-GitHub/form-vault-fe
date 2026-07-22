/**
 * Single source of truth for the current release.
 * Update these whenever a new version ships to GitHub Releases.
 */

export const RELEASE_VERSION = 'v0.2.1';

export const GITHUB_OWNER = 'Y45H-GitHub';
export const GITHUB_REPO = 'retrivo';

/** Don't show the download counter until it's a real signal instead of a small, discouraging number. */
export const MIN_DOWNLOADS_TO_SHOW = 0;

/** Direct download URL for the Windows installer. */
export const RELEASE_DOWNLOAD_URL =
  'https://github.com/Y45H-GitHub/retrivo/releases/download/v0.2.1/Retrivo-Setup-0.2.1.exe';

/** GitHub Releases page (used for "all releases" links). */
export const RELEASES_PAGE_URL =
  'https://github.com/Y45H-GitHub/retrivo/releases';

/** Installer size shown in UI copy (rounded from 87 178 319 bytes, the real v0.2.1 asset). */
export const RELEASE_SIZE_MB = '83 MB';

/** Minimum Windows version. */
export const MIN_WINDOWS = 'Windows 10 (build 1809) or later';

/** SHA-256 of Retrivo-Setup-0.2.1.exe, from the GitHub release asset - lets users verify the download. */
export const RELEASE_SHA256 = 'f93a36b18eacdf99a5ffaa8adfbecdc9f791aadb7f9b2ab7c3b4bba4ba8dc7ab';
