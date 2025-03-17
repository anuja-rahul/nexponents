import { NextResponse } from "next/server";

type GitHubResponse = {
  stargazers_count: number;
};

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/anuja-rahul/nexponents",
      {
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data: GitHubResponse = await response.json();
    return NextResponse.json({ stars: data.stargazers_count }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
