# Landing Supabase setup

Waiting list signups for the marketing site. Use the **same Supabase project** as `teleprompter-app`.

## 1. Run the schema

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project
2. **SQL Editor** → New query
3. Paste [`waiting_list.sql`](./waiting_list.sql)
4. Click **Run**

## 2. Environment variables

Copy [`.env.example`](../.env.example) values into `.env.local`:

| Variable | Where to find it |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Project Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Project Settings → API → `anon` `public` key |

Restart `npm run dev` after changing env vars.

## How it works

- The waitlist form inserts into `public.waiting_list` with the anon key.
- RLS allows `INSERT` only; emails are not readable from the client.
- Duplicate emails are treated as success (“You’re already on the list”).
