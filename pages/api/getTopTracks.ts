import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  // index.tsx

  // const queryParamString = new URLSearchParams({term: button_state })

  // fetch("/api/getTopTracks?" + queryParamString.toString())

  const { term } = req.query;

  const queryParams = new URLSearchParams({
    time_range: (term as string) ?? "short_term",
    limit: "5",
  });

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?" + queryParams.toString(),
    {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  return res.status(200).json(data);
}
