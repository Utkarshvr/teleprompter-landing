import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "./database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured =
  Boolean(supabaseUrl) &&
  Boolean(supabaseAnonKey) &&
  !supabaseUrl.includes("YOUR_PROJECT_REF") &&
  supabaseAnonKey !== "YOUR_SUPABASE_ANON_KEY";

export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder",
);
