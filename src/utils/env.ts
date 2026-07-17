/**
 * Central place for reading public env vars that drive the
 * waitlist vs. store-download switch. Keeping the reads here (rather than
 * scattered through components) makes it obvious what the site depends on.
 */

export function getIsAppPublished(): boolean {
  return process.env.NEXT_PUBLIC_IS_APP_PUBLISHED === "true";
}

export function getPlayStoreUrl(): string {
  return process.env.NEXT_PUBLIC_PLAYSTORE_URL?.trim() ?? "";
}

export function getAppStoreUrl(): string {
  return process.env.NEXT_PUBLIC_APPSTORE_URL?.trim() ?? "";
}

export function getSupabaseUrl(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
}

export function getSupabaseAnonKey(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";
}
