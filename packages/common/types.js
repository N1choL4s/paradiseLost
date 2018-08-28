import * as React from 'react'

export type Module = {
    id: string,
    title: string,
    code: ?string,
    shortid: string,
    directoryShortid: ?string,
    isNotSynced: boolean,
    sourceId: string,
    isBinary: boolean,
};

export type GitInfo = {
    repo: string,
    username: string,
    path: string,
    branch: string,
    commitSha: string,
};

export type Directory = {
    id: string,
    title: string,
    directoryShortid: ?string,
    shortid: string,
    sourceId: string,
};

export type Sandbox = {
    id: string,
    title: ?string,
    description: string,
    viewCount: number,
    likeCount: number,
    forkCount: number,
    userLiked: boolean,
    modules: Array<Module>,
    directories: Array<Directory>,
    owned: boolean,
    npmDependencies: {
        [dep: string]: string,
    },
    externalResources: Array<string>,
    privacy: 0 | 1 | 2,
    author: ?User,
    forkedFromSandbox: ?{ title: string, id: string },
    git: ?GitInfo,
    tags: Array<string>,
    /**
     * This is the source it's assigned to, a source contains all dependencies, modules and directories
     *
     * @type {string}
     */
    sourceId: string,
    template:
        | 'create-react-app'
        | 'create-react-app-typescript'
        | 'angular-cli'
        | '@dojo/cli-create-app'
        | 'vue-cli'
        | 'preact-cli'
        | 'svelte',
    entry: string,
    originalGit: ?GitInfo,
    originalGitCommitSha: ?string,
    originalGitChanges: ?{
        added: Array<string>,
        modified: Array<string>,
        deleted: Array<string>,
        rights: 'none' | 'read' | 'write' | 'admin',
    },
    version: number,
};