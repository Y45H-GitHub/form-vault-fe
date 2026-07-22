interface GithubAsset {
  name: string;
  download_count: number;
}

interface GithubRelease {
  assets: GithubAsset[];
}

/** Total downloads of the Windows installer (.exe) across every published release - excludes latest.yml/.blockmap update-check noise. */
export async function getInstallerDownloadCount(owner: string, repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
    if (!res.ok) return null;
    const releases = (await res.json()) as GithubRelease[];
    return releases
      .flatMap((r) => r.assets)
      .filter((a) => a.name.endsWith('.exe'))
      .reduce((sum, a) => sum + a.download_count, 0);
  } catch {
    return null;
  }
}
