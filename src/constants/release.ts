/**
 * Single source of truth for the current release.
 * Update these whenever a new version ships to GitHub Releases.
 */

export const RELEASE_VERSION = 'v0.2.0';

// NOT LIVE YET: points at the first Retrivo-branded release (backend package.json was bumped to
// 0.2.0 to avoid colliding with the old FormVault-Setup-0.1.0.exe asset still sitting on the
// renamed repo's v0.1.0 release). This 404s until that v0.2.0 release is actually built and
// published with `npm run build -- --publish always`. Don't deploy this site before then, and
// update RELEASE_SHA256 below from the real uploaded asset once it exists.

/** Direct download URL for the Windows installer. */
export const RELEASE_DOWNLOAD_URL =
  'https://github.com/Y45H-GitHub/retrivo/releases/download/v0.2.0/Retrivo-Setup-0.2.0.exe';

/** GitHub Releases page (used for "all releases" links). */
export const RELEASES_PAGE_URL =
  'https://github.com/Y45H-GitHub/retrivo/releases';

/** Installer size shown in UI copy (rounded from 87 189 763 bytes). */
export const RELEASE_SIZE_MB = '83 MB';

/** Minimum Windows version. */
export const MIN_WINDOWS = 'Windows 10 (build 1809) or later';

/** SHA-256 of Retrivo-Setup-0.2.0.exe, from the GitHub release asset - lets users verify the download. PLACEHOLDER: still the old 0.1.0 asset's hash, replace once 0.2.0 ships. */
export const RELEASE_SHA256 = 'dac8f2dda4f7b8c746891f1f6e47946e5cf26d27231738f2ad9a7d478e8dc0d7';
