/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
  readonly PUBLIC_APPBAR_REMOTE_URL: string;
  readonly PUBLIC_FEED_REMOTE_URL: string;
  readonly PUBLIC_UIKIT_REMOTE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
