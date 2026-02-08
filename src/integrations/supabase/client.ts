// Backend Disconnected
// This file is kept to avoid breaking imports during the transition,
// but it no longer exports a valid Supabase client.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

// Mock client that logs warnings
const createMockClient = () => {
  const handler = {
    get: (target: any, prop: string) => {
      if (prop === 'then') return undefined; // Promise safety
      console.warn(`Supabase client accessed (${prop}) but backend is disconnected.`);
      return new Proxy(() => { }, handler); // Recursive proxy for chained calls
    },
    apply: () => {
      console.warn("Supabase function called but backend is disconnected.");
      return Promise.resolve({ data: null, error: { message: "Backend disconnected" } });
    }
  };
  return new Proxy({}, handler);
};

export const supabase = createMockClient() as any;