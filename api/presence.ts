import { Redis } from "@upstash/redis";

// Live visitor presence + total view counter.
// The Vercel Upstash integration provisions KV_REST_API_URL / KV_REST_API_TOKEN
// (falls back to the UPSTASH_* names if present).
const redis = new Redis({
  url: process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? "",
  token: process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? "",
});

const ONLINE_KEY = "presence:online";
const VIEWS_KEY = "stats:views";
const WINDOW_MS = 30_000; // a heartbeat keeps a visitor "online" for 30s

export default async function handler(req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");

  try {
    const now = Date.now();
    const id =
      (typeof req.query?.id === "string" && req.query.id) ||
      `${now}-${Math.random().toString(36).slice(2)}`;
    const isFirstView = req.query?.count === "1";

    // record/refresh this visitor's heartbeat, then evict stale ones
    await redis.zadd(ONLINE_KEY, { score: now, member: id });
    await redis.zremrangebyscore(ONLINE_KEY, 0, now - WINDOW_MS);

    const online = await redis.zcard(ONLINE_KEY);

    let views: number;
    if (isFirstView) {
      views = await redis.incr(VIEWS_KEY);
    } else {
      views = (await redis.get<number>(VIEWS_KEY)) ?? 0;
    }

    return res.status(200).json({ online: Math.max(online, 1), views });
  } catch (err) {
    return res.status(503).json({ error: "presence_unavailable" });
  }
}
