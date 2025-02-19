/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['main', 'master'],
  // NOTE: commit-analyzer, release-notes-generator, npm and github are already part of @semantic-release.
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'README.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
