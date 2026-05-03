import ProblemViewClient from "./ProblemViewClient";

export default async function ProblemViewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProblemViewClient slug={slug} />;
}
